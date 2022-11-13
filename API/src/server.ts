import express from "express";
import { Router, Request, Response } from "express";
import { expressjwt } from "express-jwt";

import { getUserId } from './services/Utilities';

import { AddFavoritedPodcast, GetFavoritedPodcasts, DeleteFavoritedPodcast } from './services/FavoritedPodcasts';
import { PodcastSearch } from './services/PodcastSearch';
import { GetUser, RefreshToken } from './services/User';
import { SavePodcastRssFeedEpisodes } from './services/Rss';

import dotenv from 'dotenv';
dotenv.config();

var cors = require('cors')

const app = express();
const route = Router();
const PORT = process.env.PORT || "8000";

app.use(express.json());
app.use(cors())
app.use(route);

app.listen(PORT, () => `Server running on port ${PORT}!`);

var jwtCheck = expressjwt({
  secret: process.env.SUPABASE_JWT_SECRET!,
  audience: "authenticated",
  algorithms: ["HS256"],
});

route.get("/", (request: Request, response: Response) => {
    response.json({ message: "Ok" });
});

route.post("/api/podcast/search", jwtCheck, (request: Request, response: Response) => {
  PodcastSearch(request.body.podcastName).then(result => {
      response.json(result).status(200);
    }).catch(error => {
      response.sendStatus(500);
      console.log(error);
    });
});

route.get("/api/user", jwtCheck, (request: Request, response: Response) => {
  GetUser(getUserId(request.headers.authorization!)).then(result => {
      response.json(result).status(200);
    }).catch(error => {
      response.sendStatus(500);
      console.log(error);
    });
});

route.get("/api/user/favorited-podcasts", jwtCheck, (request: Request, response: Response) => {
  GetFavoritedPodcasts(getUserId(request.headers.authorization!)).then(result => {
      response.json(result).status(200);
    }).catch(error => {
      response.sendStatus(500);
      console.log(error);
    });
});

route.post("/api/user/favorited-podcasts/add", jwtCheck, (request: Request, response: Response) => {
  AddFavoritedPodcast(getUserId(request.headers.authorization!), request.body.podcastId).then(result => {
      response.json(result).status(200);
    }).catch(error => {
      response.sendStatus(500);
      console.log(error);
    });
});

route.post("/api/user/favorited-podcasts/delete", jwtCheck, (request: Request, response: Response) => {
  DeleteFavoritedPodcast(request.body.favoritedPodcastId).then(result => {
      response.json(result).status(200);
    }).catch(error => {
      response.sendStatus(500);
      console.log(error);
    });
});

route.post("/api/refresh-token", (request: Request, response: Response) => {
  RefreshToken(request.body.refresh_token).then(result => {
      response.json(result).status(200);
    }).catch(error => {
      if (error.response.data.error == "invalid_grant"){
        response.json({ "error": error.response.data.error, "error_description": error.response.data.error_description}).status(500)
      } else {
        response.sendStatus(500);
        console.log(error);
      }
    });
});

route.get("/api/user/rssUrl", (request: Request, response: Response) => {
  response.json({ message: "Ok" });
});

route.get("/api/test", (request: Request, response: Response) => {
  SavePodcastRssFeedEpisodes((request.query.rss as string), 1).then(result => {
    response.contentType('application/xml');
    response.send(result).status(200);
  });
  //response.json({ message: "Ok" });
});