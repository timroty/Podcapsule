import { FavoritedPodcast, User, FavoritedPodcastEpisodeSave, FavoritedPodcastEpisode } from "../types/DatabaseTypes";

const { createClient } = require('@supabase/supabase-js');

// User
export async function GetUser(Id:string): Promise<User> {
    const supabase = createClient(
        process.env.SUPABASE_PROJECT_URL,
        process.env.SUPABASE_PROJECT_SECRET
    );

    const { data, error } = await supabase
        .from('User')
        .select('*')
        .single()
        .eq('Id', Id);

    let result:User = data;

    return result;
}

export async function GetNextUser(LastSyncDateISOString:string): Promise<User> {
    const supabase = createClient(
        process.env.SUPABASE_PROJECT_URL,
        process.env.SUPABASE_PROJECT_SECRET
    );

    // Could make this call more effeicent if you check if the user has
    // favorited podcasts in the first place
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

    let result:number = data?.Id;

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

export async function GetPodcastTitle(favoritedPodcastId:number): Promise<string> {
    const supabase = createClient(
        process.env.SUPABASE_PROJECT_URL,
        process.env.SUPABASE_PROJECT_SECRET
    );

    const { data, error } = await supabase
        .from('FavoritedPodcast')
        .select('Title')
        .eq('Id', favoritedPodcastId)
        .single();

    let result:string = data.Title;

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
}

export async function UpdateUserRSSFeed(userId:number, rssFeed:string): Promise<void> {
    const supabase = createClient(
        process.env.SUPABASE_PROJECT_URL,
        process.env.SUPABASE_PROJECT_SECRET
    );

    const { error } = await supabase
        .from('User')
        .update({ RSSFeedJSON: rssFeed })
        .eq('Id', userId);
}

export async function UpdateUserLastSyncDate(userId:number, syncDate:string): Promise<void> {
    const supabase = createClient(
        process.env.SUPABASE_PROJECT_URL,
        process.env.SUPABASE_PROJECT_SECRET
    );

    const { error } = await supabase
        .from('User')
        .update({ LastSyncDate: syncDate })
        .eq('Id', userId);
}

export async function RemoveUserRandomFavoritedPodcastEpisode(id:number): Promise<void> {
    const supabase = createClient(
        process.env.SUPABASE_PROJECT_URL,
        process.env.SUPABASE_PROJECT_SECRET
    );

    const { error } = await supabase
        .from('FavoritedPodcastEpisode')
        .delete()
        .eq('id', id);
}