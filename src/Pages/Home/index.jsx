import React, { PureComponent } from 'react';
import Search from './../../Components/Search/';
import SearchList from './../../Components/SearchList/';
import { connect } from 'react-redux';
import { searchPlanets, loadMorePlanet } from './../../redux/planets/actions';
import { withRouter } from 'react-router-dom';
import CheckAuthentication from './../../utils/checkAuthenitication';
import './home.scss';
import PropTypes from 'prop-types';

class Landing extends PureComponent {
  constructor(props) {
    super(props);
    this.onCardClick = this.onCardClick.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  onScroll(e) {
    const { scrollHeight, scrollTop } = e.target;
    const threshold = Math.abs(scrollHeight - window.innerHeight);

    if (scrollTop >= threshold) {
      if (this.props.nextUrl) {
        this.props.loadMorePlanets(this.props.nextUrl, this.props.keyword);
      }
    }
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
        <div onScroll={this.onScroll} className="search-list-section">
          <SearchList
            keyword={this.props.keyword}
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
    planetList: state.planet.planetsSearchDictionary,
    keyword: state.planet.currentKeyword,
    isPlanetLoading: state.planet.isLoading,
    isLoadingMore: state.planet.isLoadingMore,
    nextUrl: state.planet.nextUrl
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchPlanet: keyword => dispatch(searchPlanets(keyword)),
    loadMorePlanets: (nextUrl, keyword) =>
      dispatch(loadMorePlanet(nextUrl, keyword))
  };
};

const connectedLanding = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Landing)
);

Landing.propTypes = {
  planetList: PropTypes.object,
  keyword: PropTypes.string,
  isPlanetLoading: PropTypes.bool,
  isLoadingMore: PropTypes.bool,
  nextUrl: PropTypes.string,
  searchPlanet: PropTypes.func,
  loadMorePlanets: PropTypes.func
};

export default CheckAuthentication(connectedLanding);
