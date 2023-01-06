import { FavoritedPodcast, User, FavoritedPodcastEpisodeSave, FavoritedPodcastEpisode } from "../types/DatabaseTypes";

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
        .limit(1)
        .single();
        
    let result:User = data;

    return result;
}

export async function GetUserRandomFavoritedPodcast(userId:number): Promise<number> {
    const supabase = createClient(
        process.env.SUPABASE_PROJECT_URL,
        process.env.SUPABASE_PROJECT_SECRET
    );

    const { data, error } = await supabase
        .from('random_favorited_podcast')
        .select('Id')
        .match({ UserId: userId, ExistsEpisodes: true })
        .limit(1)
        .single();
        
    let result:number = data.Id;
    
    return result;
}

export async function GetUserRandomFavoritedPodcastEpisode(favoritedPodcastId:number): Promise<FavoritedPodcastEpisode> {
    const supabase = createClient(
        process.env.SUPABASE_PROJECT_URL,
        process.env.SUPABASE_PROJECT_SECRET
    );

    const { data, error } = await supabase
        .from('random_favorited_podcast_episode')
        .select('*')
        .eq('FavoritedPodcastId', favoritedPodcastId)
        .limit(1)
        .single();
        
    let result:FavoritedPodcastEpisode = data;

    return result;
}

export async function UpdateUserRandomFavoritedPodcastEpisodeExist(existsEpisodes:boolean, FavoritedPodcastId:number): Promise<void> {
    const supabase = createClient(
        process.env.SUPABASE_PROJECT_URL,
        process.env.SUPABASE_PROJECT_SECRET
    );

    const { error } = await supabase
        .from('FavoritedPodcast')
        .update({ ExistsEpisodes: existsEpisodes })
        .eq('Id', FavoritedPodcastId);

    console.log(error)
}