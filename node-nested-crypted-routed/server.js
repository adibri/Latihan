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
const bodyParser = require('body-parser');
const http = require('http');
const PORT = process.env.PORT || '3303';
const favicon = require('serve-favicon');
const cors = require('cors');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const multer = require('multer');
const errorHandler = require('errorhandler');
const cookieParser = require('cookie-parser');

const app = express();
const corsOptions = {
  origin: 'http://localhost:3303',
};

app.use(cors(corsOptions));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ secret: 'jhosbush', resave: true, saveUninitialized: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(multer({ dest: './uploads' }).any());

app.get('/', (req, res) => {
  res.send(`<h3>LATIHAN API @${new Date().getFullYear()}</h3>`);
});

http.createServer(app).listen(PORT);
