import jwt_decode from 'jwt-decode';

import { JWT } from '../types/JWTType'

export function getUserId(authorization:string): string{
    let authorizationToken = authorization.split(' ')[1];
    let decode:JWT = jwt_decode(authorizationToken);
    return decode.sub;
}
