import express from "express";
import { Router, Request, Response } from "express";
import { expressjwt } from "express-jwt";

import UserRouter from "./routes/User";
import PodcastRouter from "./routes/Podcast";

// import dotenv from 'dotenv';
// dotenv.config();çç
require("dotenv").config();

const cors = require("cors");

const app = express();
const apiRouter = Router();
const PORT = process.env.PORT || "8000";

app.use(express.json());
app.use(cors());
app.listen(PORT, () => `Server running on port ${PORT}!`);

apiRouter.get("/", (request: Request, response: Response) => {
  response.json({ message: "Ok" });
});

app.use("/api", apiRouter);

apiRouter.use("/user", UserRouter);
apiRouter.use("/podcast", PodcastRouter);

apiRouter.get("/environment", (request: Request, response: Response) => {
  response.json({
    message: process.env.ENVIRONMENT,
    test: process.env.SUPABASE_JWT_SECRET,
  });
});
