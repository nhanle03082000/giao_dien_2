import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Product from "../pages/Product";
import ProductContextProvider from "../contexts/ProductContext";
const Routes = () => {
  return (
    <ProductContextProvider>
      <Switch>
        <ProductContextProvider>
          <Route path="/" exact component={Home} />
          <Route path="/product/:slug" component={Product} />
        </ProductContextProvider>
      </Switch>
    </ProductContextProvider>
  );
};

export default Routes;
