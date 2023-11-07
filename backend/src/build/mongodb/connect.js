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
const mongodb_1 = require("mongodb");
const client = new mongodb_1.MongoClient('mongodb://localhost:27017', {
    family: 4,
    serverApi: mongodb_1.ServerApiVersion.v1,
});
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('start');
        try {
            yield client.connect();
            console.log('connection');
            const Main = client.db('Main');
            const users = Main.collection('users');
            yield users.insertOne({ age: 24, name: 'Bob' });
        }
        catch (err) {
            console.log(err);
        }
    });
}
;
start();
