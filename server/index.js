const express = require('express');
const config = require('./config');
const path = require("path");
const serverRenderer = require("./serverRender");

const app = express();

app.get('/', serverRenderer);

app.use(express.static('build'));

app.listen(config.port, config.host, () => console.info(`Express is listening on port ${config.port}`));