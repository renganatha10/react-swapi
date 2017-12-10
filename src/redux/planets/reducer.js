import {
  UPDATE_PLANETS_SEARCH_DICTIONARY,
  UPDATE_CURRENT_PLANET_DICTIONARY,
  SEARCHING_PLANET,
  UPDATE_CURRENT_PLANET,
  UPDATE_VIEW_LIST
} from './constants';

const initialState = {
  planetsSearchDictionary: {},
  planetsDictionary: {},
  currentPlanetList: [],
  isLoading: false,
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
        planetsDictionary: action.newPlanets
      };
    case UPDATE_PLANETS_SEARCH_DICTIONARY:
      return {
        ...state,
        isLoading: false,
        planetsSearchDictionary: action.newPlanets
      };
    case UPDATE_VIEW_LIST:
      return {
        ...state,
        isLoading: false,
        currentPlanetList: action.currentPlanets
      };
    case UPDATE_CURRENT_PLANET:
      return {
        ...state,
        isLoading: false,
        currentPlanet: action.planet
      };
    default:
      return state;
  }
}
