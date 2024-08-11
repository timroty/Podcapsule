const axios = require('axios')

export async function GetUserPodcasts(authroizationToken: string) {
  const config = {
    method: 'get',
    url: process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/api/user/podcasts',
    headers: {
      Authorization: `Bearer ${authroizationToken}`,
      'Content-Type': 'application/json'
    }
  }

  try{
    return (await axios(config)).data
  }
  catch(error)
  {
    return [];
  }  
}