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
    window.setTimeout(this.props.onSearchPlanet(e.target.value), 1000);
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
            autoFocus
          />
        </div>
      </div>
    );
  }
}
