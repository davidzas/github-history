import { createModule } from './socket/index';
import express from 'express';
import httpModule from 'http';
const app = express();
const http = httpModule.createServer(app);
const PORT = 8080;



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})


http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

const socket = createModule(http);