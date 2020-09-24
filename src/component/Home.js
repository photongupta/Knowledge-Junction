import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Details from './Details';
import NewTitle from './NewTitle';
import Menubar from './Menubar';
import TitleNavbar from './TitleNavbar';
import Api from './api';

const Home = function (props) {
  const [topics, setTopics] = useState([]);

  const handleTitle = function (title) {
    Api.addTitle(title).then(setTopics);
  };

  useEffect(() => {
    Api.getTopics().then(setTopics);
  }, []);

  return (
    <Router>
      <Menubar onLogout={props.onLogout} />
      <TitleNavbar topics={topics} onTitle={handleTitle} />
      <Switch>
        <Route exact path="/newTitle">
          <NewTitle onTitle={props.onTitle} />
        </Route>
        <Route exact path="/:id">
          <Details topics={props.topics} />
        </Route>
        <Route exact path="/">
          <Details topics={props.topics} />
        </Route>
      </Switch>
    </Router>
  );
};
export default Home;
