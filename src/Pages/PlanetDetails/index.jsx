import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import CheckAuthentication from './../../utils/checkAuthenitication';
import './planetDetails.scss';

class PlanetDetails extends PureComponent {
  render() {
    return (
      <Fragment>
        <p className="planet-heading">Planet Details</p>
        <div className="planet-details">
          <div className="name-container">
            <div>
              <p>Name</p>
              <p>Rotation Period</p>
              <p>Orbital Period</p>
              <p>Diameter</p>
              <p>Climate</p>
              <p>Gravity</p>
              <p>Terrain</p>
              <p>Surface Water</p>
              <p>Population</p>
            </div>
          </div>
          <div className="details-container">
            <div>
              <p>{this.props.planet && this.props.planet.name}</p>
              <p>{this.props.planet && this.props.planet.rotation_period}</p>
              <p>{this.props.planet && this.props.planet.orbital_period}</p>
              <p>{this.props.planet && this.props.planet.diameter}</p>
              <p>{this.props.planet && this.props.planet.climate}</p>
              <p>{this.props.planet && this.props.planet.gravity}</p>
              <p>{this.props.planet && this.props.planet.terrain}</p>
              <p>{this.props.planet && this.props.planet.surface_water}</p>
              <p>{this.props.planet && this.props.planet.population}</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    planet: state.planet.planetsDictionary[props.match.params.id]
  };
};

const connectedProjectDetails = connect(mapStateToProps)(PlanetDetails);

export default CheckAuthentication(connectedProjectDetails);
