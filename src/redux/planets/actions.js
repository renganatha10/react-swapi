import {
  UPDATE_PLANETS_SEARCH_DICTIONARY,
  UPDATE_CURRENT_PLANET_DICTIONARY,
  SEARCHING_PLANET,
  UPDATE_CURRENT_PLANET,
  UPDATE_CURRRENT_KEYWORD,
  IS_LOADING_MORE,
  UPDATE_NEXT_URL
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

export const updateCurrentKeyword = keyword => {
  return {
    type: UPDATE_CURRRENT_KEYWORD,
    keyword
  };
};

export const isLoadingMore = () => {
  return {
    type: IS_LOADING_MORE
  };
};

export const updateNextUrl = url => {
  return {
    type: UPDATE_NEXT_URL,
    url
  };
};

export const searchPlanets = keyword => {
  return (dispatch, getState) => {
    dispatch(searchingPlanet());
    dispatch(updateCurrentKeyword(keyword));
    const { planet } = getState();
    const { planetsDictionary, planetsSearchDictionary } = planet;
    api.searchPlanet(keyword).then(searchResponse => {
      const { results, next } = searchResponse;
      dispatch(updateNextUrl(next));
      let newPlanetDictionary = planetsDictionary;
      results.forEach(item => {
        const id = item.url.split('/')[5];
        newPlanetDictionary = { ...newPlanetDictionary, [id]: item };
      });
      const newPlanetSearchDictionary = {
        ...planetsSearchDictionary,
        [keyword]: results
      };
      dispatch(updatePlanetSearchDictionary(newPlanetSearchDictionary));
      dispatch(updatePlanetDictionary(newPlanetDictionary));
    });
  };
};

export const loadMorePlanet = (url, keyword) => {
  return (dispatch, getState) => {
    dispatch(isLoadingMore());
    fetch(url)
      .then(r => r.json())
      .then(searchResponse => {
        const { planet } = getState();
        const { planetsSearchDictionary, planetsDictionary } = planet;
        const { results, next } = searchResponse;
        dispatch(updateNextUrl(next));
        let newPlanetDictionary = planetsDictionary;
        results.forEach(item => {
          const id = item.url.split('/')[5];
          newPlanetDictionary = { ...newPlanetDictionary, [id]: item };
        });
        const appendedLoadedMoreResults = [
          ...planetsSearchDictionary[keyword],
          ...results
        ];
        const newPlanetSearchDictionary = {
          ...planetsSearchDictionary,
          [keyword]: appendedLoadedMoreResults
        };
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
