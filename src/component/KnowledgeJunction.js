import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import appApi from './api';

const Index = function (props) {
  const CLIENT_ID =
    '555909970408-67qftpqa4ms2mmf81eucrob6c6fn5otv.apps.googleusercontent.com';
  const REDIRECT_URI = 'http://localhost:8080/callback';
  const SCOPE = 'https%3A//www.googleapis.com/auth/userinfo.profile';
  const query = `client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=code`;
  const googleOauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?${query}`;
  return (
    <div>
      <h1>Knowledge Junction</h1>
      <a href={googleOauthUrl}>Log in with Google</a>
    </div>
  );
};

const Home = function (props) {
  return (
    <div>
      <p>click on the link to read</p>
      <a href={`http://localhost:8080/logout`}>Log out</a>
    </div>
  );
};

const KnowledgeJunction = function () {
  const [isLoggedIn, setLoginStatus] = useState(false);

  useEffect(() => {
    appApi.isLoggedIn().then(({loggedIn}) => {
      setLoginStatus(loggedIn);
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Home /> : <Index />}
        </Route>
      </Switch>
    </Router>
  );
};

export default KnowledgeJunction;
