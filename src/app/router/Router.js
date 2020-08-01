import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}