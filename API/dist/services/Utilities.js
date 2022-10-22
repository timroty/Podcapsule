"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserId = void 0;
const jwt_decode_1 = __importDefault(require("jwt-decode"));
function getUserId(authorization) {
    let authorizationToken = authorization.split(' ')[1];
    let decode = (0, jwt_decode_1.default)(authorizationToken);
    return decode.sub;
}
exports.getUserId = getUserId;
