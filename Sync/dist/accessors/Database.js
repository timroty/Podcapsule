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
exports.GetNextUser = void 0;
const { createClient } = require('@supabase/supabase-js');
// User
function GetNextUser(LastSyncDateMS) {
    return __awaiter(this, void 0, void 0, function* () {
        const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_PROJECT_SECRET);
        const { data, error } = yield supabase
            .from('User')
            .select('*')
            .lte('LastSyncDate', LastSyncDateMS)
            .is('LastSyncDate', null)
            .limit(1);
        let result = data;
        return result;
    });
}
exports.GetNextUser = GetNextUser;
