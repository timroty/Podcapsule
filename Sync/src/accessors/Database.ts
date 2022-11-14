import { FavoritedPodcast, User, FavoritedPodcastEpisodeSave } from "../types/DatabaseTypes";

const { createClient } = require('@supabase/supabase-js');

// User
export async function GetNextUser(LastSyncDateISOString:string): Promise<User> {
    const supabase = createClient(
        process.env.SUPABASE_PROJECT_URL,
        process.env.SUPABASE_PROJECT_SECRET
    );

    const { data, error } = await supabase
        .from('User')
        .select('*')
        .or(`LastSyncDate.is.null,LastSyncDate.lte.${LastSyncDateISOString}`)
        .limit(1);
        
    let result:User = data;

    return result;
}