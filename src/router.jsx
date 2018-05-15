import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Landing from './../src/Pages/Landing/';
import Header from './../src/Components/Header/';
import Loader from './../src/Components/Spinner';

const LoadableHome = Loadable({
  loader: () => import('./../src/Pages/Home/'),
  loading: Loader,
});

const LoadablePlanetDetails = Loadable({
  loader: () => import('./../src/Pages/PlanetDetails/'),
  loading: Loader,
});

class AppRouter extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Header>
          <Switch>
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/home" component={LoadableHome} />
            <Route
              exact={true}
              path="/planet/:id"
              component={LoadablePlanetDetails}
            />
          </Switch>
        </Header>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
