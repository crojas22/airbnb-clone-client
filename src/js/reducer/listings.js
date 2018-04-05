import { RESET_INDIVIDUAL_DATA, SET_DATA, SET_INDIVIDUAL_EXPERIENCE_DATA, SET_INDIVIDUAL_HOME_DATA } from "../type";

export const listings = (state={experienceListing:{content:[]}, homeListing:{content:[]}}, action) => {
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
  
        }
      };
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