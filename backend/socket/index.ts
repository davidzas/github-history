const REPO_URL = 'https://api.github.com/repos/davidzas/github-history/commits';
const GITHUB_TOKEN = process.env.TOKEN;
const request = require('request');

export const createModule = (http: any) => {
    const io = require('socket.io')(http, {
        cors: {
            origin: "http://localhost:3000",
        }
    });

    function fetchData(socket: { emit: (arg0: string, arg1: any) => void; }) {
        request({
            url: REPO_URL,
            json: true,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36',
                "Authorization": `token ${GITHUB_TOKEN}`
            }
        }, function (error: any, response: any, body: any) {
            console.log('data refreshed');
            socket.emit('data', body);
        });
    }

    io.on('connection', (socket: { emit: (arg0: string, arg1: null) => void; on: (arg0: string, arg1: () => void) => void; }) => { // socket object may be used to send specific messages to the new connected client
        console.log('new client connected');
        socket.emit('connection', null);
        socket.on('refresh', () => {
            fetchData(socket);
        });
        setInterval(() => {
            fetchData(socket);
        }, 5000);
    });
};
