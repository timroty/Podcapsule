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
exports.RemoveUserRandomFavoritedPodcastEpisode = exports.UpdateUserLastSyncDate = exports.UpdateUserRSSFeed = exports.UpdateUserRandomFavoritedPodcastEpisodeExist = exports.GetUserRandomFavoritedPodcastEpisode = exports.GetUserRandomFavoritedPodcast = exports.GetNextUser = void 0;
const { createClient } = require('@supabase/supabase-js');
function GetNextUser(LastSyncDateISOString) {
    return __awaiter(this, void 0, void 0, function* () {
        const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_PROJECT_SECRET);
        const { data, error } = yield supabase
            .from('User')
            .select('*')
            .or(`LastSyncDate.is.null,LastSyncDate.lte.${LastSyncDateISOString}`)
            .limit(1)
            .single();
        let result = data;
        return result;
    });
}
exports.GetNextUser = GetNextUser;
function GetUserRandomFavoritedPodcast(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_PROJECT_SECRET);
        const { data, error } = yield supabase
            .from('random_favorited_podcast')
            .select('Id')
            .match({ UserId: userId, ExistsEpisodes: true })
            .limit(1)
            .single();
        let result = data === null || data === void 0 ? void 0 : data.Id;
        return result;
    });
}
exports.GetUserRandomFavoritedPodcast = GetUserRandomFavoritedPodcast;
function GetUserRandomFavoritedPodcastEpisode(favoritedPodcastId) {
    return __awaiter(this, void 0, void 0, function* () {
        const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_PROJECT_SECRET);
        const { data, error } = yield supabase
            .from('random_favorited_podcast_episode')
            .select('*')
            .eq('FavoritedPodcastId', favoritedPodcastId)
            .limit(1)
            .single();
        let result = data;
        return result;
    });
}
exports.GetUserRandomFavoritedPodcastEpisode = GetUserRandomFavoritedPodcastEpisode;
function UpdateUserRandomFavoritedPodcastEpisodeExist(existsEpisodes, FavoritedPodcastId) {
    return __awaiter(this, void 0, void 0, function* () {
        const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_PROJECT_SECRET);
        const { error } = yield supabase
            .from('FavoritedPodcast')
            .update({ ExistsEpisodes: existsEpisodes })
            .eq('Id', FavoritedPodcastId);
    });
}
exports.UpdateUserRandomFavoritedPodcastEpisodeExist = UpdateUserRandomFavoritedPodcastEpisodeExist;
function UpdateUserRSSFeed(userId, rssFeed) {
    return __awaiter(this, void 0, void 0, function* () {
        const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_PROJECT_SECRET);
        const { error } = yield supabase
            .from('User')
            .update({ RSSFeedJSON: rssFeed })
            .eq('Id', userId);
    });
}
exports.UpdateUserRSSFeed = UpdateUserRSSFeed;
function UpdateUserLastSyncDate(userId, syncDate) {
    return __awaiter(this, void 0, void 0, function* () {
        const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_PROJECT_SECRET);
        const { error } = yield supabase
            .from('User')
            .update({ LastSyncDate: syncDate })
            .eq('Id', userId);
    });
}
exports.UpdateUserLastSyncDate = UpdateUserLastSyncDate;
function RemoveUserRandomFavoritedPodcastEpisode(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_PROJECT_SECRET);
        const { error } = yield supabase
            .from('FavoritedPodcastEpisode')
            .delete()
            .eq('id', id);
    });
}
exports.RemoveUserRandomFavoritedPodcastEpisode = RemoveUserRandomFavoritedPodcastEpisode;
