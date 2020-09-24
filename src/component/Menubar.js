import React, {useContext} from 'react';
import AddTitle from './AddTitle';
import Logout from './Logout';
import UserContext from './UserContext';

const Menubar = function (props) {
  const user = useContext(UserContext);

  return (
    <div className="top-nav">
      <h1 className="logo">Knowledge junction</h1>
      <div className="menu">
        <AddTitle onTitle={props.onTitle} />
        <img src={user.picture} alt="avatar" className="avatar-nav" />
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
