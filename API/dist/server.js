"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const FavoritedPodcasts_1 = require("./services/FavoritedPodcasts");
const PodcastSearch_1 = require("./services/PodcastSearch");
const User_1 = require("./services/User");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const route = (0, express_2.Router)();
const PORT = process.env.PORT || "8000";
app.use(express_1.default.json());
route.get("/", (request, response) => {
    response.json({ message: "Ok" });
});
app.use(route);
app.listen(PORT, () => `Server running on port ${PORT}!`);
route.get("/", (request, response) => {
    response.json({ message: "Ok" });
});
route.get("/podcast/search", (request, response) => {
    (0, PodcastSearch_1.PodcastSearch)(request.body.podcastName).then(result => {
        response.json(result).status(200);
    }).catch(error => {
        response.sendStatus(500);
        console.log(error);
    });
});
route.get("/user", (request, response) => {
    (0, User_1.GetUser)(request.body.userId).then(result => {
        response.json(result).status(200);
    }).catch(error => {
        response.sendStatus(500);
        console.log(error);
    });
});
route.get("/user/favorited-podcasts", (request, response) => {
    (0, FavoritedPodcasts_1.GetFavoritedPodcasts)(request.body.userId).then(result => {
        response.json(result).status(200);
    }).catch(error => {
        response.sendStatus(500);
        console.log(error);
    });
});
route.post("/user/favorited-podcasts/add", (request, response) => {
    (0, FavoritedPodcasts_1.AddFavoritedPodcast)(request.body.userId, request.body.podcastId).then(result => {
        response.json(result).status(200);
    }).catch(error => {
        response.sendStatus(500);
        console.log(error);
    });
});
route.post("/user/favorited-podcasts/delete", (request, response) => {
    (0, FavoritedPodcasts_1.DeleteFavoritedPodcast)(request.body.favoritedPodcastId).then(result => {
        response.json(result).status(200);
    }).catch(error => {
        response.sendStatus(500);
        console.log(error);
    });
});
