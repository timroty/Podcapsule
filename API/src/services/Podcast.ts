import { GetById as Podcast_GetById } from "../accessors/Podcast";
import { Podcast } from "../types/PodcastTypes";
import * as podcast_api from "../accessors/Podcast";
import { SearchResult, UserPodcast } from "./types/Podcast";
import * as podcast_db from "../accessors/supabase/Podcast";
import * as user_podcast_db from "../accessors/supabase/UserPodcast";

export async function Search(name: string): Promise<SearchResult[]> {
  const searchResult = await podcast_api.Search(name);

  const mappedResult: SearchResult[] = searchResult.map((podcast) => {
    const mapped: SearchResult = {
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

export async function GetUserPodcasts(
  UserId: string,
  IsActive: boolean,
): Promise<UserPodcast[]> {
  const userPodcasts = await user_podcast_db.GetAllForUser(UserId, IsActive);

  const mappedResult: UserPodcast[] = userPodcasts.map((userPodcast) => {
    const mapped: UserPodcast = {
      id: userPodcast.id,
      title: userPodcast.Podcast?.title ?? null,
      is_active: userPodcast.is_active,
      valid_at: userPodcast.valid_at,
      image_url: userPodcast.Podcast?.image_url ?? null,
    };

    return mapped;
  });

  return mappedResult;
}

export async function UpdateUserPodcast(
  UserId: string,
  ExternalPodcastId: number,
  IsActive: boolean,
): Promise<void> {
  const db_podcast = await podcast_db.GetByPodcastId(ExternalPodcastId);
  let podcastId = db_podcast?.id;
  let newPodcast = false;

  // Add podcast to system if it does not exist.
  if (!db_podcast) {
    const podcastGetResult: Podcast = await Podcast_GetById(ExternalPodcastId);
    const podcastAddResult = await podcast_db.Add(podcastGetResult);

    // Failed to add
    if (!podcastAddResult) {
      return;
    }

    podcastId = podcastAddResult.id;
    newPodcast = true;
  }

  if (newPodcast) {
    // New podcast so must add
    await user_podcast_db.Add(UserId, podcastId as number, new Date(), true);
  } 
  else {
    const userPodcastResult = await user_podcast_db.Get(
      UserId,
      podcastId as number,
    );

    if (!userPodcastResult) {
      await user_podcast_db.Add(UserId, podcastId as number, new Date(), true);
    } 
    else if (userPodcastResult.is_active != IsActive) {
      // If podcast active status does not match incoming param, update
      await user_podcast_db.SetActive(userPodcastResult.id, IsActive);
    }
  }
}

export async function DeleteUserPodcast(userPodcastId: number): Promise<void> {
  await user_podcast_db.Delete(userPodcastId);
}
