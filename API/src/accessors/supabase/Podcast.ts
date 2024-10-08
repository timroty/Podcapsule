import { createClient } from "@supabase/supabase-js";
import { Database, Tables } from "./generated/Types";
import { Podcast } from "../types/Podcast";

export async function GetById(Id: number): Promise<Tables<"Podcast"> | null> {
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

export async function GetByPodcastId(
  Id: number,
): Promise<Tables<"Podcast"> | null> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { data, error } = await supabaseClient
    .from("Podcast")
    .select()
    .eq("podcast_id", Id)
    .limit(1);

  if (error) throw error;

  if (!data || data.length === 0) return null;

  return data[0];
}

export async function Add(podcast: Podcast): Promise<Tables<"Podcast"> | null> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { data, error } = await supabaseClient
    .from("Podcast")
    .insert({
      podcast_id: podcast.id,
      rss_url: podcast.rssUrl,
      title: podcast.title,
      image_url: podcast.imageUrl,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}
