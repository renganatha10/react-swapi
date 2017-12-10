import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Logo from './../../Components/Logo/';
import Login from './../../Components/Login/';
import { connect } from 'react-redux';
import { authenticate } from './../../redux/user/actions';
import redirectToHome from './../../utils/redirectToHome';
import './landing.scss';

class Landing extends PureComponent {
  render() {
    return (
      <div className="landing-container">
        <div className="logo-section">
          <Logo />{' '}
        </div>
        <div className="input-section">
          <Login
            authenticate={this.props.authenticate}
            user={this.props.user}
          />
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  user: PropTypes.shape({
    errorMessage: PropTypes.string,
    isLoggedin: PropTypes.boolean,
    userName: PropTypes.string,
    isLoading: PropTypes.boolean
  }),
  authenticate: PropTypes.func
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authenticate: (username, password) =>
      dispatch(authenticate(username, password))
  };
};

const connectedLanding = connect(mapStateToProps, mapDispatchToProps)(Landing);
export default redirectToHome(connectedLanding);
