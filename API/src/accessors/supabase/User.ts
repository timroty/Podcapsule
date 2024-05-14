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
    .eq("Id", Id)
    .single();

  if (error) throw error;

  return data;
}
