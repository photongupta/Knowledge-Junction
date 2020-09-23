import React from 'react';
import Api from './api';

const Logout = function (props) {
  const logOut = function () {
    Api.logout().then(() => {
      props.onLogout();
    });
  };

  return (
    <div className="logout-link" onClick={logOut}>
      Logout
    </div>
  );
};

export default Logout;
