import React, {useState} from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
const CLIENT_ID = '555909970408-67qftpqa4ms2mmf81eucrob6c6fn5otv';

const sendPostRequest = function (url, body) {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body),
  };
  return fetch(url, options).then((response) => response.json());
};

const KnowledgeJunction = function (props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState('null');

  const login = async function (response) {
    console.log(response.profileObj);
    if (response.accessToken) {
      await sendPostRequest('api/userData', {profile: response.profileObj});
      setAccessToken(response.accessToken);
      setLoggedIn(true);
    }
  };

  const logout = function () {
    setAccessToken(null);
    setLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout>
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          onSuccess={login}
          cookiePolicy={'single_host_origin'}
          responseType="token"
        />
      )}
      {accessToken ? <h5>Your Access Token: {accessToken}</h5> : 'null'}
    </div>
  );
};

export default KnowledgeJunction;
