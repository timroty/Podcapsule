"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshToken = exports.GetUserRSSFeed = exports.GetUser = void 0;
const Database_1 = require("../accessors/Database");
var convert = require('xml-js');
const axios = require('axios');
function GetUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, Database_1.GetUser)(userId);
    });
}
exports.GetUser = GetUser;
function GetUserRSSFeed(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        var user = yield (0, Database_1.GetUser)(userId);
        if (user === null || user === void 0 ? void 0 : user.RSSFeedJSON) {
            return convert.json2xml(user.RSSFeedJSON, { compact: false, spaces: 4 });
        }
        else {
            return "";
        }
    });
}
exports.GetUserRSSFeed = GetUserRSSFeed;
function RefreshToken(refreshToken) {
    return __awaiter(this, void 0, void 0, function* () {
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
            data: data
        };
        return (yield axios(config)).data;
    });
}
exports.RefreshToken = RefreshToken;
