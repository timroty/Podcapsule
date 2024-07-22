import { createClient } from "@supabase/supabase-js";
import { Database } from "./generated/types";

export async function GetUsersToSync(limit: number): Promise<string[] | null> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { data, error } = await supabaseClient
    .from("get_users_to_sync")
    .select("*")
    .limit(limit);

  if (error) throw error;

  return (data?.map(item => (item.id))) as string[] | null;
}

export async function QueueUsersToSync(userIds: string[]): Promise<void> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const items = userIds.map(userId => ({ user_id: userId }));

  const { data, error } = await supabaseClient
  .from('UserPodcastSyncQueue')
  .insert(items);

  if (error) throw error;
}