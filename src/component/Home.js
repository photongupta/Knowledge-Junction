import React, {useState, useEffect} from 'react';
import TitleNavbar from './TitleNavbar';
import Api from './api';
import TopNavbar from './TopNavbar';

const Home = function (props) {
  const [topics, setTopics] = useState([]);

  const handleTitle = function (title) {
    Api.addTitle(title).then(setTopics);
  };

  useEffect(() => {
    Api.getTopics().then(setTopics);
  }, []);

  return (
    <div>
      <TopNavbar onTitle={handleTitle} onLogout={props.onLogout} />
      <TitleNavbar topics={topics} />
    </div>
  );
};
export default Home;
