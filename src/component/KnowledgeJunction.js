import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import appApi from './api';
import Index from './Index';
import Home from './Home';

const KnowledgeJunction = function () {
  const [isLoggedIn, setLoginStatus] = useState(null);
  const [topics, setTopics] = useState([]);

  const handleTitle = function (title) {
    appApi.addTitle(title).then(setTopics);
  };

  useEffect(() => {
    appApi.getTopics().then(setTopics);
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
          {isLoggedIn ? (
            <Home topics={topics} onTitle={handleTitle} />
          ) : (
            <Index />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default KnowledgeJunction;
