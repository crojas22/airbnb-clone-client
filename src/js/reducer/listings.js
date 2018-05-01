import {
  CANCEL_CHANGES_TO_INDIVIDUAL_HOME_GUEST_COUNT_VALUE,
  DECREASE_HOME_GUEST_COUNT_ADULTS, DECREASE_HOME_GUEST_COUNT_CHILDREN, DECREASE_HOME_GUEST_COUNT_INFANTS,
  DECREASE_RESTAURANT_GUEST_COUNT, DECREASE_SEARCH_GUEST_COUNT_ADULTS, DECREASE_SEARCH_GUEST_COUNT_CHILDREN,
  DECREASE_SEARCH_GUEST_COUNT_INFANTS,
  FETCH_SEARCH_DATA, INCREASE_HOME_GUEST_COUNT_ADULTS, INCREASE_HOME_GUEST_COUNT_CHILDREN,
  INCREASE_HOME_GUEST_COUNT_INFANTS, INCREASE_RESTAURANT_GUEST_COUNT, INCREASE_SEARCH_GUEST_COUNT_ADULTS,
  INCREASE_SEARCH_GUEST_COUNT_CHILDREN, INCREASE_SEARCH_GUEST_COUNT_INFANTS,
  RESET_INDIVIDUAL_DATA, RESET_RESTAURANT_GUEST_COUNT_INDIVIDUAL, RESET_SEARCH_DATA, RESET_SEARCH_GUEST_COUNT,
  SEARCH_PAGE_LOADING_FALSE, SET_DATA,
  SET_INDIVIDUAL_EXPERIENCE_DATA,
  SET_INDIVIDUAL_HOME_DATA, SET_RESTAURANT_DATA,
  SET_SEARCH_DATA, TOGGLE_GUESTS_DROPDOWN_HOME, TOGGLE_GUESTS_DROPDOWN_RESTAURANT
} from "../type";

const initialState = {
  experienceListing: {
    content: [],
    settings: {
    
    }
  },
  homeListing: {
    content: [],
    settings: {
    
    }
  },
  restaurants: {
    content: [],
    settings: {
    
    }
  }
};

export const listings = (state=initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        experienceListing: {
          // content: action.payload.experienceListing
          ...state,
          content: action.payload.experienceListing.content
  
        },
        homeListing: {
          // content: action.payload.homeListing
          ...state,
          content: action.payload.homeListing.content
        },
        restaurants: {
          ...state,
          content: action.payload.restaurants.content
        }
      };
    default:
      return state;
  }
};

export const searchData = (state={listings: [], isLoading: true}, action) => {
  switch (action.type) {
    case FETCH_SEARCH_DATA:
      return {
        ...state,
        isLoading: true
      };
    case SET_SEARCH_DATA:
      return {
        ...state,
        listings: action.payload,
        isLoading: false
      };
    case SEARCH_PAGE_LOADING_FALSE:
      return {
        ...state,
        isLoading: action.payload
      };
    case RESET_SEARCH_DATA:
      return {
        listings: [],
        isLoading: true
      };
    default:
      return state;
  }
};

const initialSearchOptionsSettingsState = {
  homes: {
    dates: {
    
    },
    guests: {
      isSelected: false,
      guestCount: {
        adults: 1,
        children: 0,
        infants: 0
      }
    },
    homeType: {
    
    },
    price: {
    
    },
    instantBook: {
    
    },
    tripType: {
    
    },
    moreFilter: {
    
    }
  },
  experiences: {
    guests: {
      isSelected: false,
      guestCount: {
        adults: 1,
        children: 0,
        infants: 0
      }
    },
  },
  restaurants: {
    guests: {
      isSelected: false,
      guestCount: {
        adults: 1,
        children: 0,
        infants: 0
      }
    },
  }
};

