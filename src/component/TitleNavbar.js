import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Details from './Details';

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
        <Route path="/:id">
          <Details topics={props.topics} />
        </Route>
      </Switch>
    </Router>
  );
};

export default TitleNavbar;
