import React from "react";

import { Router, Redirect, Route, Switch } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
// private public routes for prevent internal page from unauthenticated user
import { PrivateRoute, PublicRoute } from './router'
import * as RouteConfig from "./routeConfig.js"; //configure all path in this file
import ErrorBoundary from "./ErrorBoudary";
    
    import {createStore ,applyMiddleware ,compose} from 'redux'
    import {Provider} from 'react-redux'
    import reducer from '../Redux/Reducer/reducer'
    import thunk from 'redux-thunk' //applyMiddleware pass npm install redux-thunk 

    // import Sidebar from "../Layout/Sidebar";

    // import { Login } from "../Component/Login";

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //compose pass dev tools extension

    const store=createStore(reducer,composeEnhancers(applyMiddleware(thunk)))


export default function Main() {
  const { privateRoutes, publicRoutes } = RouteConfig;
  // scroll top on routes change
  const history = createHistory();
  history.listen(_ => {
    window.scrollTo(0, 0);
  });

  return (
    <Provider store={store}>
        <Router history={history}>
          <ErrorBoundary>
            {/* A <Switch> looks through its children <Route>s and
             renders the first one that matches the current URL. */}
            <Switch>
              {privateRoutes.map(privateRouteProps => (
                <PrivateRoute {...privateRouteProps} />
              ))}
              {publicRoutes.map(publicRouteProps => (
                <PublicRoute {...publicRouteProps} />
              ))}
              <Route render={() => <Redirect to={{ pathname: "/" }} />} />
            </Switch>
          </ErrorBoundary>
        </Router>
      </Provider>
  );
}
