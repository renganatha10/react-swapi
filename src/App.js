// @flow

import React, { PureComponent } from 'react';
import './App.scss';
import Router from './router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../src/redux/';
import { persistStore, autoRehydrate } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancer = composeWithDevTools({ name: 'React-Swapi' })(
  applyMiddleware(thunk),
  autoRehydrate()
);

type Props = {};
type State = {
  storePersisted: boolean
};

class App extends PureComponent<Props, State> {
  store = createStore(rootReducer, enhancer);
  constructor(props: Props) {
    super(props);
    this.state = {
      storePersisted: false
    };
  }

  componentWillMount() {
    persistStore(
      this.store,
      {
        // blacklist: ['planet']
      },
      () => {
        this.setState({ storePersisted: true });
      }
    );
  }
  render() {
    return (
      <div className="app-wrapper">
        {this.state.storePersisted && (
          <Provider store={this.store}>
            <Router />
          </Provider>
        )}
      </div>
    );
  }
}

export default App;
