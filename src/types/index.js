// @flow

export type Planet = {|
  climate: string,
  created: string,
  diameter: string,
  edited: string,
  films: string[],
  gravity: string,
  name: string,
  orbital_period: string,
  population: string,
  residents: string[],
  rotation_period: string,
  surface_water: string,
  terrain: string,
  url: string
|};

export type User = {
  +isLoggedin: boolean,
  +errorMessage: string,
  +userName: string,
  +isLoading: boolean
};

type Dictionary<K, T> = { [key: K]: T };

export type Planets = {
  +planetsSearchDictionary: Dictionary<string, Planet[]>,
  +planetsDictionary: Dictionary<string, Planet>,
  +isLoading: boolean,
  +currentKeyword: string,
  +isLoadingMore: boolean,
  +nextUrl: ?string,
  +currentPlanet: ?string
};
