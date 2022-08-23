if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  });
} else {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  });
}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const { json } = require('body-parser');
const PORT = process.env.PORT || '3303';

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Wellcome To LATIHAN API - ' + json.toString());
});

http.createServer(app).listen(PORT);
