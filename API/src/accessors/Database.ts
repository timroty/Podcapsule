import {
  FavoritedPodcast,
  User,
  FavoritedPodcastEpisodeSave,
} from "../types/DatabaseTypes";

const { createClient } = require("@supabase/supabase-js");

// User
export async function GetUser(Id: string): Promise<User> {
  const supabase = createClient(
    process.env.SUPABASE_PROJECT_URL,
    process.env.SUPABASE_PROJECT_SECRET,
  );

  const { data, error } = await supabase
    .from("User")
    .select("*")
    .single()
    .eq("Id", Id);

  const result: User = data;

  return result;
}

export async function IsUserRssNull(Id: string): Promise<boolean> {
  const supabase = createClient(
    process.env.SUPABASE_PROJECT_URL,
    process.env.SUPABASE_PROJECT_SECRET,
  );

  const { data, error } = await supabase
    .from("User")
    .select("Id")
    .single()
    .is("RSSFeedJSON", null)
    .eq("Id", Id);

  const result: string = data;

  return Boolean(result);
}

// Favorited Podcasts
export async function GetFavoritedPodcasts(
  Id: string,
): Promise<FavoritedPodcast[]> {
  const supabase = createClient(
    process.env.SUPABASE_PROJECT_URL,
    process.env.SUPABASE_PROJECT_SECRET,
  );

  const { data, error } = await supabase
    .from("FavoritedPodcast")
    .select("Id,CreateDate,PodcastId,Title,ImageUrl")
    .eq("UserId", Id);

  const result: FavoritedPodcast[] = data;

  return result;
}

export async function AddFavoritedPodcast(
  favoritedPodcast: FavoritedPodcast,
): Promise<FavoritedPodcast> {
  const supabase = createClient(
    process.env.SUPABASE_PROJECT_URL,
    process.env.SUPABASE_PROJECT_SECRET,
  );

  const { data, error } = await supabase
    .from("FavoritedPodcast")
    .insert({
      CreateDate: favoritedPodcast.createDate,
      UserId: favoritedPodcast.userId,
      PodcastId: favoritedPodcast.podcastId,
      RSSUrl: favoritedPodcast.rssUrl,
      Title: favoritedPodcast.title,
      ImageUrl: favoritedPodcast.imageUrl,
      ExistsEpisodes: true,
    })
    .select();

  return data[0];
}

export async function DeleteFavoritedPodcast(
  favoritedPodcastId: number,
): Promise<void> {
  const supabase = createClient(
    process.env.SUPABASE_PROJECT_URL,
    process.env.SUPABASE_PROJECT_SECRET,
  );

  const { error } = await supabase
    .from("FavoritedPodcast")
    .delete()
    .eq("Id", favoritedPodcastId);
}

export async function AddFavoritedPodcastEpisodes(
  favoritedPodcastEpisodes: FavoritedPodcastEpisodeSave[],
): Promise<void> {
  const supabase = createClient(
    process.env.SUPABASE_PROJECT_URL,
    process.env.SUPABASE_PROJECT_SECRET,
  );

  const { error } = await supabase
    .from("FavoritedPodcastEpisode")
    .insert(favoritedPodcastEpisodes);
}

export async function DeleteFavoritedPodcastEpisodes(
  favoritedPodcastId: number,
): Promise<void> {
  const supabase = createClient(
    process.env.SUPABASE_PROJECT_URL,
    process.env.SUPABASE_PROJECT_SECRET,
  );

  const { error } = await supabase
    .from("FavoritedPodcastEpisode")
    .delete()
    .eq("FavoritedPodcastId", favoritedPodcastId);
}
