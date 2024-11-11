import { createClient } from "@supabase/supabase-js";
import { Database, Tables } from "./generated/Types";

export async function GetPodcast(Id: number): Promise<Tables<"Podcast">> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { data, error } = await supabaseClient
    .from("Podcast")
    .select()
    .eq("id", Id)
    .single();

  if (error) throw error;

  return data;
}

export async function GetPodcastsToSync(
  limit: number,
): Promise<number[] | null> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { data, error } = await supabaseClient
    .from("get_podcasts_to_sync")
    .select("*")
    .limit(limit);

  if (error) throw error;

  return data?.map((item) => item.id) as number[] | null;
}

export async function QueuePodcastsToSync(
  podcastsIds: number[],
): Promise<void> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const items = podcastsIds.map((podcastsId) => ({ podcast_id: podcastsId }));

  const { error } = await supabaseClient.from("PodcastSyncQueue").insert(items);

  if (error) throw error;
}

export async function RetrieveTopPodcastFromSyncQueue(): Promise<
  number | null
> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { data, error } = await supabaseClient
    .from("PodcastSyncQueue")
    .select("*")
    .limit(1);

  if (error) throw error;

  if (!data || data.length === 0) return null;

  return data[0].podcast_id;
}

export async function RemoveFromSyncQueue(id: number): Promise<void> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { error } = await supabaseClient
    .from("PodcastSyncQueue")
    .delete()
    .eq("podcast_id", id);

  if (error) throw error;
}

export async function UpdateLastSyncDate(
  podcastId: number,
  syncDate: string,
): Promise<void> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { error } = await supabaseClient
    .from("Podcast")
    .update({ last_sync: syncDate })
    .eq("id", podcastId);

  if (error) throw error;
}
