const express = require('express');
const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  let { token } = req.query;
  let authUrl = process.env.AUTH_URL;
  let url = `${authUrl}/auth`;

  axios
    .post(`${authUrl}/auth`, {
      token,
    })
    .then((response) => {
      res.send({ token, name: response.data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: 'TOKEN IS WRONG' });
    });
});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON ${PORT}`);
});
