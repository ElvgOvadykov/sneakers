/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "containers/HomePage/Loadable";
import NotFoundPage from "containers/NotFoundPage/Loadable";
import Header from "@components/Header/Loadable";
import Cart from "@containers/Cart/Loadable";

import GlobalStyle from "../../global-styles";
import "./styles.scss";

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Cart />
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </React.Fragment>
  );
}
