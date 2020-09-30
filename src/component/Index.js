import React from 'react';

const Index = function (props) {
  return (
    <div>
      <div className="container">
        <img alt="logo" src="/images/logo.png" className="logo-img" />
        <a
          className="Oauth-link-container"
          href={`${process.env.REACT_APP_LOGIN}`}
        >
          <img
            src="/images/google.png"
            alt="google-icon"
            className="google icon"
          />
          <div className="Oauth-link">Log in with Google</div>
        </a>
      </div>
    </div>
  );
};
export default Index;
