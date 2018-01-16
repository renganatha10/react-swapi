// @flow

import React, { PureComponent } from 'react';
import './search.scss';

const planet = require('./../../assests/planet.svg');
const search = require('./../../assests/search.svg');

type Props = {
  onSearchPlanet: string => void
};

export default class Search extends PureComponent<Props, {}> {
  onSearch = (e: SyntheticEvent<HTMLButtonElement>) => {
    window.setTimeout(this.props.onSearchPlanet(e.currentTarget.value), 1000);
  };

  render() {
    return (
      <div className="search-wrapper">
        <img src={planet} alt="planet" />
        <p> Search For Planets in Starwars World </p>
        <div className="input-wrapper">
          <img src={search} alt="logo" />
          <input
            onChange={this.onSearch}
            type="text"
            placeholder="Find Planet"
            autoFocus
          />
        </div>
      </div>
    );
  }
}
