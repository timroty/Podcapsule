import { RSSFeedTemplate } from './constants/constants';

import {GetUser,
        GetNextUser, 
        GetUserRandomFavoritedPodcast, 
        GetUserRandomFavoritedPodcastEpisode, 
        UpdateUserRandomFavoritedPodcastEpisodeExist,
        UpdateUserRSSFeed,
        RemoveUserRandomFavoritedPodcastEpisode,
        UpdateUserLastSyncDate,
        GetPodcastTitle} from './accessors/Database'

import express from "express";
import { Router, Request, Response } from "express";
import { User } from "../src/types/DatabaseTypes"

import dotenv from 'dotenv';
dotenv.config(); 

var cors = require('cors')

const app = express();
const route = Router();
const PORT = process.env.PORT || "9000";

app.use(express.json());
app.use(cors());
app.use(route);

app.listen(PORT, () => `Server running on port ${PORT}!`);

let syncEntered = false;

route.get("/", (request: Request, response: Response) => {
    response.json({ message: "Sync Running: " + syncEntered });
});

route.post("/api/sync", (request: Request, response: Response) => {
  SyncUser(request.body.userId).then(result => {
      response.json(result).status(200);
    }).catch(error => {
      response.sendStatus(500);
      console.log(error);
    });
});

RunSync();

async function RunSync(): Promise<void> {
  syncEntered = true;

  while(true){
      var cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - parseInt(process.env.CUTOFF_DATE_SUBTRACTION!));

      let user = await GetNextUser(cutoffDate.toISOString());

      if (!user){
        await sleep(parseInt(process.env.SYNC_SLEEP_TIME!));
        continue;
      }

      await AddPodcastToFeed(user);
  }
}

async function SyncUser(userId:string): Promise<boolean>{
  let user = await GetUser(userId);

  if (!user)
    return false;

  await AddPodcastToFeed(user);
  return true;
}

async function AddPodcastToFeed(user:User): Promise<void> {
  let favoritedPodcastId = await GetUserRandomFavoritedPodcast(user.Id);

  if (!favoritedPodcastId){
    await UpdateUserLastSyncDate(user.Id, new Date().toISOString()); 
    return;
  }

  let favoritedPodcastEpisode = await GetUserRandomFavoritedPodcastEpisode(favoritedPodcastId);

  if (!favoritedPodcastEpisode){
    await UpdateUserRandomFavoritedPodcastEpisodeExist(false, favoritedPodcastId);
    return;
  }

  let podcastTitle = await GetPodcastTitle(favoritedPodcastId);

  let firstTimeFeed = false;

  if (!user.RSSFeedJSON){
    user.RSSFeedJSON = JSON.stringify(RSSFeedTemplate);
    firstTimeFeed = true;
  }

  let userRSSFeedJson = JSON.parse(user.RSSFeedJSON);
  let favoritedPodcastEpisodeJson = JSON.parse(favoritedPodcastEpisode.EpisodeRSSJson);
  
  const updatedDate = new Date().toUTCString();

  if (firstTimeFeed){
    // Update user custom RSS feed link
    userRSSFeedJson.elements[0].elements[0].elements.forEach((element:any) => {
      if (element.name == 'atom:link' && element.attributes.type == 'application/rss+xml'){
        element.attributes.href = process.env.BASE_API_URL + '/api/user/rss/' + user.Id;
      }
    })

    // Update first episode pubDate
    userRSSFeedJson.elements[0].elements[0].elements.forEach((element:any) => {
      if (element.name == 'item'){
        // elements[3] is hardccoded pubDate 
        element.elements[3].elements[0].text = updatedDate;
      }
    })
  }

  favoritedPodcastEpisodeJson.elements.forEach((element:any) => {
    if (element.name == 'pubDate'){
      element.elements[0].text = updatedDate;
    }
    if (element.name == 'title' || element.name =='itunes:title'){
      element.elements[0].text = podcastTitle + ' - ' + element.elements[0].text;
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

function sleep(ms:number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
