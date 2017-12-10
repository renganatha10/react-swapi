import React, { PureComponent } from 'react';
import Search from './../../Components/Search/';
import SearchList from './../../Components/SearchList/';
import { connect } from 'react-redux';
import { searchPlanets } from './../../redux/planets/actions';
import { withRouter } from 'react-router-dom';
import CheckAuthentication from './../../utils/checkAuthenitication';
import './home.scss';

class Landing extends PureComponent {
  constructor(props) {
    super(props);
    this.onCardClick = this.onCardClick.bind(this);
  }

  onCardClick(id) {
    this.props.history.push(`/planet/${id}`);
  }

  render() {
    return (
      <div className="home-container">
        <div className="search-section">
          <Search onSearchPlanet={this.props.searchPlanet} />{' '}
        </div>
        <div className="search-list-section">
          <SearchList
            onCardClick={this.onCardClick}
            isPlanetLoading={this.props.isPlanetLoading}
            planetList={this.props.planetList}
          />{' '}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    planetList: state.planet.currentPlanetList,
    isPlanetLoading: state.planet.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchPlanet: keyword => dispatch(searchPlanets(keyword))
  };
};

const connectedLanding = connect(mapStateToProps, mapDispatchToProps)(
  withRouter(Landing)
);

export default CheckAuthentication(connectedLanding);
