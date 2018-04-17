import { combineEpics } from 'redux-observable';
import {
  FETCH_DATA, FETCH_INDIVIDUAL_EXPERIENCE_DATA, FETCH_INDIVIDUAL_HOME_DATA, FETCH_SEARCH_DATA, SEND_DATA, SET_DATA,
  SET_INDIVIDUAL_EXPERIENCE_DATA,
  SET_INDIVIDUAL_HOME_DATA, SET_SEARCH_DATA
} from "../type";
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { setData } from "../action";

// export const url = rest => `http://localhost:8080/api/${rest}`;
export const url = rest => `https://airbnb-clone-sql.herokuapp.com/api/${rest}`;

const fetchData = action$ => (
  action$.ofType(FETCH_DATA)
    .mergeMap(action => ajax.getJSON(url(action.url)))
    .map(response => setData(SET_DATA, response))
);

const fetchSearchData = action$ => (
  action$.ofType(FETCH_SEARCH_DATA)
    .mergeMap(action => ajax.getJSON(url(action.url)))
    .map(response => setData(SET_SEARCH_DATA, response.content))
);

const fetchIndividualHomeData = action$ => (
  action$.ofType(FETCH_INDIVIDUAL_HOME_DATA)
    .mergeMap(action => ajax.getJSON(url(action.url)))
    .map(resp => setData(SET_INDIVIDUAL_HOME_DATA, resp.listing))
);

const fetchIndividualExperienceData = action$ => (
  action$.ofType(FETCH_INDIVIDUAL_EXPERIENCE_DATA)
    .mergeMap(action => ajax.getJSON(url(action.url)))
    .map(resp => setData(SET_INDIVIDUAL_EXPERIENCE_DATA, resp.listing))
);

const sendData = actions$ => (
  actions$.ofType(SEND_DATA)
    .mergeMap(action => ajax.post(url(action.url), action.payload, { 'Content-Type': 'application/json' }))
    .do(resp => console.log(resp))
);

export default combineEpics(
  fetchData,
  fetchIndividualHomeData,
  fetchIndividualExperienceData,
  fetchSearchData,
  sendData
);