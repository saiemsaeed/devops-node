const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/auth', (req, res) => {
  res.send(`You are authenticated on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON ${PORT}`);
});
