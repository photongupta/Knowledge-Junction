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

const getUser = () => sendGetReq('api/getUser').then(({user}) => user);

const getTopics = () => sendGetReq('api/topics').then((res) => res.topics);

const getContent = (id) =>
  sendPostReq('api/content', {id}).then(({content}) => {
    return content;
  });

const addTitle = (title) =>
  sendPostReq('api/addTitle', {title}).then(getTopics);

const logout = () => sendPostReq('api/logout');

const setContent = (id, content) =>
  sendPostReq('api/setContent', {id, content});

module.exports = {
  sendGetReq,
  sendPostReq,
  getUser,
  getTopics,
  getContent,
  addTitle,
  logout,
  setContent,
};
