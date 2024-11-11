import { createClient } from "@supabase/supabase-js";
import { Database } from "./generated/Types";

export async function AddUserEpisode(userId:string, podcastEpisodeId:number): Promise<void> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const item = { user_id: userId, podcast_episode_id: podcastEpisodeId };

  const { error } = await supabaseClient
  .from('UserPodcastEpisode')
  .insert(item);

  if (error) throw error;
}