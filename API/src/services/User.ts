import * as user_db from "../accessors/supabase/User";
import { User } from "./types/User";

import { GetUser as GetUserDB } from "../accessors/Database";

const convert = require("xml-js");
const axios = require("axios");

export async function GetUser(userId: string): Promise<User | null> {
  var db_result = await user_db.GetUser(userId);

  if (!db_result) {
    return null;
  }

  const user: User = {
    id: db_result.id,
    createDate: db_result.created_at,
    lastSync: db_result.last_sync,
    RSSFeedJSON: db_result.rss_feed,
    RssFeed: null,
  };

  return user;
}

export async function GetUserRSSFeed(userId: string): Promise<string> {
  const user = await GetUserDB(userId);
  if (user?.RSSFeedJSON) {
    return convert.json2xml(user.RSSFeedJSON, { compact: false, spaces: 4 });
  } else {
    return "";
  }
}

export async function RefreshToken(refreshToken: string) {
  const data = JSON.stringify({
    refresh_token: refreshToken,
  });

  const config = {
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
