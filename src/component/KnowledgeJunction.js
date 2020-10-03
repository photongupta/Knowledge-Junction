import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Api from '../requestApi';
import Index from './Index';
import Home from './Home';
import UserContext from './context/UserContext';

const KnowledgeJunction = function () {
  const [user, setUser] = useState(null);

  const updateLoginStatus = () => Api.getUser().then(setUser);

  useEffect(() => {
    updateLoginStatus();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={user}>
        <Switch>
          <Route path="/">
            {user ? <Home onLogout={updateLoginStatus} /> : <Index />}
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

export default KnowledgeJunction;
