import { Podcast, PodcastSearchResult } from "../types/PodcastTypes";

const axios = require('axios')

export async function PodcastSearch(podcastName:string): Promise<PodcastSearchResult[]> {
  let data = JSON.stringify({
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
    variables: {}
  });
  
  let config = {
    method: 'post',
    url: 'https://api.podchaser.com/graphql',
    headers: { 
      'Authorization': `Bearer ${process.env.POD_CHASER_BEARER_TOKEN}`, 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  let response:PodcastSearchResult[] = (await axios(config)).data.data.podcasts.data;
  
  return response;
}

export async function GetPodcast(Id:number): Promise<Podcast> {
  let data = JSON.stringify({
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
    variables: {}
  });
  
  let config = {
    method: 'post',
    url: 'https://api.podchaser.com/graphql',
    headers: { 
      'Authorization': `Bearer ${process.env.POD_CHASER_BEARER_TOKEN}`, 
      'Content-Type': 'application/json'
    },
    data : data
  };

  let response:Podcast = (await axios(config)).data.data.podcast;

  return response;
}

export async function GetRssFeed(rssUrl:string): Promise<string> {
  var config = {
    method: 'get',
    url: rssUrl,
    headers: { }
  };

  let response:string = (await axios(config)).data;

  return response;
}
