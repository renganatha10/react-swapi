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

class App extends PureComponent {
  store = createStore(rootReducer, enhancer);
  constructor(props) {
    super(props);
    this.state = {
      storePersisted: false
    };
  }

  componentWillMount() {
    persistStore(this.store, {}, () => {
      this.setState({ storePersisted: true });
    });
  }
  render() {
    return (
      <div className="app-wrapper">
        <Provider store={this.store}>
          <Router />
        </Provider>
      </div>
    );
  }
}

export default App;
