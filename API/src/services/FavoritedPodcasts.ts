import { GetPodcast } from "../accessors/Podcast";
import { AddFavoritedPodcast as AddFavoritedPodcastDB, 
         GetFavoritedPodcasts as GetFavoritedPodcastsDB,
         DeleteFavoritedPodcast as DeleteFavoritedPodcastDB } from "../accessors/Database";

import { FavoritedPodcast } from "../types/DatabaseTypes";
import { Podcast } from "../types/PodcastTypes";

export async function GetFavoritedPodcasts(userId:string): Promise<FavoritedPodcast[]> {
     return await GetFavoritedPodcastsDB(userId);
}

export async function AddFavoritedPodcast(userId:string, podcastId:number): Promise<void> {
    let podcast:Podcast = await GetPodcast(podcastId);

    let favoritedPodcast = <FavoritedPodcast>({
        createDate: new Date(),
        userId: userId,
        podcastId: podcastId,
        rssUrl: podcast.rssUrl,
        title: podcast.title,
        imageUrl: podcast.imageUrl
     });

     await AddFavoritedPodcastDB(favoritedPodcast);
}

export async function DeleteFavoritedPodcast(favoritedPodcastId:number): Promise<void> {
    return await DeleteFavoritedPodcastDB(favoritedPodcastId);
}