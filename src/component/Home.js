import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NewTitle from './NewTitle';
import Header from './Header';
import SearchInput from './SearchInput';
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
      <Header onLogout={props.onLogout} topics={props.topics} />
      <Switch>
        <Route exact path="/newTitle">
          <NewTitle onTitle={handleTitle} />
        </Route>
        <Route path="/">
          <SearchInput topics={topics} onTitle={handleTitle} />
        </Route>
      </Switch>
    </Router>
  );
};
export default Home;
