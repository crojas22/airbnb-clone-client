import React from 'react';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import stats from '../build/react-loadable.json';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import { createEpicMiddleware } from "redux-observable";
import { createStore, applyMiddleware } from 'redux';
import epics from "../src/js/epics/index";
import App from "../src/js/components/App";
import { Provider } from "react-redux";
import reducer from "../src/js/reducer/index";
const path = require("path");
const fs = require("fs");

module.exports =  (req, res) => {
  const filePath = path.resolve(__dirname, "..", "build", "index.html");
  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end()
    }
    const modules = [],
      context = {},
      store = createStore(reducer, applyMiddleware(createEpicMiddleware(epics)));
    
    const html = renderToString(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <StaticRouter location={req.url} context={context}>
          <Provider store={store}>
            <App/>
          </Provider>
        </StaticRouter>
      </Loadable.Capture>
    );
  
    let bundles = getBundles(stats, modules);
    
    return res.send(
      htmlData
        .replace('<div id="root"></div>', `<div id="root">${html}</div>${
          bundles
            .filter(each => each.file.endsWith('js'))
            .map(bundle => `<script type="text/javascript" src="${bundle.file}"></script>`)
          }`)
    )
  })
};