import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import History from 'services/history';

import AdminLayout from 'views/Admin/Layout';
import DefaultLayout from 'views/Default/Layout';

class App extends Component {
  render() {
    return (
      <Router history={History}>
        <Switch>
          <Route path="/admin" component={AdminLayout} />
          <Route path="/" component={DefaultLayout} exact />
        </Switch>
      </Router>
    )
  }
}

export default App;
