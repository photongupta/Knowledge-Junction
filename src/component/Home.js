import React from 'react';
import TitleNavbar from './TitleNavbar';

const TopNavbar = function (props) {
  return (
    <div className="top-nav">
      <h1>K J</h1>
      <a href={`http://localhost:8080/logout`}>Log out</a>
    </div>
  );
};

const Home = function (props) {
  return (
    <div>
      <TopNavbar />
      <TitleNavbar topics={props.topics} />
    </div>
  );
};
export default Home;
