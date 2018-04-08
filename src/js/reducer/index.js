import { combineReducers } from 'redux';
import { individualExperienceListing, individualHomeListing, listings, searchData } from "./listings";

const reducer  = combineReducers({
  listings,
  individualHomeListing,
  individualExperienceListing,
  searchData
});

export default reducer;