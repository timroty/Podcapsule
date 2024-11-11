const axios = require("axios").default;

export async function GetRssFeed(rssUrl: string): Promise<string> {
  const config = {
    method: "get",
    url: rssUrl,
    headers: {},
  };

  const response: string = (await axios(config)).data;

  return response;
}
