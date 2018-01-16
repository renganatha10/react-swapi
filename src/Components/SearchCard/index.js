// @flow
import React, { PureComponent } from 'react';
import './searchcard.scss';

const earth = require('./../../assests/earth.svg');
const astronaut = require('./../../assests/astronaut.svg');

type Props = {
  planetName: string,
  population: number,
  onCardClick: number => void,
  planetId: number
};

export default class SearchCard extends PureComponent<Props, {}> {
  onCardClick = () => {
    this.props.onCardClick(this.props.planetId);
  };

  render() {
    return (
      <div onClick={this.onCardClick} className="search-card">
        <img src={earth} alt={'Earth'} />
        <div>
          <p> {this.props.planetName} </p>
          <div className="astronaut-images">
            {this.props.population && <img src={astronaut} alt={'astronaut'} />}
            {this.props.population > 10000 && (
              <img src={astronaut} alt={'astronaut'} />
            )}
            {this.props.population > 100000 && (
              <img src={astronaut} alt={'astronaut'} />
            )}
            {this.props.population > 10000000 && (
              <img src={astronaut} alt={'astronaut'} />
            )}
            {this.props.population > 100000000 && (
              <img src={astronaut} alt={'astronaut'} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
