const express = require('express');
const config = require('./config');
const serverRenderer = require("./serverRender");
const compression = require('compression');
const Loadable = require('react-loadable');

const app = express();
app.use(compression());

app.get(['/', '/listing/home/:id', '/listing/experience/:id'], serverRenderer);

app.use(express.static('build'));

Loadable.preloadAll().then(() => {
  app.listen(config.port, config.host, () => console.info(`Express is listening on port ${config.port}`));
});