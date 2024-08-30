import * as user_db from "../accessors/supabase/User";
import { User } from "./types/User";

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
  const user = await user_db.GetUser(userId);
  return convert.json2xml(user?.rss_feed ?? "", { compact: false, spaces: 4 });
}
