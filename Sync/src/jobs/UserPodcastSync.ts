import * as user_db from "../accessors/supabase/User";
import * as podcast_db from "../accessors/supabase/Podcast";
import * as podcast_episode_db from "../accessors/supabase/PodcastEpisode";
import * as user_podcast_episode_db from "../accessors/supabase/UserPodcastEpisode";
import { Template as RSSFeedTemplate } from "../constants/RSSFeedTemplate";

// Add a podcast to a user's feed
async function UserPodcastSync(): Promise<void> {
  const userIdToSync = await user_db.RetrieveTopUserFromSyncQueue();

  if (!userIdToSync) {
    console.log(`UserPodcastSync: No user to sync.`);
    return;
  }

  const updatedDate = new Date().toUTCString();
  const podcastEpisodeId =
    await podcast_episode_db.GetPodcastEpisodeToSync(userIdToSync);

  if (!podcastEpisodeId) {
    console.log(
      `UserPodcastSync: No podcast episode to sync for user ${userIdToSync}.`,
    );
    await user_db.UpdateLastSyncDate(userIdToSync, updatedDate);
    await user_db.RemoveFromSyncQueue(userIdToSync);
    return;
  }

  const user = await user_db.GetUser(userIdToSync);

  if (!user) {
    console.log(
      `UserPodcastSync: Null user returned from query for id ${userIdToSync}.`,
    );
    await user_db.RemoveFromSyncQueue(userIdToSync);
    return;
  }

  if (user.rss_feed == null) {
    const tempRSSFeed = RSSFeedTemplate;

    // Update user custom RSS feed link
    tempRSSFeed.elements[0].elements[0].elements.forEach((element: any) => {
      if (
        element.name == "atom:link" &&
        element.attributes.type == "application/rss+xml"
      ) {
        element.attributes.href =
          process.env.BASE_API_URL + "/api/user/rss/" + user!.id;
      }
    });

    // Update first episode pubDate
    tempRSSFeed.elements[0].elements[0].elements.forEach((element: any) => {
      if (element.name == "item") {
        // elements[3] is hard-coded pubDate
        element.elements[3].elements[0].text = updatedDate;
      }
    });

    user.rss_feed = JSON.stringify(tempRSSFeed);
  }

  const podcastEpisode =
    await podcast_episode_db.GetPodcastEpisodeById(podcastEpisodeId);
  const podcast = await podcast_db.GetPodcast(podcastEpisode.podcast_id);

  const userRSSFeedJson = JSON.parse(user.rss_feed!);
  const podcastEpisodeJson = JSON.parse(podcastEpisode.rss_data as string);

  podcastEpisodeJson.elements.forEach((element: any) => {
    if (element.name == "pubDate") {
      element.elements[0].text = updatedDate;
    }
    if (element.name == "title" || element.name == "itunes:title") {
      element.elements[0].text =
        podcast.title + " - " + element.elements[0].text;
    }
  });

  userRSSFeedJson.elements[0].elements[0].elements.forEach((element: any) => {
    if (element.name == "pubDate" || element.name == "lastBuildDate") {
      element.elements[0].text = updatedDate;
    }
  });

  userRSSFeedJson.elements[0].elements[0].elements.push(podcastEpisodeJson);

  console.log(`UserPodcastSync: Updating user ${user.id} RSS feed.`);

  await user_db.UpdateRSSFeed(user.id, JSON.stringify(userRSSFeedJson));
  await user_db.UpdateLastSyncDate(user.id, updatedDate);
  await user_db.RemoveFromSyncQueue(user.id);
  await user_podcast_episode_db.AddUserEpisode(user.id, podcastEpisodeId);
}

console.log("UserPodcastSync: Starting ...");

UserPodcastSync().then(() => {
  console.log("UserPodcastSync: Complete");
});
