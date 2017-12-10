import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const CheckAuthentication = (MyComponent, isLoggedIn) => {
  const mapStateToProps = ({ user }) => {
    return {
      isLoggedIn: user.isLoggedin
    };
  };

  class IsAutheticated extends PureComponent {
    render() {
      if (this.props.isLoggedIn) {
        return <MyComponent />;
      }
      return <Redirect to="/" />;
    }
  }
  return connect(mapStateToProps)(IsAutheticated);
};

export default CheckAuthentication;
