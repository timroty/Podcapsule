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
    // REMOVE THIS
    await sleep(10000);

      var currentDate = new Date();
      var cutoffDate = currentDate;
      cutoffDate.setDate(cutoffDate.getDate() - 2);

      let user = await GetNextUser(cutoffDate.toISOString());

      if (!user){
        await sleep(3600000);
        continue;
      }

      let favoritedPodcastId = await GetUserRandomFavoritedPodcast(user.Id);

      if (!favoritedPodcastId){
        await UpdateUserLastSyncDate(user.Id, currentDate.toISOString()); 
        continue;
      }

      let favoritedPodcastEpisode = await GetUserRandomFavoritedPodcastEpisode(favoritedPodcastId);

      if (!favoritedPodcastEpisode){
        await UpdateUserRandomFavoritedPodcastEpisodeExist(false, favoritedPodcastId);
      }

      if (!user.rssFeed){
        user.rssFeed = JSON.stringify(RSSFeedTemplate);
      }

      let userRSSFeedJson = JSON.parse(user.rssFeed);
      let favoritedPodcastEpisodeJson = JSON.parse(favoritedPodcastEpisode.EpisodeRSSJson);

      const updatedDate = currentDate.toUTCString();

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
      await UpdateUserLastSyncDate(user.Id, currentDate.toISOString()); 

      console.log("Finished!");
  }
}

function sleep(ms:number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
