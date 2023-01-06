var convert = require('xml-js');

import { RSSFeedTemplate } from './constants/constants';

import {GetNextUser, 
        GetUserRandomFavoritedPodcast, 
        GetUserRandomFavoritedPodcastEpisode, 
        UpdateUserRandomFavoritedPodcastEpisodeExist} from './accessors/Database'

import dotenv from 'dotenv';
dotenv.config(); 
RunSync()

async function RunSync(): Promise<void> {
    while(true){
        
        var cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - 2);

        let user = await GetNextUser(cutoffDate.toISOString())

        let favoritedPodcastId = await GetUserRandomFavoritedPodcast(user.Id);
        console.log(favoritedPodcastId);

        let favoritedPodcastEpisode = await GetUserRandomFavoritedPodcastEpisode(favoritedPodcastId);
        console.log(favoritedPodcastEpisode);

        if (!favoritedPodcastEpisode){
          await UpdateUserRandomFavoritedPodcastEpisodeExist(false, favoritedPodcastId);
        }

        // Next steps
        // convert json to  xml
        // add podcast to feed
        // remove epiosde from list

        await sleep(5000);
    }
}

function sleep(ms:number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }


  
//GetNextUser
 var result1 = convert.xml2json("", {compact: false, spaces: 2});
 console.log(result1)
//  var result2 = convert.json2xml(test, {compact: false, spaces: 4});
// console.log(result2)
