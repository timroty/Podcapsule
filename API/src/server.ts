import express from "express";
import { Router, Request, Response } from "express";

import { AddFavoritedPodcast, GetFavoritedPodcasts, DeleteFavoritedPodcast } from './services/FavoritedPodcasts';
import { PodcastSearch } from './services/PodcastSearch';
import { GetUser } from './services/User';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const route = Router();
const PORT = process.env.PORT || "8000";

app.use(express.json());

route.get("/", (request: Request, response: Response) => {
  response.json({ message: "Ok" });
});

app.use(route);

app.listen(PORT, () => `Server running on port ${PORT}!`);

route.get("/", (request: Request, response: Response) => {
    response.json({ message: "Ok" });
});

route.get("/podcast/search", (request: Request, response: Response) => {
  PodcastSearch(request.body.podcastName).then(result => {
      response.json(result).status(200);
    }).catch(error => {
      response.sendStatus(500);
      console.log(error);
    });
});

route.get("/user", (request: Request, response: Response) => {
  GetUser(request.body.userId).then(result => {
      response.json(result).status(200);
    }).catch(error => {
      response.sendStatus(500);
      console.log(error);
    });
});

route.get("/user/favorited-podcasts", (request: Request, response: Response) => {
  GetFavoritedPodcasts(request.body.userId).then(result => {
      response.json(result).status(200);
    }).catch(error => {
      response.sendStatus(500);
      console.log(error);
    });
});

route.post("/user/favorited-podcasts/add", (request: Request, response: Response) => {
  AddFavoritedPodcast(request.body.userId, request.body.podcastId).then(result => {
      response.json(result).status(200);
    }).catch(error => {
      response.sendStatus(500);
      console.log(error);
    });
});

route.post("/user/favorited-podcasts/delete", (request: Request, response: Response) => {
  DeleteFavoritedPodcast(request.body.favoritedPodcastId).then(result => {
      response.json(result).status(200);
    }).catch(error => {
      response.sendStatus(500);
      console.log(error);
    });
});