import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Api from './api';
import Index from './Index';
import Home from './Home';

const KnowledgeJunction = function () {
  const [isLoggedIn, setLoginStatus] = useState(null);

  const updateLoginStatus = () => Api.isLoggedIn().then(setLoginStatus);

  useEffect(() => {
    updateLoginStatus();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/">
          {isLoggedIn ? <Home onLogout={updateLoginStatus} /> : <Index />}
        </Route>
      </Switch>
    </Router>
  );
};

export default KnowledgeJunction;
