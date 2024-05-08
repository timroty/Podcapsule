import { Router, Request, Response } from "express";
//import { jwtCheck } from "../server";

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
  console.log(searchValue);
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
