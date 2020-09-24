import React, {useContext} from 'react';
import Logout from './Logout';
import UserContext from './UserContext';

const Menubar = function (props) {
  const user = useContext(UserContext);

  return (
    <div className="header">
      <h1 className="logo">Knowledge junction</h1>
      <div className="menu">
        <a className="add" href="/newTitle">
          Add
        </a>
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
