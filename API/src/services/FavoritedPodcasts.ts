import { GetPodcast } from "../accessors/Podcast";
import { AddFavoritedPodcast as AddFavoritedPodcastDB, 
         GetFavoritedPodcasts as GetFavoritedPodcastsDB,
         DeleteFavoritedPodcast as DeleteFavoritedPodcastDB,
         DeleteFavoritedPodcastEpisodes } from "../accessors/Database";

import { FavoritedPodcast } from "../types/DatabaseTypes";
import { Podcast } from "../types/PodcastTypes";

import {SavePodcastRssFeedEpisodes} from "./Rss"

export async function GetFavoritedPodcasts(userId:string): Promise<FavoritedPodcast[]> {
     return await GetFavoritedPodcastsDB(userId);
}

export async function AddFavoritedPodcast(userId:string, podcastId:number): Promise<void> {
    // TODO: Check if the podcastId already exists for the user
    let podcast:Podcast = await GetPodcast(podcastId);

    let favoritedPodcast = <FavoritedPodcast>({
        createDate: new Date(),
        userId: userId,
        podcastId: podcastId,
        rssUrl: podcast.rssUrl,
        title: podcast.title,
        imageUrl: podcast.imageUrl
     });

    var result:FavoritedPodcast = await AddFavoritedPodcastDB(favoritedPodcast);
    
    if (podcast.rssUrl != null || podcast.rssUrl != undefined)
        SavePodcastRssFeedEpisodes(podcast.rssUrl, result.Id);
}

export async function DeleteFavoritedPodcast(favoritedPodcastId:number): Promise<void> {
    await DeleteFavoritedPodcastEpisodes(favoritedPodcastId);
    await DeleteFavoritedPodcastDB(favoritedPodcastId);
}
