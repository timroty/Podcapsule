import { Podcast, SearchResult } from "./types/Podcast";

const axios = require("axios").default;

export async function Search(podcastName: string): Promise<SearchResult[]> {
  const data = JSON.stringify({
    query: `query {
      podcasts(searchTerm: "${podcastName}", first: 8, sort: {
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

  const response: SearchResult[] = (await axios(config)).data.data.podcasts
    .data;

  return response;
}

export async function GetById(Id: number): Promise<Podcast> {
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