export const searchOptionsSettings = (state=initialSearchOptionsSettingsState, action) => {
  switch (action.type) {
    case INCREASE_SEARCH_GUEST_COUNT_ADULTS:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          guests: {
            ...state[action.payload].guests,
            guestCount: {
              ...state[action.payload].guests.guestCount,
              adults: state[action.payload].guests.guestCount.adults += 1
            }
          }
        }
      };
    case DECREASE_SEARCH_GUEST_COUNT_ADULTS:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          guests: {
            ...state[action.payload].guests,
            guestCount: {
              ...state[action.payload].guests.guestCount,
              adults: state[action.payload].guests.guestCount.adults -= 1
            }
          }
        }
      };
    case INCREASE_SEARCH_GUEST_COUNT_CHILDREN:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          guests: {
            ...state[action.payload].guests,
            guestCount: {
              ...state[action.payload].guests.guestCount,
              children: state[action.payload].guests.guestCount.children += 1
            }
          }
        }
      };
    case DECREASE_SEARCH_GUEST_COUNT_CHILDREN:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          guests: {
            ...state[action.payload].guests,
            guestCount: {
              ...state[action.payload].guests.guestCount,
              children: state[action.payload].guests.guestCount.children -= 1
            }
          }
        }
      };
    case INCREASE_SEARCH_GUEST_COUNT_INFANTS:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          guests: {
            ...state[action.payload].guests,
            guestCount: {
              ...state[action.payload].guests.guestCount,
              infants: state[action.payload].guests.guestCount.infants += 1
            }
          }
        }
      };
    case DECREASE_SEARCH_GUEST_COUNT_INFANTS:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          guests: {
            ...state[action.payload].guests,
            guestCount: {
              ...state[action.payload].guests.guestCount,
              infants: state[action.payload].guests.guestCount.infants -= 1
            }
          }
        }
      };
    case RESET_SEARCH_GUEST_COUNT:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          guests: {
            ...state[action.payload].guests,
            guestCount: {
              adults: 1,
              children: 0,
              infants: 0
            }
          }
        }
      };
    default:
      return state
  }
};

const homeInitialState = {
  settings: {
    guestsDropdownIsOpen: false
  },
  guestCount: {
    adults: 1,
    children: 0,
    infants: 0
  }
};

export const individualHomeListing = (state=homeInitialState, action) => {
  switch (action.type) {
    case SET_INDIVIDUAL_HOME_DATA:
      return {
        ...state,
        ...action.payload
      };
    case TOGGLE_GUESTS_DROPDOWN_HOME:
      return {
        ...state,
        settings: {
          ...state.settings,
          guestsDropdownIsOpen: !state.settings.guestsDropdownIsOpen
        }
      };
    case CANCEL_CHANGES_TO_INDIVIDUAL_HOME_GUEST_COUNT_VALUE:
      return {
        ...state,
        guestCount: {
          adults: 1,
          children: 0,
          infants: 0
        }
      };
    case INCREASE_HOME_GUEST_COUNT_ADULTS:
      return {
        ...state,
        guestCount: {
          ...state.guestCount,
          adults: state.guestCount.adults += 1
        }
      };
    case DECREASE_HOME_GUEST_COUNT_ADULTS:
      return {
        ...state,
        guestCount: {
          ...state.guestCount,
          adults: state.guestCount.adults -= 1
        }
      };
    case INCREASE_HOME_GUEST_COUNT_CHILDREN:
      return {
        ...state,
        guestCount: {
          ...state.guestCount,
          children: state.guestCount.children += 1
        }
      };
    case DECREASE_HOME_GUEST_COUNT_CHILDREN:
      return {
        ...state,
        guestCount: {
          ...state.guestCount,
          children: state.guestCount.children -= 1
        }
      };
    case INCREASE_HOME_GUEST_COUNT_INFANTS:
      return {
        ...state,
        guestCount: {
          ...state.guestCount,
          infants: state.guestCount.infants += 1
        }
      };
    case DECREASE_HOME_GUEST_COUNT_INFANTS:
      return {
        ...state,
        guestCount: {
          ...state.guestCount,
          infants: state.guestCount.infants -= 1
        }
      };
    case RESET_INDIVIDUAL_DATA:
      return {
        settings: {
          guestsDropdownIsOpen: false
        },
        guestCount: {
          adults: 1,
          children: 0,
          infants: 0
        }
      };
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

const individualRestaurantState = {
  settings: {
    guestsDropdownIsOpen: false
  },
  guestCount: {
    guests: 2
  }
};

export const individualRestaurant = (state=individualRestaurantState, action) => {
  switch (action.type) {
    case SET_RESTAURANT_DATA:
      return {
        ...state,
        ...action.payload
      };
    case TOGGLE_GUESTS_DROPDOWN_RESTAURANT:
      return {
        ...state,
        settings: {
          ...state.settings,
          guestsDropdownIsOpen: !state.settings.guestsDropdownIsOpen
        }
      };
    case INCREASE_RESTAURANT_GUEST_COUNT:
      return {
        ...state,
        guestCount: {
          ...state.guestCount,
          guests: state.guestCount.guests += 1
        }
      };
    case DECREASE_RESTAURANT_GUEST_COUNT:
      return {
        ...state,
        guestCount: {
          guests: state.guestCount.guests -= 1
        }
      };
    case RESET_RESTAURANT_GUEST_COUNT_INDIVIDUAL:
      return {
        ...state,
        guestCount: {
          guests: 2
        }
      };
    case RESET_INDIVIDUAL_DATA:
      return {
        settings: {
          guestsDropdownIsOpen: false
        },
        guestCount: {
          guests: 2
        }
      };
    default:
      return state;
  }
};