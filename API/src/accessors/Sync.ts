const axios = require("axios");

export async function ForceSyncRSSFeed(Id: string) {
  // Sleep to allow time for favorited podcast episodes to populate
  await sleep(4000);

  const config = {
    method: "post",
    url: process.env.SYNC_BACKEND_URL + "/api/sync",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      userId: Id,
    },
  };

  const response = await axios(config);

  return response.data;
}

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
