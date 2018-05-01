import { combineReducers } from 'redux';
import {
  individualExperienceListing, individualHomeListing, individualRestaurant, listings,
  searchData, searchOptionsSettings
} from "./listings";

const reducer  = combineReducers({
  listings,
  individualHomeListing,
  individualExperienceListing,
  individualRestaurant,
  searchData,
  searchOptionsSettings
});

export default reducer;