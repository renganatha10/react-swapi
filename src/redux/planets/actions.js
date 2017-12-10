import {
  UPDATE_PLANETS_SEARCH_DICTIONARY,
  UPDATE_CURRENT_PLANET_DICTIONARY,
  SEARCHING_PLANET,
  UPDATE_CURRENT_PLANET,
  UPDATE_VIEW_LIST
} from './constants';
import * as api from './../api';

export const updatePlanetSearchDictionary = newPlanets => {
  return {
    type: UPDATE_PLANETS_SEARCH_DICTIONARY,
    newPlanets
  };
};

export const updatePlanetDictionary = newPlanets => {
  return {
    type: UPDATE_CURRENT_PLANET_DICTIONARY,
    newPlanets
  };
};

export const updateCurrentPlanetList = currentPlanets => {
  return {
    type: UPDATE_VIEW_LIST,
    currentPlanets
  };
};

export const searchingPlanet = () => {
  return {
    type: SEARCHING_PLANET
  };
};

export const updatePlanets = planet => {
  return {
    type: UPDATE_CURRENT_PLANET,
    planet
  };
};

export const searchPlanets = keyword => {
  return (dispatch, getState) => {
    dispatch(searchingPlanet());
    const { planet } = getState();
    const { planetsDictionary, planetsSearchDictionary } = planet;
    const currentPlanet =
      keyword !== '' ? planetsSearchDictionary[keyword] : [];
    currentPlanet && dispatch(updateCurrentPlanetList(currentPlanet));
    api.searchPlanet(keyword).then(searchResponse => {
      const { results } = searchResponse;
      let newPlanetDictionary = planetsDictionary;
      results.forEach(item => {
        const id = item.url.split('/')[5];
        newPlanetDictionary = { ...newPlanetDictionary, [id]: item };
      });
      const newPlanetSearchDictionary = {
        ...planetsSearchDictionary,
        [keyword]: results
      };
      results.length > 1 && dispatch(updateCurrentPlanetList(results));
      dispatch(updatePlanetSearchDictionary(newPlanetSearchDictionary));
      dispatch(updatePlanetDictionary(newPlanetDictionary));
    });
  };
};

export const getPlanetById = id => {
  return (dispatch, getState) => {
    const { planet } = getState();
    const { planetsDictionary } = planet;
    dispatch(updatePlanets(planetsDictionary[id]));
  };
};
