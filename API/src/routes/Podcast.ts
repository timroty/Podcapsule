import { Router, Request, Response } from "express";
import { jwtCheck } from "../server";
import { PodcastSearch } from "../services/PodcastSearch";

const router = Router();

// TODO: Make this a query param
router.post("/search", jwtCheck, (request: Request, response: Response) => {
  PodcastSearch(request.body.podcastName)
    .then((result) => {
      response.json(result).status(200);
    })
    .catch((error) => {
      response.sendStatus(500);
      console.log(error);
    });
});

export default router;
