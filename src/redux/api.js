const PEOPLE_END_POINT = 'https://swapi.co/api/people/';
const PLANET_END_POINT = 'https://swapi.co/api/planets/';

export const fetchPeapleById = id => {
  return fetch(`${PEOPLE_END_POINT}id`).then(r => r.json());
};

export const searchPeaple = keyword => {
  return fetch(`${PEOPLE_END_POINT}?search=${keyword}`).then(r => r.json());
};

export const fetchPlanetById = id => {
  return fetch(`${PLANET_END_POINT}id`).then(r => r.json());
};

export const searchPlanet = keyword => {
  return fetch(`${PLANET_END_POINT}?search=${keyword}`).then(r => r.json());
};
