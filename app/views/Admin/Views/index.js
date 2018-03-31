import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Views
import MainPage from 'views/Admin/MainPage';
import AddCoach from 'views/Admin/AddCoach';

const Views = (props) => {
  return (
    <Switch>
      <Route exact path ='/admin/add_coach' component={AddCoach} />
      <Route path ='/admin' component={MainPage} />
    </Switch>
  )
};

export default Views;
