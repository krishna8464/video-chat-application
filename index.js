const express = require('express');
const app = express();
const path = require('path');
const { createServer } = require('http');
const { getIO, initIO } = require('./socket');


app.use('/', express.static(path.join(__dirname, 'static')));

const httpServer = createServer(app);

let port = process.env.PORT || 3500;

initIO(httpServer);

httpServer.listen(port)
console.log("Server started on ", port);

getIO();