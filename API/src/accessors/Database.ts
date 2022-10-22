import { FavoritedPodcast, User } from "../types/DatabaseTypes";

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
        .eq('Id', Id);

    let result:User = data;

    return result;
}

// Favorited Podcasts
export async function GetFavoritedPodcasts(Id:string): Promise<FavoritedPodcast[]> {
    const supabase = createClient(
        process.env.SUPABASE_PROJECT_URL,
        process.env.SUPABASE_PROJECT_SECRET
    );

    const { data, error } = await supabase
        .from('FavoritedPodcasts')
        .select('Id,CreateDate,PodcastId,Title,ImageUrl')
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
        .insert({ CreateDate: favoritedPodcast.createDate,
                  UserId: favoritedPodcast.userId,
                  PodcastId: favoritedPodcast.podcastId,
                  RSSUrl: favoritedPodcast.rssUrl,
                  Title: favoritedPodcast.title,
                  ImageUrl: favoritedPodcast.imageUrl });
}

export async function DeleteFavoritedPodcast(favoritedPodcastId:number): Promise<void> {
    const supabase = createClient(
        process.env.SUPABASE_PROJECT_URL,
        process.env.SUPABASE_PROJECT_SECRET
    );

    const { error } = await supabase
        .from('FavoritedPodcasts')
        .delete()
        .eq('Id', favoritedPodcastId)
}
