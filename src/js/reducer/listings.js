import {
  RESET_INDIVIDUAL_DATA, RESET_SEARCH_DATA, SEARCH_PAGE_LOADING_FALSE, SET_DATA, SET_INDIVIDUAL_EXPERIENCE_DATA,
  SET_INDIVIDUAL_HOME_DATA, SET_RESTAURANT_DATA,
  SET_SEARCH_DATA
} from "../type";

export const listings = (state={experienceListing:{content:[]}, homeListing:{content:[]}, restaurants: []}, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        experienceListing: {
          // content: action.payload.experienceListing
          content: action.payload.experienceListing.content
  
        },
        homeListing: {
          // content: action.payload.homeListing
          content: action.payload.homeListing.content
        },
        restaurants: {
          content: action.payload.restaurants.content
        }
      };
    default:
      return state;
  }
};

export const searchData = (state={isLoading: true, listings: []}, action) => {
  switch (action.type) {
    case SET_SEARCH_DATA:
      return {
        ...state,
        listings: action.payload
      };
    case SEARCH_PAGE_LOADING_FALSE:
      return {
        ...state,
        isLoading: action.payload
      };
    case RESET_SEARCH_DATA:
      return [];
    default:
      return state;
  }
};

export const individualHomeListing = (state={}, action) => {
  switch (action.type) {
    case SET_INDIVIDUAL_HOME_DATA:
      return action.payload;
    case RESET_INDIVIDUAL_DATA:
      return {};
    default:
      return state;
  }
};

export const individualExperienceListing = (state={}, action) => {
  switch (action.type) {
    case SET_INDIVIDUAL_EXPERIENCE_DATA:
      return action.payload;
    case RESET_INDIVIDUAL_DATA:
      return {};
    default:
      return state;
  }
};

export const individualRestaurant = (state={}, action) => {
  switch (action.type) {
    case SET_RESTAURANT_DATA:
      return action.payload;
    case RESET_INDIVIDUAL_DATA:
      return {};
    default:
      return state;
  }
};