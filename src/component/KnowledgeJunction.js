import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import appApi from './api';
import Index from './Index';
import Home from './Home';

const KnowledgeJunction = function () {
  const [isLoggedIn, setLoginStatus] = useState(false);
  const [topics, updateTopics] = useState([]);

  useEffect(() => {
    appApi.getTopics().then(({topics}) => {
      updateTopics(topics);
    });
  }, []);

  useEffect(() => {
    appApi.isLoggedIn().then(({loggedIn}) => {
      setLoginStatus(loggedIn);
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/">
          {isLoggedIn ? <Home topics={topics} /> : <Index />}
        </Route>
      </Switch>
    </Router>
  );
};

export default KnowledgeJunction;
