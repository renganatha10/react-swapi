import React, { PureComponent } from 'react';
import './login.scss';
import PropTypes from 'prop-types';
import Spinner from './../Spinner';
const r2dr = require('./../../assests/r2d2.svg');
const dob = require('./../../assests/dob.svg');

export default class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeUserName(e) {
    this.setState({ userName: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.authenticate(this.state.userName, this.state.password);
  }

  render() {
    return (
      <form className="sw-login" onSubmit={this.onSubmit}>
        <div className="input-wrapper">
          <img src={r2dr} alt="logo" />
          <input
            onChange={this.onChangeUserName}
            type="text"
            value={this.state.userName}
            placeholder="Enter Name"
          />
        </div>
        <div className="input-wrapper">
          <img src={dob} alt="logo" />
          <input
            onChange={this.onChangePassword}
            type="text"
            value={this.state.password}
            placeholder="Enter DOB"
          />
        </div>
        <button onSubmit={this.onSubmit}>
          Enter Starwars World{' '}
          {this.props.user.isLoading ? <Spinner small /> : null}{' '}
        </button>
        <span className="errorMsg">{this.props.user.errorMessage}</span>
      </form>
    );
  }
}

Login.propTypes = {
  user: PropTypes.shape({
    errorMessage: PropTypes.string,
    isLoggedin: PropTypes.boolean,
    userName: PropTypes.string,
    isLoading: PropTypes.boolean
  }),
  authenticate: PropTypes.func
};
