// @flow

const PEOPLE_END_POINT = 'https://swapi.co/api/people/';
const PLANET_END_POINT = 'https://swapi.co/api/planets/';

export const fetchPeapleById = (id: string): Promise<any> => {
  return fetch(`${PEOPLE_END_POINT}id`).then(r => r.json());
};

export const searchPeaple = (keyword: string): Promise<any> => {
  return fetch(`${PEOPLE_END_POINT}?search=${keyword}`).then(r => r.json());
};

export const fetchPlanetById = (id: string): Promise<any> => {
  return fetch(`${PLANET_END_POINT}id`).then(r => r.json());
};

export const searchPlanet = (keyword: string): Promise<any> => {
  return fetch(`${PLANET_END_POINT}?search=${keyword}`).then(r => r.json());
};
