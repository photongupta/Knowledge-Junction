import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import appApi from './api';
import Index from './Index';
import Home from './Home';

const KnowledgeJunction = function () {
  const [isLoggedIn, setLoginStatus] = useState(null);
  const [topics, updateTopics] = useState([]);

  const handlerTitle = function (title) {
    console.log(title);
  };

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
          {isLoggedIn ? (
            <Home topics={topics} onTitle={handlerTitle} />
          ) : (
            <Index />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default KnowledgeJunction;
