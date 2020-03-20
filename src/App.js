import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import Layout from './components/Layout';
import Content from './components/Content';

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
            <Route
              exact
              path={"/popular"}
              component={(props) => <Content category="popular" {...props} />}
            />
            <Route
              exact
              path={"/trend"}
              component={(props) => <Content category="now_playing" {...props} />}
            />
            <Route
              exact
              path={"/newest"}
              component={(props) => <Content category="latest" {...props} />}
            />
            <Route
              exact
              path={"/top-rated"}
              component={(props) => <Content category="top_rated" {...props} />}
            />
          </Layout>
        </Switch>
      </Router>
    );
  }
}
