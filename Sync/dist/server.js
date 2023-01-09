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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants/constants");
const Database_1 = require("./accessors/Database");
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var cors = require('cors');
const app = (0, express_1.default)();
const route = (0, express_2.Router)();
const PORT = process.env.PORT || "9000";
app.use(express_1.default.json());
app.use(cors());
app.use(route);
app.listen(PORT, () => `Server running on port ${PORT}!`);
let syncEntered = false;
route.get("/", (request, response) => {
    response.json({ message: "Sync Running: " + syncEntered });
});
RunSync();
function RunSync() {
    return __awaiter(this, void 0, void 0, function* () {
        syncEntered = true;
        while (true) {
            var cutoffDate = new Date();
            cutoffDate.setDate(cutoffDate.getDate() - parseInt(process.env.CUTOFF_DATE_SUBTRACTION));
            let user = yield (0, Database_1.GetNextUser)(cutoffDate.toISOString());
            if (!user) {
                yield sleep(parseInt(process.env.SYNC_SLEEP_TIME));
                continue;
            }
            let favoritedPodcastId = yield (0, Database_1.GetUserRandomFavoritedPodcast)(user.Id);
            if (!favoritedPodcastId) {
                yield (0, Database_1.UpdateUserLastSyncDate)(user.Id, new Date().toISOString());
                continue;
            }
            let favoritedPodcastEpisode = yield (0, Database_1.GetUserRandomFavoritedPodcastEpisode)(favoritedPodcastId);
            if (!favoritedPodcastEpisode) {
                yield (0, Database_1.UpdateUserRandomFavoritedPodcastEpisodeExist)(false, favoritedPodcastId);
                continue;
            }
            let firstTimeFeed = false;
            if (!user.rssFeed) {
                user.rssFeed = JSON.stringify(constants_1.RSSFeedTemplate);
                firstTimeFeed = true;
            }
            let userRSSFeedJson = JSON.parse(user.rssFeed);
            let favoritedPodcastEpisodeJson = JSON.parse(favoritedPodcastEpisode.EpisodeRSSJson);
            if (firstTimeFeed) {
                userRSSFeedJson.elements[0].elements[0].elements.forEach((element) => {
                    if (element.name == 'atom:link' && element.attributes.type == 'application/rss+xml') {
                        element.attributes.href = process.env.BASE_API_URL + '/api/user/rss/' + user.Id;
                    }
                });
            }
            const updatedDate = new Date().toUTCString();
            favoritedPodcastEpisodeJson.elements.forEach((element) => {
                if (element.name == 'pubDate') {
                    element.elements[0].text = updatedDate;
                }
            });
            userRSSFeedJson.elements[0].elements[0].elements.forEach((element) => {
                if (element.name == 'pubDate' || element.name == 'lastBuildDate') {
                    element.elements[0].text = updatedDate;
                }
            });
            userRSSFeedJson.elements[0].elements[0].elements.push(favoritedPodcastEpisodeJson);
            yield (0, Database_1.UpdateUserRSSFeed)(user.Id, JSON.stringify(userRSSFeedJson));
            yield (0, Database_1.RemoveUserRandomFavoritedPodcastEpisode)(favoritedPodcastEpisode.id);
            yield (0, Database_1.UpdateUserLastSyncDate)(user.Id, new Date().toISOString());
        }
    });
}
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
