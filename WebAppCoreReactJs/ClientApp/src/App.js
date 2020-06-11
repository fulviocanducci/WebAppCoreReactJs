import React, { Component } from "react";
import { Route } from "react-router";
import { Layout, Home, FetchData, Counter, Login, Logoff } from "./components";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/fetch-data" component={FetchData} />
        <Route path="/login" component={Login} />
        <Route path="/logoff" component={Logoff} />
      </Layout>
    );
  }
}
