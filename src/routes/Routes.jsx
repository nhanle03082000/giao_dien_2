import { createBrowserHistory } from "history";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Product from "../pages/Product";
const history = createBrowserHistory();

const Routes = () => {
  return (
    <Route history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" component={Product} />
      </Switch>
    </Route>
  );
};

export default Routes;
