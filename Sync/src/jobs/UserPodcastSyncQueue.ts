import * as user_db from "../accessors/supabase/User";

// Adds users to queue to be synced
async function UserPodcastSyncQueue(): Promise<void> {
  const usersToSync = await user_db.GetUsersToSync(20);

  if (!usersToSync || usersToSync.length === 0) {
    return;
  }

  await user_db.QueueUsersToSync(usersToSync);
}

console.log("UserPodcastSyncQueue: Starting ...");

UserPodcastSyncQueue().then(() => {
  console.log("UserPodcastSyncQueue: Complete");
});