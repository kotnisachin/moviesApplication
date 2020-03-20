import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import Layout from './components/Layout';
import Content from './components/Content';

export default function App() {
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
            component={(props) => <Content category="vote_average" {...props} />}
          />
          <Route
            exact
            path={"/newest"}
            component={(props) => <Content category="release_date" {...props} />}
          />
          <Route
            exact
            path={"/top-rated"}
            component={(props) => <Content category="vote_count" {...props} />}
          />
          <Route
            exact
            path={"/search"}
            component={(props) => <Content category="search" {...props} />}
          />
        </Layout>
      </Switch>
    </Router>
  );
}

