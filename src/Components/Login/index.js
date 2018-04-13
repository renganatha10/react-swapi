// @flow
import React, { PureComponent } from 'react';
import './login.scss';
import Spinner from './../Spinner';
const r2dr = require('./../../assests/r2d2.svg');
const dob = require('./../../assests/dob.svg');

type State = {
  userName: string,
  password: string,
};

type User = {|
  errorMessage: string,
  isLoggedin: boolean,
  userName: string,
  isLoading: boolean,
|};

type Props = {
  user: User,
  authenticate: (name: string, password: string) => void,
};

export default class Login extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  onChangeUserName = (e: SyntheticEvent<HTMLInputElement>) => {
    const inputElement: HTMLInputElement = e.currentTarget;
    this.setState({ userName: inputElement.value });
  };

  onChangePassword = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ password: e.currentTarget.value });
  };

  onSubmit = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.authenticate(this.state.userName, this.state.password);
  };

  render() {
    return (
      <form className="sw-login" onSubmit={this.onSubmit}>
        <div className="input-wrapper">
          <img src={r2dr} alt="logo" />
          <input
            id="username"
            onChange={this.onChangeUserName}
            type="text"
            value={this.state.userName}
            placeholder="Enter Name"
          />
        </div>
        <div className="input-wrapper">
          <img src={dob} alt="logo" />
          <input
            id="password"
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
