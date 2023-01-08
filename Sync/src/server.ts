import { RSSFeedTemplate } from './constants/constants';

import {GetNextUser, 
        GetUserRandomFavoritedPodcast, 
        GetUserRandomFavoritedPodcastEpisode, 
        UpdateUserRandomFavoritedPodcastEpisodeExist,
        UpdateUserRSSFeed,
        RemoveUserRandomFavoritedPodcastEpisode,
        UpdateUserLastSyncDate} from './accessors/Database'

import dotenv from 'dotenv';
dotenv.config(); 

RunSync()

async function RunSync(): Promise<void> {
  while(true){
      var cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - parseInt(process.env.CUTOFF_DATE_SUBTRACTION!));

      let user = await GetNextUser(cutoffDate.toISOString());

      if (!user){
        await sleep(parseInt(process.env.SYNC_SLEEP_TIME!));
        continue;
      }

      let favoritedPodcastId = await GetUserRandomFavoritedPodcast(user.Id);

      if (!favoritedPodcastId){
        await UpdateUserLastSyncDate(user.Id, new Date().toISOString()); 
        continue;
      }

      let favoritedPodcastEpisode = await GetUserRandomFavoritedPodcastEpisode(favoritedPodcastId);

      if (!favoritedPodcastEpisode){
        await UpdateUserRandomFavoritedPodcastEpisodeExist(false, favoritedPodcastId);
        continue;
      }

      let firstTimeFeed = false;
      if (!user.rssFeed){
        user.rssFeed = JSON.stringify(RSSFeedTemplate);
        firstTimeFeed = true;
      }

      let userRSSFeedJson = JSON.parse(user.rssFeed);
      let favoritedPodcastEpisodeJson = JSON.parse(favoritedPodcastEpisode.EpisodeRSSJson);

      if (firstTimeFeed){
        userRSSFeedJson.elements[0].elements[0].elements.forEach((element:any) => {
          if (element.name == 'atom:link' && element.attributes.type == 'application/rss+xml'){
            element.attributes.href = process.env.BASE_API_URL + '/api/user/rss/' + user.Id;
          }
        })
      }

      const updatedDate = new Date().toUTCString();

      favoritedPodcastEpisodeJson.elements.forEach((element:any) => {
        if (element.name == 'pubDate'){
          element.elements[0].text = updatedDate;
        }
      })

      userRSSFeedJson.elements[0].elements[0].elements.forEach((element:any) => {
        if (element.name == 'pubDate' || element.name == 'lastBuildDate'){
          element.elements[0].text = updatedDate
        }
      })

      userRSSFeedJson.elements[0].elements[0].elements.push(favoritedPodcastEpisodeJson);

      await UpdateUserRSSFeed(user.Id, JSON.stringify(userRSSFeedJson));
      await RemoveUserRandomFavoritedPodcastEpisode(favoritedPodcastEpisode.id);
      await UpdateUserLastSyncDate(user.Id, new Date().toISOString()); 
  }
}

function sleep(ms:number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
