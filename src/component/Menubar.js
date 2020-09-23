import React, {useState, useEffect} from 'react';
import AddTitle from './AddTitle';
import Api from './api';
import Logout from './Logout';

const Menubar = function (props) {
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    Api.getUserImg().then(({imgUrl}) => {
      if (imgUrl) {
        setImgUrl(imgUrl);
      }
    });
  });

  return (
    <div className="top-nav">
      <h1>K J</h1>
      <div className="menu">
        <AddTitle onTitle={props.onTitle} />
        <img src={imgUrl} alt="avatar" className="avatar-nav" />
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
