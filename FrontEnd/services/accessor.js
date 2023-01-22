const axios = require('axios');

export async function SearchPodcasts(authroizationToken, podcastSearchText) {
  let config = {
    method: 'post',
    url: process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/api/podcast/search',
    headers: { 
      'Authorization': `Bearer ${authroizationToken}`, 
      'Content-Type': 'application/json'
    },
    data: {
      podcastName: podcastSearchText
    }
  };
  
  let response = (await axios(config)).data;

  return response;
}

export async function GetFavoritedPodcasts(authroizationToken) {
  let config = {
    method: 'get',
    url: process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/api/user/favorited-podcasts',
    headers: { 
      'Authorization': `Bearer ${authroizationToken}`, 
      'Content-Type': 'application/json'
    }
  };
  
  let response = (await axios(config)).data;

  return response;
}

export async function AddFavoritedPodcasts(authroizationToken, podcastId) {
  let config = {
    method: 'post',
    url: process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/api/user/favorited-podcasts/add',
    headers: { 
      'Authorization': `Bearer ${authroizationToken}`, 
      'Content-Type': 'application/json'
    },
    data: {
      podcastId: podcastId
    }
  };
  
  let response = (await axios(config)).data;

  return response;
}

export async function DeleteFavoritedPodcasts(authroizationToken, podcastId) {
  let config = {
    method: 'post',
    url: process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/api/user/favorited-podcasts/delete',
    headers: { 
      'Authorization': `Bearer ${authroizationToken}`, 
      'Content-Type': 'application/json'
    },
    data: {
      favoritedPodcastId: podcastId
    }
  };
  
  let response = (await axios(config)).data;

  return response;
}