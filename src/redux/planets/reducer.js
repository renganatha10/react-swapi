import {
  UPDATE_PLANETS_SEARCH_DICTIONARY,
  UPDATE_CURRENT_PLANET_DICTIONARY,
  SEARCHING_PLANET,
  UPDATE_CURRENT_PLANET,
  UPDATE_CURRRENT_KEYWORD,
  IS_LOADING_MORE,
  UPDATE_NEXT_URL
} from './constants';

const initialState = {
  planetsSearchDictionary: {},
  planetsDictionary: {},
  isLoading: false,
  currentKeyword: '',
  isLoadingMore: false,
  nextUrl: null,
  currentPlanet: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCHING_PLANET:
      return { ...state, isLoading: true };
    case UPDATE_CURRENT_PLANET_DICTIONARY:
      return {
        ...state,
        isLoading: false,
        planetsDictionary: action.newPlanets,
        isLoadingMore: true
      };
    case UPDATE_PLANETS_SEARCH_DICTIONARY:
      return {
        ...state,
        isLoading: false,
        planetsSearchDictionary: action.newPlanets,
        isLoadingMore: true
      };
    case UPDATE_CURRENT_PLANET:
      return {
        ...state,
        isLoading: false,
        currentPlanet: action.planet
      };
    case IS_LOADING_MORE:
      return {
        ...state,
        isLoadingMore: true
      };
    case UPDATE_NEXT_URL:
      return {
        ...state,
        nextUrl: action.url
      };
    case UPDATE_CURRRENT_KEYWORD:
      return { ...state, currentKeyword: action.keyword };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
}
