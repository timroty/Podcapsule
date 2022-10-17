import { GetUser as GetUserDB} from "../accessors/Database";

import { User } from "../types/DatabaseTypes";

export async function GetUser(userId:string): Promise<User> {
    return await GetUserDB(userId);
}