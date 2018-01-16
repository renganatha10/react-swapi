import type { Dictionary } from './../../types/index';

type SEARCHING_PLANET = 'SEARCHING_PLANET';
type UPDATE_PLANETS_SEARCH_DICTIONARY = 'UPDATE_PLANETS_SEARCH_DICTIONARY';
type UPDATE_CURRENT_PLANET_DICTIONARY = 'UPDATE_CURRENT_PLANET_DICTIONARY';
type UPDATE_CURRENT_PLANET = 'UPDATE_CURRENT_PLANET';
type UPDATE_CURRRENT_KEYWORD = 'UPDATE_CURRRENT_KEYWORD';
type IS_LOADING_MORE = 'IS_LOADING_MORE';
type UPDATE_NEXT_URL = 'UPDATE_NEXT_URL';

export type PlanetsActions =
  | { type: SEARCHING_PLANET }
  | { type: UPDATE_PLANETS_SEARCH_DICTIONARY }
  | { type: UPDATE_CURRENT_PLANET_DICTIONARY }
  | { type: UPDATE_CURRENT_PLANET }
  | { type: UPDATE_CURRRENT_KEYWORD, keyword: string }
  | { type: IS_LOADING_MORE }
  | { type: UPDATE_NEXT_URL, url: string };