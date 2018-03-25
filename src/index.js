import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware , compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import epics from "./js/epics"
import reducer from "./js/reducer";
import './style/css/index.css';
import App from './js/components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";


const epicMiddleware = createEpicMiddleware(epics);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(epicMiddleware)));

ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
// registerServiceWorker();
