import { combineReducers } from 'redux';
import { individualExperienceListing, individualHomeListing, listings } from "./listings";

const reducer  = combineReducers({
  listings,
  individualHomeListing,
  individualExperienceListing
});

export default reducer;