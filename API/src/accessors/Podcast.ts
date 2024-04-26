import { Podcast, PodcastSearchResult } from "../types/PodcastTypes";

const axios = require("axios");

export async function PodcastSearch(
  podcastName: string,
): Promise<PodcastSearchResult[]> {
  const data = JSON.stringify({
    query: `query {
      podcasts(searchTerm: "${podcastName}", first: 10, sort: {
          sortBy: RELEVANCE,
          direction: DESCENDING
      }) {
          paginatorInfo {
              currentPage,
              hasMorePages,
              lastPage,
          },
          data {
              id,
              title,
              description,
              imageUrl,
              numberOfEpisodes,
              ratingAverage,
              ratingCount
          }
      }
  }`,
    variables: {},
  });

  const config = {
    method: "post",
    url: "https://api.podchaser.com/graphql",
    headers: {
      Authorization: `Bearer ${process.env.POD_CHASER_BEARER_TOKEN}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response: PodcastSearchResult[] = (await axios(config)).data.data
    .podcasts.data;

  return response;
}

export async function GetPodcast(Id: number): Promise<Podcast> {
  const data = JSON.stringify({
    query: `query {
      podcast(identifier: {
          id: "${Id}",
          type: PODCHASER
      }) {
            id,
            title,
            description,
            imageUrl,
            numberOfEpisodes,
            ratingAverage,
            ratingCount,
            rssUrl
      }
  }`,
    variables: {},
  });

  const config = {
    method: "post",
    url: "https://api.podchaser.com/graphql",
    headers: {
      Authorization: `Bearer ${process.env.POD_CHASER_BEARER_TOKEN}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response: Podcast = (await axios(config)).data.data.podcast;

  return response;
}

export async function GetRssFeed(rssUrl: string): Promise<string> {
  const config = {
    method: "get",
    url: rssUrl,
    headers: {},
  };

  const response: string = (await axios(config)).data;

  return response;
}
