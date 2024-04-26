import { Router, Request, Response } from "express";
import { jwtCheck } from "../server";
import { GetUser, GetUserRSSFeed, RefreshToken } from "../services/User";
import { getUserId } from "../services/Utilities";
import {
  AddFavoritedPodcast,
  DeleteFavoritedPodcast,
  GetFavoritedPodcasts,
} from "../services/FavoritedPodcasts";

const router = Router();

router.get("/", jwtCheck, (request: Request, response: Response) => {
  GetUser(getUserId(request.headers.authorization!))
    .then((result) => {
      response.json(result).status(200);
    })
    .catch((error) => {
      response.sendStatus(500);
      console.log(error);
    });
});

router.get(
  "/favorited-podcasts",
  jwtCheck,
  (request: Request, response: Response) => {
    GetFavoritedPodcasts(getUserId(request.headers.authorization!))
      .then((result) => {
        response.json(result).status(200);
      })
      .catch((error) => {
        response.sendStatus(500);
        console.log(error);
      });
  },
);

router.post(
  "/favorited-podcasts",
  jwtCheck,
  (request: Request, response: Response) => {
    AddFavoritedPodcast(
      getUserId(request.headers.authorization!),
      request.body.podcastId,
    )
      .then((result) => {
        response.json(result).status(200);
      })
      .catch((error) => {
        response.sendStatus(500);
        console.log(error);
      });
  },
);

router.delete(
  "/favorited-podcasts",
  jwtCheck,
  (request: Request, response: Response) => {
    DeleteFavoritedPodcast(request.body.favoritedPodcastId)
      .then((result) => {
        response.json(result).status(200);
      })
      .catch((error) => {
        response.sendStatus(500);
        console.log(error);
      });
  },
);

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

router.post("/refresh-token", (request: Request, response: Response) => {
  RefreshToken(request.body.refresh_token)
    .then((result) => {
      response.json(result).status(200);
    })
    .catch((error) => {
      if (error.response.data.error == "invalid_grant") {
        response
          .json({
            error: error.response.data.error,
            error_description: error.response.data.error_description,
          })
          .status(500);
      } else {
        response.sendStatus(500);
        console.log(error);
      }
    });
});

export default router;
