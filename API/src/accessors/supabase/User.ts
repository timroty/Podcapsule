import { Tables } from "./generated/Types";
import { createClient } from "@supabase/supabase-js";
import { Database } from "./generated/Types";

export async function GetUser(Id: string): Promise<Tables<"User"> | null> {
  const supabaseClient = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL ?? "",
    process.env.SUPABASE_PROJECT_SECRET ?? "",
  );

  const { data, error } = await supabaseClient
    .from("User")
    .select()
    .eq("id", Id)
    .single();

  if (error) throw error;

  return data;
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