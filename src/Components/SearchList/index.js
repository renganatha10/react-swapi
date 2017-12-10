import React, { PureComponent } from 'react';
import SearchCard from './../SearchCard/';
import Spinner from './../Spinner/';
import './searchlist.scss';

export default class SearchList extends PureComponent {
  render() {
    const { isPlanetLoading, planetList } = this.props;
    if (isPlanetLoading)
      return (
        <div className="searchlist-container">
          <Spinner small={false} />
        </div>
      );
    if (planetList.length === 0)
      return (
        <div className="searchlist-container">
          <p>No Planets Found Please Search Again</p>
        </div>
      );
    return (
      <div className="search-list-box">
        {planetList.map((item, index) => (
          <SearchCard
            onCardClick={this.props.onCardClick}
            planetId={item.url.split('/')[5]}
            key={`${item.name}${index}`}
            planetName={item.name}
            population={item.population}
          />
        ))}
      </div>
    );
  }
}
