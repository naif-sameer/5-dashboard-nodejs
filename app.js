const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const indexRouter = require('./routes/index');

const port = process.env.PORT || '3000';

app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

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
