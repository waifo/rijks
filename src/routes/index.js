import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { ErrorBoundary } from "../components";

//Lazy loading components

const Home = lazy(() => import("../pages/Home"));
const Details = lazy(() => import("../pages/Home"));

function Routes() {
  return (
    <ErrorBoundary>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Details} />
      </Switch>
    </ErrorBoundary>
  );
}

export default Routes;
