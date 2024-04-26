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
exports.ForceSyncRSSFeed = void 0;
const axios = require("axios");
function ForceSyncRSSFeed(Id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(4000);
        let config = {
            method: "post",
            url: process.env.SYNC_BACKEND_URL + "/api/sync",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                userId: Id,
            },
        };
        let response = yield axios(config);
        return response.data;
    });
}
exports.ForceSyncRSSFeed = ForceSyncRSSFeed;
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
