import React, {useState} from 'react';
import TitleNavbar from './TitleNavbar';
import AddTitle from './AddTitle';

const TopNavbar = function (props) {
  return (
    <div className="top-nav">
      <h1>K J</h1>
      <a href={`http://localhost:8080/logout`}>Log out</a>
      <AddTitle onTitle={props.onTitle} />
    </div>
  );
};

const Home = function (props) {
  return (
    <div>
      <TopNavbar onTitle={props.onTitle} />
      <TitleNavbar topics={props.topics} />
    </div>
  );
};
export default Home;
