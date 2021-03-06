// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import event from './../../utils/events';
import type { Location, History } from 'react-router-dom';
import './header.scss';
import { logout } from './../../redux/user/actions';
const Close = require('./../../assests/close.svg');

type Props = {
  dispatch: (() => {}) => void,
  children: React.Node,
  location: Location,
  history: History,
};

type State = {
  render: boolean,
};

class Header extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      render: false,
    };
  }

  componentWillMount() {
    event.on('pushroute', (routename: string): void => {
      this.props.history.push(routename);
    });

    event.on('logout', (): void => {
      this.props.history.replace('/');
    });
  }

  logout = () => {
    this.props.dispatch(logout());
  };

  componentWillUnmount() {
    event.removeAllListeners();
  }

  render() {
    console.log(this.props.location.pathname.includes('/planet'));

    return (
      <React.Fragment>
        <nav className="header">
          <div className="leftContainer">
            <h1 className="heading">React - Swapi</h1>
          </div>
          <div className="leftContainer">
            {this.props.location.pathname !== '/' && (
              <button title="Log Out" onClick={this.logout}>
                <span>Logout</span>
              </button>
            )}
            <a
              type="button"
              href="https://github.com/renganatha10/react-swapi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                className="github-logo"
              >
                <title>Github Link</title>
                <path
                  d="M16.6.46C7.6.46.33 7.76.33 16.76c0 7.17 
                  4.67 13.3 11.14 15.43.8.1 1.1-.4 1.1-.8v-2.8c-4.54.9-5.5-2.2-5.5-2.2-.74-1.9-1.8-2.4-1.8-2.4-1.48-1 .1-1 
                  .1-1 1.64.1 2.5 1.7 2.5 1.7 1.45 2.4 3.8 1.7 4.74 1.3.2-1.1.6-1.8 1.1-2.2-3.6-.4-7.4-1.8-7.4-8.1 0-1.8.7-3.28 
                  1.7-4.4-.1-.4-.7-2.1.2-4.3 0 0 1.4-.48 4.5 1.63 1.3-.36 2.7-.54 4.1-.55 1.4 0 2.8.2 4.1.57 3.1-2.1 4.48-1.7 
                  4.48-1.7.9 2.24.33 3.9.17 4.3 1 1.2 1.6 2.64 1.6 4.44 0 6.23-3.8 7.6-7.43 8 .6.5 1.1 1.5 1.1 3.04v4.47c0 
                  .43.27.94 1.1.8 6.45-2.1 11.1-8.2 11.1-15.4 0-9-7.3-16.3-16.3-16.3"
                  fill="#161514"
                />
              </svg>
            </a>
          </div>{' '}
        </nav>{' '}
        {this.props.children}
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default withRouter(connect(mapDispatchToProps)(Header));
