import { createBrowserHistory } from "history";
import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { LOCAL_STORAGE_TOKEN_NAME } from "../contexts/constant";

import Home from "../pages/Home";
import Product from "../pages/Product";
const history = createBrowserHistory();

const Routes = () => {
  let token = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME));
  console.log("usersss in ở routers", token);
  return (
    <Route history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" component={token ? Product : Home} />

        {/* <Route exact path="/" render={() => <Home />} />
        <Route
          path="/product"
          render={() => {
            token ? <Product /> : <Home />;
          }}
        /> */}
      </Switch>
    </Route>
  );
};

export default Routes;
