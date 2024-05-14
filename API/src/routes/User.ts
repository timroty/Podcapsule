import { Router, Request, Response } from "express";
import { GetUser, GetUserRSSFeed, RefreshToken } from "../services/User";
import { getUserId } from "../services/Utilities";
import {
  UpdateUserPodcast,
  DeleteUserPodcast,
  GetUserPodcasts,
} from "../services/Podcast";

import { expressjwt } from "express-jwt";

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

// router.use(expressjwt({
//   secret: process.env.SUPABASE_JWT_SECRET ?? "default",
//   audience: "authenticated",
//   algorithms: ["HS256"],
// }));

router.get("/", (request: Request, response: Response) => {
  GetUser(getUserId(request.headers.authorization!))
    .then((result) => {
      response.json(result).status(200);
    })
    .catch((error) => {
      response.sendStatus(500);
      console.log(error);
    });
});

router.get("/podcasts", (request: Request, response: Response) => {
  var isActive = request.query.isActive
    ? JSON.parse(request.query.isActive as string)
    : true;
  GetUserPodcasts("96f4ff72-cea2-4198-8e86-2a3e7bb071e8", isActive)
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
  DeleteUserPodcast(
    "96f4ff72-cea2-4198-8e86-2a3e7bb071e8", //getUserId(request.headers.authorization!),
    request.body.podcastId,
  )
    .then((result) => {
      response.json(result).status(200);
    })
    .catch((error) => {
      response.sendStatus(500);
      console.log(error);
    });
});

// router.post("/refresh-token", (request: Request, response: Response) => {
//   RefreshToken(request.body.refresh_token)
//     .then((result) => {
//       response.json(result).status(200);
//     })
//     .catch((error) => {
//       if (error.response.data.error == "invalid_grant") {
//         response
//           .json({
//             error: error.response.data.error,
//             error_description: error.response.data.error_description,
//           })
//           .status(500);
//       } else {
//         response.sendStatus(500);
//         console.log(error);
//       }
//     });
// });

export default router;
