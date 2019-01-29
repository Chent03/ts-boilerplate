import http from 'http';
import express from 'express';

const router = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(router);

server.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`)
})