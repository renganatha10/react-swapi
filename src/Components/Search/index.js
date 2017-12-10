import React, { PureComponent } from 'react';
import './search.scss';

const planet = require('./../../assests/planet.svg');
const search = require('./../../assests/search.svg');

export default class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(e) {
    this.props.onSearchPlanet(e.target.value);
  }

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
          />
        </div>
      </div>
    );
  }
}
