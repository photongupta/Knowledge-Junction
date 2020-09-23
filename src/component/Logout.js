import React from 'react';
import Api from './api';

const Logout = function (props) {
  const logOut = function () {
    Api.logout().then(() => {
      props.onLogout();
    });
  };

  return <button onClick={logOut}>Logout</button>;
};

export default Logout;
