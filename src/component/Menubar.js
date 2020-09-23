import React, {useState, useEffect} from 'react';
import AddTitle from './AddTitle';
import Api from './api';
import Logout from './Logout';

const Menubar = function (props) {
  const [name, setName] = useState('John Lui');

  useEffect(() => {
    Api.getUserName().then(({name}) => {
      if (name) {
        setName(name);
      }
    });
  });

  return (
    <div className="top-nav">
      <h1>K J</h1>
      <div className="menu">
        <span>
          {name
            .split(' ')
            .map((e) => e[0])
            .join('')}
        </span>
        <Logout onLogout={props.onLogout} />
        <AddTitle onTitle={props.onTitle} />
      </div>
    </div>
  );
};

export default Menubar;
