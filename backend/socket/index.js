"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModule = void 0;
var REPO_URL = 'https://api.github.com/repos/davidzas/github-history/commits';
var GITHUB_TOKEN = process.env.TOKEN;
var request = require('request');
var createModule = function (http) {
    var io = require('socket.io')(http, {
        cors: {
            origin: "http://localhost:3000",
        }
    });
    function fetchData(socket) {
        request({
            url: REPO_URL,
            json: true,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36',
                "Authorization": "token " + GITHUB_TOKEN
            }
        }, function (error, response, body) {
            console.log('data refreshed');
            socket.emit('data', body);
        });
    }
    io.on('connection', function (socket) {
        console.log('new client connected');
        socket.emit('connection', null);
        socket.on('refresh', function () {
            fetchData(socket);
        });
        setInterval(function () {
            fetchData(socket);
        }, 5000);
    });
};
exports.createModule = createModule;
