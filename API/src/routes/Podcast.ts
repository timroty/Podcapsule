import { Router, Request, Response } from "express";
import { Search } from "../services/Podcast";

const router = Router();

router.get("/search", (request: Request, response: Response) => {
  const searchValue = request.query.value as string;
  Search(searchValue)
    .then((result) => {
      response.json(result).status(200);
    })
    .catch((error) => {
      response.sendStatus(500);
      console.log(error);
    });
});

export default router;
