const sendGetReq = function (url) {
  return fetch(url).then((res) => res.json());
};

const sendPostReq = function (url, body) {
  return fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body),
  }).then((response) => response.json());
};

const isLoggedIn = () => sendGetReq('api/isLoggedIn');

const getTopics = () => sendGetReq('api/topics').then((res) => res.topics);

const getContent = (id) => sendPostReq('api/content', {id});

const addTitle = (title) =>
  sendPostReq('api/addTitle', {title}).then(getTopics);

const logout = () => sendPostReq('api/logout');

const getUserName = () => sendGetReq('api/getUserName');

module.exports = {
  sendGetReq,
  sendPostReq,
  isLoggedIn,
  getTopics,
  getContent,
  addTitle,
  logout,
  getUserName,
};
