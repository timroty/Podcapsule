import { GetById as Podcast_GetById } from "../accessors/Podcast";
import {
  AddFavoritedPodcast as AddFavoritedPodcastDB,
  GetFavoritedPodcasts as GetFavoritedPodcastsDB,
  DeleteFavoritedPodcast as DeleteFavoritedPodcastDB,
  DeleteFavoritedPodcastEpisodes,
  IsUserRssNull,
} from "../accessors/Database";

import { FavoritedPodcast } from "../types/DatabaseTypes";
import { Podcast } from "../types/PodcastTypes";

import { Search as Client_Search } from "../accessors/Podcast";
import { SearchResult } from "./types/Podcast";
import {
  Add as DB_Podcast_Add,
  GetById as DB_Podcast_GetByPodcastId,
} from "../accessors/supabase/Podcast";
import { Tables } from "../accessors/supabase/generated/Types";
import {
  Add as DB_UserPodcast_Add,
  Get as DB_UserPodcast_Get,
  SetActive as DB_UserPodcast_SetActive,
  Delete as DB_UserPodcast_Delete,
} from "../accessors/supabase/UserPodcast";

export async function Search(name: string): Promise<SearchResult[]> {
  const searchResult = await Client_Search(name);

  const mappedResult: SearchResult[] = searchResult.map((podcast) => {
    var mapped: SearchResult = {
      id: podcast.id,
      title: podcast.title,
      description: podcast.description,
      imageUrl: podcast.imageUrl,
      numberOfEpisodes: podcast.numberOfEpisodes,
      ratingAverage: podcast.ratingAverage,
      ratingCount: podcast.ratingCount,
    };
    return mapped;
  });

  return mappedResult;
}

export async function GetFavoritedPodcasts(
  userId: string,
): Promise<FavoritedPodcast[]> {
  return await GetFavoritedPodcastsDB(userId);
}

export async function UpdateUserPodcast(
  UserId: string,
  ExternalPodcastId: number,
  IsActive: boolean,
): Promise<void> {
  const db_podcast = await DB_Podcast_GetByPodcastId(ExternalPodcastId);
  let podcastId = db_podcast?.id;
  let newPodcasat = false;

  // Add podcast to system if it does not exist.
  if (!db_podcast) {
    const podcastGetResult: Podcast = await Podcast_GetById(ExternalPodcastId);
    const podcastAddResult = await DB_Podcast_Add(podcastGetResult);

    // Failed to add
    if (!podcastAddResult) {
      return;
    }

    podcastId = podcastAddResult.id;
    newPodcasat = true;
  }

  if (newPodcasat) {
    // New podcast so must add
    await DB_UserPodcast_Add(UserId, podcastId as number, new Date(), true);
  } else {
    const userPodcastResult = await DB_UserPodcast_Get(
      UserId,
      podcastId as number,
    );
    if (!userPodcastResult) {
      await DB_UserPodcast_Add(UserId, podcastId as number, new Date(), true);
    } else if (userPodcastResult.is_active != IsActive) {
      // If podcast active status does not match incoming param, update
      await DB_UserPodcast_SetActive(UserId, podcastId as number, IsActive);
    }
  }
}

export async function DeleteUserPodcast(
  userId: string,
  podcastId: number,
): Promise<void> {
  const userPodcastResult = await DB_UserPodcast_Get(
    userId,
    podcastId as number,
  );
  if (!userPodcastResult) {
    return;
  }

  await DB_UserPodcast_Delete(userId, podcastId as number);
}
