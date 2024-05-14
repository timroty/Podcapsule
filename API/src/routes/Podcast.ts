import { Router, Request, Response } from "express";

const router = Router();

import { expressjwt } from "express-jwt";
import { Search } from "../services/Podcast";

// router.use(expressjwt({
//   secret: process.env.SUPABASE_JWT_SECRET ?? "default",
//   audience: "authenticated",
//   algorithms: ["HS256"],
// }));

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
