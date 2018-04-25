import { combineReducers } from 'redux';
import {
  individualExperienceListing, individualHomeListing, individualRestaurant, listings,
  searchData
} from "./listings";

const reducer  = combineReducers({
  listings,
  individualHomeListing,
  individualExperienceListing,
  individualRestaurant,
  searchData
});

export default reducer;