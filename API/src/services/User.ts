import { GetUser as GetUserDB } from "../accessors/Database";
import { User } from "../types/DatabaseTypes";

var convert = require("xml-js");
const axios = require("axios");

export async function GetUser(userId: string): Promise<User> {
  return await GetUserDB(userId);
}

export async function GetUserRSSFeed(userId: string): Promise<string> {
  var user = await GetUserDB(userId);
  if (user?.RSSFeedJSON) {
    return convert.json2xml(user.RSSFeedJSON, { compact: false, spaces: 4 });
  } else {
    return "";
  }
}

export async function RefreshToken(refreshToken: string) {
  var data = JSON.stringify({
    refresh_token: refreshToken,
  });

  let config = {
    method: "post",
    url:
      process.env.SUPABASE_PROJECT_URL +
      "/auth/v1/token?grant_type=refresh_token",
    headers: {
      apikey: process.env.SUPABASE_PROJECT_SECRET,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return (await axios(config)).data;
}
