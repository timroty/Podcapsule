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
exports.GetRssFeed = exports.GetPodcast = exports.PodcastSearch = void 0;
const axios = require("axios");
function PodcastSearch(podcastName) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = JSON.stringify({
            query: `query {
      podcasts(searchTerm: "${podcastName}", first: 10, sort: {
          sortBy: RELEVANCE,
          direction: DESCENDING
      }) {
          paginatorInfo {
              currentPage,
              hasMorePages,
              lastPage,
          },
          data {
              id,
              title,
              description,
              imageUrl,
              numberOfEpisodes,
              ratingAverage,
              ratingCount
          }
      }
  }`,
            variables: {},
        });
        let config = {
            method: "post",
            url: "https://api.podchaser.com/graphql",
            headers: {
                Authorization: `Bearer ${process.env.POD_CHASER_BEARER_TOKEN}`,
                "Content-Type": "application/json",
            },
            data: data,
        };
        let response = (yield axios(config)).data.data.podcasts
            .data;
        return response;
    });
}
exports.PodcastSearch = PodcastSearch;
function GetPodcast(Id) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = JSON.stringify({
            query: `query {
      podcast(identifier: {
          id: "${Id}",
          type: PODCHASER
      }) {
            id,
            title,
            description,
            imageUrl,
            numberOfEpisodes,
            ratingAverage,
            ratingCount,
            rssUrl
      }
  }`,
            variables: {},
        });
        let config = {
            method: "post",
            url: "https://api.podchaser.com/graphql",
            headers: {
                Authorization: `Bearer ${process.env.POD_CHASER_BEARER_TOKEN}`,
                "Content-Type": "application/json",
            },
            data: data,
        };
        let response = (yield axios(config)).data.data.podcast;
        return response;
    });
}
exports.GetPodcast = GetPodcast;
function GetRssFeed(rssUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        var config = {
            method: "get",
            url: rssUrl,
            headers: {},
        };
        let response = (yield axios(config)).data;
        return response;
    });
}
exports.GetRssFeed = GetRssFeed;
