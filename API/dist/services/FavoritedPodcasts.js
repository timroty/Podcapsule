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
exports.DeleteFavoritedPodcast = exports.AddFavoritedPodcast = exports.GetFavoritedPodcasts = void 0;
const Podcast_1 = require("../accessors/Podcast");
const Database_1 = require("../accessors/Database");
const Rss_1 = require("./Rss");
function GetFavoritedPodcasts(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, Database_1.GetFavoritedPodcasts)(userId);
    });
}
exports.GetFavoritedPodcasts = GetFavoritedPodcasts;
function AddFavoritedPodcast(userId, podcastId) {
    return __awaiter(this, void 0, void 0, function* () {
        let podcast = yield (0, Podcast_1.GetPodcast)(podcastId);
        let favoritedPodcast = ({
            createDate: new Date(),
            userId: userId,
            podcastId: podcastId,
            rssUrl: podcast.rssUrl,
            title: podcast.title,
            imageUrl: podcast.imageUrl
        });
        var result = yield (0, Database_1.AddFavoritedPodcast)(favoritedPodcast);
        if (podcast.rssUrl != null || podcast.rssUrl != undefined)
            (0, Rss_1.SavePodcastRssFeedEpisodes)(podcast.rssUrl, result.Id);
    });
}
exports.AddFavoritedPodcast = AddFavoritedPodcast;
function DeleteFavoritedPodcast(favoritedPodcastId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, Database_1.DeleteFavoritedPodcastEpisodes)(favoritedPodcastId);
        yield (0, Database_1.DeleteFavoritedPodcast)(favoritedPodcastId);
    });
}
exports.DeleteFavoritedPodcast = DeleteFavoritedPodcast;
