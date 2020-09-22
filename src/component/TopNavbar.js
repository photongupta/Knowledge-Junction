import React from 'react';
import AddTitle from './AddTitle';
import Api from './api';

const Logout = function (props) {
  const logOut = async function () {
    await Api.logout();
    props.onLogout(false);
  };
  return <button onClick={logOut}>Logout</button>;
};

const TopNavbar = function (props) {
  return (
    <div className="top-nav">
      <h1>K J</h1>
      <div className="menu">
        <Logout onLogout={props.onLogout} />
        <AddTitle onTitle={props.onTitle} />
      </div>
    </div>
  );
};

export default TopNavbar;
