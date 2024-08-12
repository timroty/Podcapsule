import { Router, Request, Response } from "express";
import { GetUser, GetUserRSSFeed, RefreshToken } from "../services/User";
import { getUserId } from "../services/Utilities";
import {
  UpdateUserPodcast,
  DeleteUserPodcast,
  GetUserPodcasts,
} from "../services/Podcast";

const router = Router();

router.get("/rss/:id", (request: Request, response: Response) => {
  GetUserRSSFeed(request.params.id)
    .then((result) => {
      response.header("Content-Type", "application/xml");
      response.status(200).send(result);
    })
    .catch((error) => {
      response.sendStatus(500);
      console.log(error);
    });
});

router.get("/", (request: Request, response: Response) => {
  GetUser(getUserId(request.headers.authorization ?? ""))
    .then((result) => {
      response.json(result).status(200);
    })
    .catch((error) => {
      response.sendStatus(500);
      console.log(error);
    });
});

router.get("/podcasts", (request: Request, response: Response) => {
  var isActive = JSON.parse((request?.query?.isActive ?? "true") as string);

  GetUserPodcasts(getUserId(request.headers.authorization!), isActive)
    .then((result) => {
      response.json(result).status(200);
    })
    .catch((error) => {
      response.sendStatus(500);
      console.log(error);
    });
});

router.put("/podcast", (request: Request, response: Response) => {
  UpdateUserPodcast(
    "96f4ff72-cea2-4198-8e86-2a3e7bb071e8", //getUserId(request.headers.authorization!),
    request.body.podcastId,
    request.body.isActive ?? true,
  )
    .then((result) => {
      response.json(result).status(200);
    })
    .catch((error) => {
      response.sendStatus(500);
      console.log(error);
    });
});

router.delete("/podcast", (request: Request, response: Response) => {
  DeleteUserPodcast(request.body.podcastId)
    .then((result) => {
      response.json(result).status(200);
    })
    .catch((error) => {
      response.sendStatus(500);
      console.log(error);
    });
});

export default router;
