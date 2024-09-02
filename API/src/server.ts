import express from "express";
import { Router, Request, Response } from "express";
import { expressjwt } from "express-jwt";

import UserRouter from "./routes/User";
import PodcastRouter from "./routes/Podcast";
import { GetUserRSSFeed } from "./services/User";

import dotenv from "dotenv";
dotenv.config();

const cors = require("cors");

const app = express();
const apiRouter = Router();
const PORT = process.env.PORT || "8000";

app.use(express.json());
app.use(cors());
app.listen(PORT, () => `Server running on port ${PORT}!`);

app.get("/", (request: Request, response: Response) => {
  response.json({ message: "Ok" });
});

app.use("/api", apiRouter);

apiRouter.get("/environment", (request: Request, response: Response) => {
  response.json({
    message: process.env.ENVIRONMENT,
  });
});

apiRouter.get("/user/rss/:id", (request: Request, response: Response) => {
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

apiRouter.use(
  expressjwt({
    secret: process.env.SUPABASE_JWT_SECRET ?? "",
    audience: "authenticated",
    algorithms: ["HS256"],
  }),
);

apiRouter.use("/user", UserRouter);
apiRouter.use("/podcast", PodcastRouter);
