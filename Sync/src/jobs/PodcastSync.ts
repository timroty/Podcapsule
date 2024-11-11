import * as podcast_db from "../accessors/supabase/Podcast";
import * as podcast_episode_db from "../accessors/supabase/PodcastEpisode";
import { GetRssFeed } from "../accessors/Podcast";

const convert = require("xml-js");

// Sync new podcast episodes
export async function PodcastSync(): Promise<void> {
  const podcastIdToSync = await podcast_db.RetrieveTopPodcastFromSyncQueue();

  if (!podcastIdToSync) {
    return;
  }

  const podcast = await podcast_db.GetPodcast(podcastIdToSync);

  if (!podcast.rss_url) {
    podcast_db.RemoveFromSyncQueue(podcastIdToSync);
    podcast_db.UpdateLastSyncDate(podcastIdToSync, new Date().toUTCString());
    return;
  }

  const podcastRssFeed: string = await GetRssFeed(podcast.rss_url);

  const rssCompactJson = JSON.parse(
    convert.xml2json(podcastRssFeed, { compact: false, spaces: 2 }),
  );

  // Narrow down to the episodes array
  const elements = rssCompactJson.elements[0].elements[0].elements;

  // Retrieve only episode data
  const itemElements = elements.filter((item: any) => {
    return item.name === "item";
  });

  for (const episodeJson of itemElements) {
    let guid = '';
    for (const element of episodeJson.elements) {
        if (element.name == 'guid'){
            const type = element.elements[0].type;
            guid = element.elements[0][type];
        }

        // Remove query params on image url if there are any.
        // There was a podcast where the query params were causing XML parsing issues.
        if (element.name == 'itunes:image'){
          element.attributes.href = element.attributes.href.split('?')[0];
        }
    }

    if (!guid) {
      continue;
    }

    let episodeExists = await podcast_episode_db.GetPodcastEpisodeByGuid(podcastIdToSync, guid);

    // Add to podcast episode table if episode does not exist
    if (!episodeExists){
      await podcast_episode_db.Add(podcastIdToSync, episodeJson, guid);
    } else {
      // If duplicate episode, most likely means rest have been synced already
      break;
    }
  }

  podcast_db.RemoveFromSyncQueue(podcastIdToSync);
  podcast_db.UpdateLastSyncDate(podcastIdToSync, new Date().toUTCString());
}

console.log("PodcastSync: Starting ...");

PodcastSync().then(() => {
  console.log("PodcastSync: Complete");
});
