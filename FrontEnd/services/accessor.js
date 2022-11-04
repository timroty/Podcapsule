const axios = require('axios');

export async function GetFavoritedPodcasts(authroizationToken) {
  let config = {
    method: 'get',
    url: process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/user/favorited-podcasts',
    headers: { 
      'Authorization': `Bearer ${authroizationToken}`, 
      'Content-Type': 'application/json'
    }
  };
  
  let response = (await axios(config)).data;

  return response;
}