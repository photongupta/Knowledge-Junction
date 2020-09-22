import React from 'react';
import Api from './api';

const Logout = function (props) {
  const logOut = async function () {
    await Api.logout();
    props.onLogout(false);
  };
  return <button onClick={logOut}>Logout</button>;
};

export default Logout;
