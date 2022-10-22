import { GetUser as GetUserDB} from "../accessors/Database";

import { User } from "../types/DatabaseTypes";

const axios = require('axios')

export async function GetUser(userId:string): Promise<User> {
    return await GetUserDB(userId);
}

export async function RefreshToken(refreshToken:string) {
    var data = JSON.stringify({
        "refresh_token": refreshToken
      });
      
    let config = {
        method: 'post',
        url: process.env.SUPABASE_PROJECT_URL + '/auth/v1/token?grant_type=refresh_token',
        headers: { 
          'apikey': process.env.SUPABASE_PROJECT_SECRET, 
          'Content-Type': 'application/json', 
        },
        data : data
      };

      return (await axios(config)).data;
}

