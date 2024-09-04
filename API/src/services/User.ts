import * as user_db from "../accessors/supabase/User";
import { Template as RSSFeedTemplate } from "../constants/RSSFeedTemplate";
import { User } from "./types/User";

const convert = require("xml-js");

export async function GetUser(userId: string): Promise<User | null> {
  let db_result = await user_db.GetUser(userId);

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
  let user = await user_db.GetUser(userId);

  if (user == null){
    return "";
  }

  if (user.rss_feed == null) {
    var rss_feed = JSON.stringify(RSSFeedTemplate);
    await user_db.UpdateRSSFeed(user.id, rss_feed);
    user.rss_feed = rss_feed;
  }

  return convert.json2xml(user.rss_feed, { compact: false, spaces: 4 });
}
