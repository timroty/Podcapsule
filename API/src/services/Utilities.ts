import jwt_decode from "jwt-decode";

type JWT = {
  aud: string;
  exp: number;
  sub: string;
  email: string;
  phone: string;
  app_metadata: JSON;
  user_metadata: JSON;
  role: string;
  session_id: string;
};

export function getUserId(authorization: string): string {
  const authorizationToken = authorization.split(" ")[1];
  const decode: JWT = jwt_decode(authorizationToken);
  return decode.sub;
}
