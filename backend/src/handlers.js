const {request} = require('./request');
const {getTokenOption, getUserInfoOption} = require('./option');

const getUserData = (req, res) => {
  const {code} = req.query;
  const {users, db} = req.app.locals;
  const tokenOptions = getTokenOption(code, req.app.locals);
  request(tokenOptions)
    .then(({access_token}) => {
      request(getUserInfoOption(access_token)).then((userInfo) => {
        if (users.every((user) => user.sub !== userInfo.sub)) {
          users.push(userInfo);
        }
        req.session.name = userInfo.name;
        req.session.picture = userInfo.picture;
        db.set('users', users).then(() =>
          res.redirect('http://localhost:3000/')
        );
      });
    })
    .catch((err) => console.log(err));
};

const getAppInfo = (req, res) => {
  const {CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, SCOPE} = req.app.locals;
  res.json({CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, SCOPE});
};

const isLoggedIn = (req, res) => {
  if (req.session.isNew) {
    return res.json({loggedIn: false});
  }
  res.json({loggedIn: true});
};

const logout = (req, res) => {
  req.session = null;
  res.json({loggedOut: true});
};

const attachDetails = (req, res, next) => {
  const db = req.app.locals.db;
  db.get('users')
    .then((users) => {
      req.app.locals.users = users || [];
    })
    .then(() =>
      db
        .get('topics')
        .then((topics) => {
          req.app.locals.topics = topics || [];
        })
        .then(next)
    );
};

const getTopics = (req, res) => {
  req.app.locals.db.get('topics').then((topics) => res.json({topics}));
};

const getContent = (req, res) => {
  const {id} = req.body;
  const topic = req.app.locals.topics.find((topic) => topic.id === +id);
  const content = topic ? topic.content : 'No content Found';
  res.json({content});
};

const addTitle = (req, res) => {
  const {title} = req.body;
  const {topics, db} = req.app.locals;
  topics.push({title, content: null});
  db.set('topics', topics).then(() => res.json({status: 'added'}));
};

const getUserName = (req, res) => {
  res.json({name: req.session.name});
};

module.exports = {
  getUserData,
  logout,
  isLoggedIn,
  getAppInfo,
  attachDetails,
  getTopics,
  getContent,
  addTitle,
  getUserName,
};
