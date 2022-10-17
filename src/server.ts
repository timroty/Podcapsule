import express from "express";
import { Router, Request, Response } from "express";

import { PodcastSearch } from './accessors/Podcast';

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

route.get("/podcasts/search", (request: Request, response: Response) => {
    
    PodcastSearch("Revisionist History").then(result => {
        response.json(result).status(200);
      }).catch(error => {
        response.sendStatus(500);
        console.log(error);
      });
});