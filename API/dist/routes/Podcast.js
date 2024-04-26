"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = require("../server");
const PodcastSearch_1 = require("../services/PodcastSearch");
const router = (0, express_1.Router)();
router.post("/search", server_1.jwtCheck, (request, response) => {
    (0, PodcastSearch_1.PodcastSearch)(request.body.podcastName)
        .then((result) => {
        response.json(result).status(200);
    })
        .catch((error) => {
        response.sendStatus(500);
        console.log(error);
    });
});
exports.default = router;
