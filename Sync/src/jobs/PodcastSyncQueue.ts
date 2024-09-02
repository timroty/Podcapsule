import * as podcast_db from "../accessors/supabase/Podcast";

// Adds podcasts to queue to be synced
async function PodcastSyncQueue(): Promise<void> {
  const podcastsToSync = await podcast_db.GetPodcastsToSync(20);

  if (!podcastsToSync) {
    return;
  }

  await podcast_db.QueuePodcastsToSync(podcastsToSync);
}

console.log("PodcastSyncQueue: Starting ...");

PodcastSyncQueue().then(() => {
  console.log("PodcastSyncQueue: Complete");
});