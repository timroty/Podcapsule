import { createClient } from "@supabase/supabase-js";
import { Database, Tables } from "./generated/Types";

export async function GetUser(Id: string): Promise<Tables<"User"> | null> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { data, error } = await supabaseClient
    .from("User")
    .select()
    .eq("Id", Id)
    .single();

  if (error) throw error;

  return data;
}

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

  const { error } = await supabaseClient
  .from('UserPodcastSyncQueue')
  .insert(items);

  if (error) throw error;
}

export async function RetrieveTopUserFromSyncQueue(): Promise<string | null> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { data, error } = await supabaseClient
  .from('UserPodcastSyncQueue')
  .select("*")
  .limit(1);

  if (error) throw error;

  if (!data || data.length === 0) return null;

  return data[0].user_id;
}

export async function UpdateRSSFeed(userId:string, rssFeed:string): Promise<void> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { error } = await supabaseClient
    .from('User')
    .update({ rss_feed: rssFeed })
    .eq('id', userId);

  if (error) throw error;
}

export async function UpdateLastSyncDate(userId:string, syncDate:string): Promise<void> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { error } = await supabaseClient
    .from('User')
    .update({ last_sync: syncDate })
    .eq('id', userId);

  if (error) throw error;
}

export async function RemoveFromSyncQueue(id:string): Promise<void> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { error } = await supabaseClient
      .from('UserPodcastSyncQueue')
      .delete()
      .eq('user_id', id);
  
  if (error) throw error;
}