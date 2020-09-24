import React from 'react';
import {NavLink} from 'react-router-dom';

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
  return <div className="navBar">{titles}</div>;
};

export default TitleNavbar;
