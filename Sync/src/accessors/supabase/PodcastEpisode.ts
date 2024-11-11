import { createClient } from "@supabase/supabase-js";
import { Database, Tables } from "./generated/Types";

export async function GetPodcastEpisodeById(
  podcastEpisodeId: number,
): Promise<Tables<"PodcastEpisode">> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { data, error } = await supabaseClient
    .from("PodcastEpisode")
    .select("*")
    .eq("id", podcastEpisodeId)
    .single();

  if (error) throw error;

  return data!;
}

export async function GetPodcastEpisodeToSync(
  userId: string,
): Promise<number | null> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { data, error } = await supabaseClient
    .from("get_podcast_episode_to_sync")
    .select("*")
    .eq("user_id", userId)
    .limit(1);

  if (error) throw error;

  if (!data || data.length === 0) return null;

  return data[0].podcast_episode_id;
}

export async function GetPodcastEpisodeByGuid(
  podcastId: number,
  guid: string,
): Promise<Tables<"PodcastEpisode"> | null> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { data, error } = await supabaseClient
    .from("PodcastEpisode")
    .select("*")
    .eq("podcast_id", podcastId)
    .eq("guid", guid)
    .limit(1);

  if (error) throw error;

  if (!data || data.length === 0) return null;

  return data[0];
}

export async function Add(
  podcastId: number,
  rssData: string,
  guid: string,
): Promise<void> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const item = { podcast_id: podcastId, rss_data: rssData, guid: guid };

  const { error } = await supabaseClient.from("PodcastEpisode").insert(item);

  if (error) throw error;
}
