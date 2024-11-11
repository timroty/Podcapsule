import * as podcast_db from "../accessors/supabase/Podcast";

// Adds podcasts to queue to be synced
async function PodcastSyncQueue(): Promise<void> {
  const podcastsToSync = await podcast_db.GetPodcastsToSync(20);

  if (!podcastsToSync) {
    console.log(`PodcastSyncQueue: No podcasts to sync.`);
    return;
  }

  console.log(
    `PodcastSyncQueue: Adding ${podcastsToSync.length} podcasts to sync queue.`,
  );

  await podcast_db.QueuePodcastsToSync(podcastsToSync);
}

console.log("PodcastSyncQueue: Starting ...");

PodcastSyncQueue().then(() => {
  console.log("PodcastSyncQueue: Complete");
});
