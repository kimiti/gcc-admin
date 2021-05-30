import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./bootstrap.min.css";

import firebase from "./firebase";

import Landing from "./components/layout/Landing";
import Navigation from "./components/layout/Navigation";
import Routes from "./components/layout/routing/Routes";

import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { setUser } from "./actions";

const store = createStore(rootReducer, composeWithDevTools());

const App = () => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  });

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
