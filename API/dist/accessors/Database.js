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
exports.DeleteFavoritedPodcastEpisodes = exports.AddFavoritedPodcastEpisodes = exports.DeleteFavoritedPodcast = exports.AddFavoritedPodcast = exports.GetFavoritedPodcasts = exports.GetUser = void 0;
const { createClient } = require('@supabase/supabase-js');
function GetUser(Id) {
    return __awaiter(this, void 0, void 0, function* () {
        const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_PROJECT_SECRET);
        const { data, error } = yield supabase
            .from('User')
            .select('*')
            .single()
            .eq('Id', Id);
        let result = data;
        return result;
    });
}
exports.GetUser = GetUser;
function GetFavoritedPodcasts(Id) {
    return __awaiter(this, void 0, void 0, function* () {
        const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_PROJECT_SECRET);
        const { data, error } = yield supabase
            .from('FavoritedPodcast')
            .select('Id,CreateDate,PodcastId,Title,ImageUrl')
            .eq('UserId', Id);
        let result = data;
        return result;
    });
}
exports.GetFavoritedPodcasts = GetFavoritedPodcasts;
function AddFavoritedPodcast(favoritedPodcast) {
    return __awaiter(this, void 0, void 0, function* () {
        const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_PROJECT_SECRET);
        const { data, error } = yield supabase
            .from('FavoritedPodcast')
            .insert({ CreateDate: favoritedPodcast.createDate,
            UserId: favoritedPodcast.userId,
            PodcastId: favoritedPodcast.podcastId,
            RSSUrl: favoritedPodcast.rssUrl,
            Title: favoritedPodcast.title,
            ImageUrl: favoritedPodcast.imageUrl,
            ExistsEpisodes: true })
            .select();
        return data[0];
    });
}
exports.AddFavoritedPodcast = AddFavoritedPodcast;
function DeleteFavoritedPodcast(favoritedPodcastId) {
    return __awaiter(this, void 0, void 0, function* () {
        const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_PROJECT_SECRET);
        const { error } = yield supabase
            .from('FavoritedPodcast')
            .delete()
            .eq('Id', favoritedPodcastId);
    });
}
exports.DeleteFavoritedPodcast = DeleteFavoritedPodcast;
function AddFavoritedPodcastEpisodes(favoritedPodcastEpisodes) {
    return __awaiter(this, void 0, void 0, function* () {
        const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_PROJECT_SECRET);
        const { error } = yield supabase
            .from('FavoritedPodcastEpisode')
            .insert(favoritedPodcastEpisodes);
    });
}
exports.AddFavoritedPodcastEpisodes = AddFavoritedPodcastEpisodes;
function DeleteFavoritedPodcastEpisodes(favoritedPodcastId) {
    return __awaiter(this, void 0, void 0, function* () {
        const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_PROJECT_SECRET);
        const { error } = yield supabase
            .from('FavoritedPodcastEpisode')
            .delete()
            .eq('FavoritedPodcastId', favoritedPodcastId);
    });
}
exports.DeleteFavoritedPodcastEpisodes = DeleteFavoritedPodcastEpisodes;
