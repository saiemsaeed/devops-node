const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/users', (req, res) => {
  let users = ['Saiem', 'Maaz', 'Mooeed', 'Elif', 'Sara', 'Junaid'];
  console.log(`USERS SENT FROM PORT ${PORT}`);
  res.send({ port: PORT, users });
});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON ${PORT}`);
});
