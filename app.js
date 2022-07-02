const express = require('express');
const http = require('http');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const indexRouter = require('./routes/index');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || '4000';
console.log(process.env.PORT);

app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use(indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.render('error', {
    message: '404 page',
  });
});

const server = http.createServer(app);

server.listen(port);

console.log(`server run on http://localhost:${port}`);
