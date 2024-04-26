export type JWT = {
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
