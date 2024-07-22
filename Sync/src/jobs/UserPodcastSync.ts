import * as user_db from "../accessors/supabase/User";

async function UserPodcastSync(): Promise<void> {
  const usersToSync = await user_db.GetUsersToSync(20);

  console.log(usersToSync);

  if (!usersToSync) {
    return;
  }

  await user_db.QueueUsersToSync(usersToSync);
}

console.log("UserPodcastSync: Starting ...");

UserPodcastSync().then(() => {
  console.log("UserPodcastSync: Complete");
});