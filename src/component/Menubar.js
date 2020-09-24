import React, {useContext} from 'react';
import Logout from './Logout';
import {NavLink} from 'react-router-dom';
import UserContext from './UserContext';

const Menubar = function (props) {
  const user = useContext(UserContext);

  return (
    <div className="header">
      <img src="/images/logo-icon.png" alt="logo" className="logo-icon" />
      <div className="menu">
        <NavLink to="/newTitle">
          <img src="/images/plus.png" className="add icon" alt="add" />
        </NavLink>
        <NavLink to="/search">
          <img src="/images/search.png" className="add icon" alt="add" />
        </NavLink>
        <img src={user.picture} alt="avatar" className="avatar" />
        <div className="dropdown-links">
          <div className="links">
            <Logout onLogout={props.onLogout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
