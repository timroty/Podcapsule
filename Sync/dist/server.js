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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var convert = require('xml-js');
const Database_1 = require("./accessors/Database");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
RunSync();
function RunSync() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            console.log('we in');
            var cutoffDate = new Date();
            cutoffDate.setDate(cutoffDate.getDate() - 2);
            let user = yield (0, Database_1.GetNextUser)(cutoffDate.getTime());
            console.log(user);
            yield sleep(5000);
        }
    });
}
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
// GetNextUser
// var result1 = convert.xml2json(test, {compact: false, spaces: 2});
// console.log(result1)
//  var result2 = convert.json2xml(result1, {compact: false, spaces: 2});
// console.log(result2)
