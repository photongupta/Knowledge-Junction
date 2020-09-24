import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Details from './Details';
import NewTitle from './NewTitle';

const TitleNavbar = function (props) {
  const titles = props.topics.map(({title, id}, index) => (
    <NavLink
      activeClassName="current"
      className="title"
      key={index}
      to={`/${id}`}
    >
      {title}
    </NavLink>
  ));
  return (
    <Router>
      <div className="navBar">{titles}</div>
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

export default TitleNavbar;
