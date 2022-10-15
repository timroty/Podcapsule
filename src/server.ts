import express from "express";
import { Router, Request, Response } from "express";

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const route = Router();
const PORT = process.env.PORT || "8000";

app.use(express.json());

route.get("/", (request: Request, response: Response) => {
  response.json({ message: "hello world with Typescript" });
});

app.use(route);

app.listen(PORT, () => `Server running on port ${PORT}!`);