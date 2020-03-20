import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import Layout from './components/Layout';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Router>
        <Switch>
          <Layout >
            {/* <Route
            exact
            path={"/popular"}
            component={}
          /> */}
          </Layout>
        </Switch>
      </Router>
    );
  }
}
