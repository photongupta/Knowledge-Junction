const sendGetReq = function (url) {
  return fetch(url).then((res) => res.json());
};

const sendPostReq = function (url, body) {
  return fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body),
  });
};

const isLoggedIn = () => sendGetReq('api/isLoggedIn');

const getOauthUrl = function () {
  return sendGetReq('api/appInfo').then((appInfo) => {
    const {CLIENT_ID, REDIRECT_URI, SCOPE} = appInfo;
    const query = `client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=code`;
    return `https://accounts.google.com/o/oauth2/v2/auth?${query}`;
  });
};

module.exports = {sendGetReq, sendPostReq, isLoggedIn, getOauthUrl};
