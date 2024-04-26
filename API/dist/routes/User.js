"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = require("../server");
const User_1 = require("../services/User");
const Utilities_1 = require("../services/Utilities");
const FavoritedPodcasts_1 = require("../services/FavoritedPodcasts");
const router = (0, express_1.Router)();
router.get("/", server_1.jwtCheck, (request, response) => {
    (0, User_1.GetUser)((0, Utilities_1.getUserId)(request.headers.authorization))
        .then((result) => {
        response.json(result).status(200);
    })
        .catch((error) => {
        response.sendStatus(500);
        console.log(error);
    });
});
router.get("/favorited-podcasts", server_1.jwtCheck, (request, response) => {
    (0, FavoritedPodcasts_1.GetFavoritedPodcasts)((0, Utilities_1.getUserId)(request.headers.authorization))
        .then((result) => {
        response.json(result).status(200);
    })
        .catch((error) => {
        response.sendStatus(500);
        console.log(error);
    });
});
router.post("/favorited-podcasts", server_1.jwtCheck, (request, response) => {
    (0, FavoritedPodcasts_1.AddFavoritedPodcast)((0, Utilities_1.getUserId)(request.headers.authorization), request.body.podcastId)
        .then((result) => {
        response.json(result).status(200);
    })
        .catch((error) => {
        response.sendStatus(500);
        console.log(error);
    });
});
router.delete("/favorited-podcasts", server_1.jwtCheck, (request, response) => {
    (0, FavoritedPodcasts_1.DeleteFavoritedPodcast)(request.body.favoritedPodcastId)
        .then((result) => {
        response.json(result).status(200);
    })
        .catch((error) => {
        response.sendStatus(500);
        console.log(error);
    });
});
router.get("/rss/:id", (request, response) => {
    (0, User_1.GetUserRSSFeed)(request.params.id)
        .then((result) => {
        response.header("Content-Type", "application/xml");
        response.status(200).send(result);
    })
        .catch((error) => {
        response.sendStatus(500);
        console.log(error);
    });
});
router.post("/refresh-token", (request, response) => {
    (0, User_1.RefreshToken)(request.body.refresh_token)
        .then((result) => {
        response.json(result).status(200);
    })
        .catch((error) => {
        if (error.response.data.error == "invalid_grant") {
            response
                .json({
                error: error.response.data.error,
                error_description: error.response.data.error_description,
            })
                .status(500);
        }
        else {
            response.sendStatus(500);
            console.log(error);
        }
    });
});
exports.default = router;
