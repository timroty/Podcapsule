import { createClient } from "@supabase/supabase-js";
import { Database, Tables } from "./generated/Types";

export async function Get(
  UserId: string,
  PodcastId: number,
): Promise<Tables<"UserPodcast"> | null> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { data, error } = await supabaseClient
    .from("UserPodcast")
    .select()
    .eq("user_id", UserId)
    .eq("podcast_id", PodcastId)
    .single();

  return data;
}

export async function Add(
  UserId: string,
  PodcastId: number,
  ValidAt: Date,
  IsActive: boolean,
): Promise<void> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { error } = await supabaseClient.from("UserPodcast").insert({
    user_id: UserId,
    podcast_id: PodcastId,
    valid_at: ValidAt.toLocaleString("en", { timeZone: "America/Chicago" }),
    is_active: IsActive,
  });
}

export async function Delete(UserId: string, PodcastId: number): Promise<void> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { error } = await supabaseClient
    .from("UserPodcast")
    .delete()
    .eq("user_id", UserId)
    .eq("podcast_id", PodcastId);

  return;
}

export async function SetActive(
  UserId: string,
  PodcastId: number,
  IsActive: boolean,
): Promise<void> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { error } = await supabaseClient
    .from("UserPodcast")
    .update({
      is_active: IsActive,
    })
    .eq("user_id", UserId)
    .eq("podcast_id", PodcastId);
}
