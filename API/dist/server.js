"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const express_jwt_1 = require("express-jwt");
const Utilities_1 = require("./services/Utilities");
const FavoritedPodcasts_1 = require("./services/FavoritedPodcasts");
const PodcastSearch_1 = require("./services/PodcastSearch");
const User_1 = require("./services/User");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const route = (0, express_2.Router)();
const PORT = process.env.PORT || "8000";
app.use(express_1.default.json());
app.use(route);
app.listen(PORT, () => `Server running on port ${PORT}!`);
var jwtCheck = (0, express_jwt_1.expressjwt)({
    secret: process.env.SUPABASE_JWT_SECRET,
    audience: "authenticated",
    algorithms: ["HS256"],
});
route.get("/", (request, response) => {
    response.json({ message: "Ok" });
});
route.get("/api/podcast/search", jwtCheck, (request, response) => {
    (0, PodcastSearch_1.PodcastSearch)(request.body.podcastName).then(result => {
        response.json(result).status(200);
    }).catch(error => {
        response.sendStatus(500);
        console.log(error);
    });
});
route.get("/api/user", jwtCheck, (request, response) => {
    (0, User_1.GetUser)((0, Utilities_1.getUserId)(request.headers.authorization)).then(result => {
        response.json(result).status(200);
    }).catch(error => {
        response.sendStatus(500);
        console.log(error);
    });
});
route.get("/user/favorited-podcasts", jwtCheck, (request, response) => {
    (0, FavoritedPodcasts_1.GetFavoritedPodcasts)((0, Utilities_1.getUserId)(request.headers.authorization)).then(result => {
        response.json(result).status(200);
    }).catch(error => {
        response.sendStatus(500);
        console.log(error);
    });
});
route.post("/api/user/favorited-podcasts/add", jwtCheck, (request, response) => {
    (0, FavoritedPodcasts_1.AddFavoritedPodcast)((0, Utilities_1.getUserId)(request.headers.authorization), request.body.podcastId).then(result => {
        response.json(result).status(200);
    }).catch(error => {
        response.sendStatus(500);
        console.log(error);
    });
});
route.post("/api/user/favorited-podcasts/delete", jwtCheck, (request, response) => {
    (0, FavoritedPodcasts_1.DeleteFavoritedPodcast)(request.body.favoritedPodcastId).then(result => {
        response.json(result).status(200);
    }).catch(error => {
        response.sendStatus(500);
        console.log(error);
    });
});
route.post("/api/refresh-token", (request, response) => {
    (0, User_1.RefreshToken)(request.body.refresh_token).then(result => {
        response.json(result).status(200);
    }).catch(error => {
        if (error.response.data.error == "invalid_grant") {
            response.json({ "error": error.response.data.error, "error_description": error.response.data.error_description }).status(500);
        }
        else {
            response.sendStatus(500);
            console.log(error);
        }
    });
});
