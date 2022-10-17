import { FavoritedPodcast } from "../types/DatabaseTypes";

const { createClient } = require('@supabase/supabase-js');

// User
export async function GetUser(Id:string): Promise<void> {
    const supabase = createClient(
        process.env.SUPABASE_PROJECT_URL,
        process.env.SUPABASE_PROJECT_SECRET
    );

    const { data, error } = await supabase
        .from('User')
        .select('*')
        .eq('Id', Id);

    return data;
}

// Favorited Podcasts
export async function GetFavoritedPodcasts(Id:string): Promise<FavoritedPodcast[]> {
    const supabase = createClient(
        process.env.SUPABASE_PROJECT_URL,
        process.env.SUPABASE_PROJECT_SECRET
    );

    const { data, error } = await supabase
        .from('FavoritedPodcasts')
        .select('Id,CreateDate,PodcastId,Name,ImageUrl')
        .eq('UserId', Id);
    
    let result:FavoritedPodcast[] = data;

    return result;
}

export async function AddFavoritedPodcast(favoritedPodcast:FavoritedPodcast): Promise<void> {
    const supabase = createClient(
        process.env.SUPABASE_PROJECT_URL,
        process.env.SUPABASE_PROJECT_SECRET
    );

    const { error } = await supabase
        .from('FavoritedPodcasts')
        .insert({ CreateDate: favoritedPodcast.CreateDate,
                  UserId: favoritedPodcast.UserId,
                  PodcastId: favoritedPodcast.PodcastId,
                  RSSLink: favoritedPodcast.RSSLink,
                  Name: favoritedPodcast.Name,
                  ImageUrl: favoritedPodcast.ImageUrl });
}
