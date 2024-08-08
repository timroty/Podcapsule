import { createClient } from "@supabase/supabase-js";
import { Database, Tables } from "./generated/Types";

export async function GetPodcastEpisodeById(podcastEpisodeId: number): Promise<Tables<"PodcastEpisode">> {
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

export async function GetPodcastEpisodeToSync(userId: string): Promise<number | null> {
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

  if (!data) return null;

  return data[0].podcast_episode_id;
}