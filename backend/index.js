"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var http_1 = __importDefault(require("http"));
var http = http_1.default.createServer(app);
var PORT = 8080;
var index_1 = require("./socket/index");
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
http.listen(PORT, function () {
    console.log("listening on *:" + PORT);
});
var socket = index_1.createModule(http);
