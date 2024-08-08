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
    .eq("Id", Id)
    .single();

  if (error) throw error;

  return data;
}