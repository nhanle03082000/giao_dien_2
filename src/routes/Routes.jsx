import React from "react";

import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "../pages/Home";
import Product from "../pages/Product";
import ProductContextProvider from "../contexts/ProductContext";
const history = createBrowserHistory();

const Routes = () => {
  return (
    <ProductContextProvider>
      <Route history={history}>
        <Switch>
          <ProductContextProvider>
            <Route path="/" exact component={Home} />
            <Route path="/product/" component={Product} />
          </ProductContextProvider>
        </Switch>
      </Route>
    </ProductContextProvider>
  );
};

export default Routes;
