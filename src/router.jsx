import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './../src/Pages/Landing/';
import Home from './../src/Pages/Home/';
import PlanetDetails from './../src/Pages/PlanetDetails/';
import Header from './../src/Components/Header/';

class AppRouter extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Header>
          <Switch>
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/home" component={Home} />
            <Route exact={true} path="/planet/:id" component={PlanetDetails} />
          </Switch>
        </Header>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
