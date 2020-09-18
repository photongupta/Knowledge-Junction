const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  const githubUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=555909970408-67qftpqa4ms2mmf81eucrob6c6fn5otv.apps.googleusercontent.com&response_type=code&redirect_uri=http://localhost:8000/callback&scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly`;
  res.redirect(githubUrl);
});

app.get('/callback', (req, res) => {
  console.log(req.query.code);
  res.end();
});

app.listen(8000, () => console.log('listening'));
