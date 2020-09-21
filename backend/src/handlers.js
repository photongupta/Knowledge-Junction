const {request} = require('./request');
const {getTokenOption, getUserInfoOption} = require('./option');

const getUserData = (req, res) => {
  const {code} = req.query;
  const tokenOptions = getTokenOption(code, req.app.locals);
  request(tokenOptions).then(({access_token}) => {
    request(getUserInfoOption(access_token)).then((userInfo) => {
      req.session.name = userInfo.name;
      req.session.picture = userInfo.picture;
      res.redirect('http://localhost:3000/');
    });
  });
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
  res.redirect('http://localhost:3000/');
};

module.exports = {getUserData, logout, isLoggedIn, getAppInfo};
