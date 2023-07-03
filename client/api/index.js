const express = require('express');

const app = express();
// const port = process.env.API_PORT;

const dotenv = require('dotenv');

dotenv.config()

app.get('/api/test', (req, res) => {
  res.json('hello world ' + Date.now());
});

app.listen(process.env.API_PORT, () => {
  console.log(`Server is listening on port ${ process.env.API_PORT}`);
});