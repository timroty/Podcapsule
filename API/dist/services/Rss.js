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
exports.SavePodcastRssFeedEpisodes = void 0;
const Podcast_1 = require("../accessors/Podcast");
const Database_1 = require("../accessors/Database");
var convert = require('xml-js');
function SavePodcastRssFeedEpisodes(rssUrl, favoritedPodcastId) {
    return __awaiter(this, void 0, void 0, function* () {
        let podcastRssFeed = yield (0, Podcast_1.GetRssFeed)(rssUrl);
        let rssCompactJson = JSON.parse(convert.xml2json(podcastRssFeed, { compact: false, spaces: 2 }));
        let elements = rssCompactJson.elements[0].elements[0].elements;
        let itemElements = elements.filter((item) => {
            return item.name === "item";
        });
        var favoritedPodcastEpisodes = [];
        itemElements.forEach((episodeJson) => {
            favoritedPodcastEpisodes.push(({
                FavoritedPodcastId: favoritedPodcastId,
                EpisodeRSSJson: JSON.stringify(episodeJson)
            }));
        });
        yield (0, Database_1.AddFavoritedPodcastEpisodes)(favoritedPodcastEpisodes);
    });
}
exports.SavePodcastRssFeedEpisodes = SavePodcastRssFeedEpisodes;
