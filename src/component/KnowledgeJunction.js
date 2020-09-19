import React, {useState} from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
const CLIENT_ID = '555909970408-67qftpqa4ms2mmf81eucrob6c6fn5otv';

const sendPostRequest = function (url, body) {
  return new Promise((resolve) => {
    console.log('going to send', body);
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((res) => res.status && resolve(res));
  });
};

const KnowledgeJunction = function (props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState('null');

  const login = async function (response) {
    console.log(response.profileObj);
    if (response.accessToken) {
      console.log(response.accessToken);
      await sendPostRequest('api/userData', {
        profile: response.profileObj,
      });
      setAccessToken(response.accessToken);
      setLoggedIn(true);
    }
  };

  const logout = function (response) {
    setAccessToken(null);
    setLoggedIn(false);
  };
  const handleLoginFailure = function (response) {
    console.log('failed login');
  };
  const handleLogoutFailure = function (response) {
    console.log('failed logout');
  };

  return (
    <div>
      {isLoggedIn ? (
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={logout}
          onFailure={handleLogoutFailure}
        ></GoogleLogout>
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          onSuccess={login}
          onFailure={handleLoginFailure}
          cookiePolicy={'single_host_origin'}
          responseType="token"
        />
      )}
      {accessToken ? (
        <h5>
          Your Access Token: <br />
          <br /> {accessToken}
        </h5>
      ) : (
        'null'
      )}
    </div>
  );
};

export default KnowledgeJunction;
