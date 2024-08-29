const axios = require("axios");

export async function SearchPodcasts (authroizationToken: String, podcastSearchText: String) {
  console.log(podcastSearchText + "WEE")
  const config = {
    method: 'get',
    url: process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/api/podcast/search?value=' + podcastSearchText,
    headers: {
      Authorization: `Bearer ${authroizationToken}`,
      'Content-Type': 'application/json'
    }
  }

  const response = (await axios(config)).data

  return response
}