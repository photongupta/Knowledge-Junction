import React, {useState, useEffect} from 'react';
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import ContentContainer from './content/ContentContainer';

const TitleNavbar = function (props) {
  const [defaultTitle, setDefaultTitle] = useState(1);

  useEffect(() => {
    if (props.topics.length) {
      setDefaultTitle(props.topics[0].id);
    }
  }, [props.topics]);

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
      <Route exact path="/">
        <Redirect to={`/${defaultTitle}`} />
      </Route>
      <Route exact path="/:id">
        <ContentContainer />
      </Route>
    </Router>
  );
};

export default TitleNavbar;
