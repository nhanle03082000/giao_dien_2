import React from "react";

import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "../pages/Home";
import Product from "../pages/Product";
import LocationContextProvider from "../contexts/LocationContext";
import AuthContextProvider from "../contexts/AuthContext";
import AuthPopup from "../components/AuthPopup";
const history = createBrowserHistory();

const Routes = () => {
  return (
    <Route history={history}>
      <Switch>
        <AuthContextProvider>
          <LocationContextProvider>
            <Route path="/" exact component={Home} />
            <Route path="/product" component={Product} />
          </LocationContextProvider>
        </AuthContextProvider>
      </Switch>
    </Route>
  );
};

export default Routes;
