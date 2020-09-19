const getUserData = (req, res) => {
  const {profile} = req.body;
  console.log(profile);

  res.json({status: 'got'});
};

module.exports = {getUserData};
