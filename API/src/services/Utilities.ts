import jwt_decode from "jwt-decode";

import { JWT } from "../types/JWTType";

export function getUserId(authorization: string): string {
  const authorizationToken = authorization.split(" ")[1];
  const decode: JWT = jwt_decode(authorizationToken);
  return decode.sub;
}
