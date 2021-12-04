const express = require('express');
var { json } = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

var jsonParser = json();

let users = [
  { token: '123XYZ', name: 'Saiem' },
  { token: '321XYZ', name: 'Maaz' },
  { token: '123ABC', name: 'Mooeed' },
  { token: '321ABC', name: 'Elif' },
  { token: 'ABC123', name: 'Sara' },
  { token: 'XYZ123', name: 'Junaid' },
];

app.get('/auth', (req, res) => {
  res.send(`You are authenticated on port ${PORT}`);
});

app.post('/auth', jsonParser, (req, res) => {
  let { token } = req.body;
  let user = users.find((u) => u.token === token);
  if (user) {
    res.status(200).send(user.name);
  } else {
    res.status(404).send('Invalid Token');
  }
});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON ${PORT}`);
});
