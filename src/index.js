import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login_page from './Login_page';
import List_page from './List_page';

const routing = (
  <Router>
    <Switch>
      <Route path='/' exact>
        <Login_page />
      </Route>
      <Route path='/List' exact>
        <List_page />
      </Route>
    </Switch>    
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

