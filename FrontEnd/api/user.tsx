const axios = require("axios");

export async function GetUserPodcasts(authroizationToken: string) {
  const config = {
    method: "get",
    url: process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/api/user/podcasts",
    headers: {
      Authorization: `Bearer ${authroizationToken}`,
      "Content-Type": "application/json",
    },
  };

  try {
    return (await axios(config)).data;
  } catch (error) {
    return [];
  }
}

export async function DeleteUserPodcast(
  authroizationToken: string,
  podcastId: number,
) {
  const config = {
    method: "delete",
    url: process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/api/user/podcast",
    headers: {
      Authorization: `Bearer ${authroizationToken}`,
      "Content-Type": "application/json",
    },
    data: {
      podcastId: podcastId,
    },
  };

  try {
    await axios(config);

    return true;
  } catch (error) {
    return false;
  }
}

export async function AddUserPodcast(
  authroizationToken: string,
  podcastId: number,
) {
  const config = {
    method: "put",
    url: process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/api/user/podcast",
    headers: {
      Authorization: `Bearer ${authroizationToken}`,
      "Content-Type": "application/json",
    },
    data: {
      podcastId: podcastId,
    },
  };

  try {
    await axios(config);

    return true;
  } catch (error) {
    return false;
  }
}
