const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const routeHandler = require('../app/routes');

app.use(cors());
//middleware for logging
app.use(morgan('dev'));
// parsing middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
//middleware that all requests are json
app.use(express.json());

//middleware for CORS policy
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-type, Accept, Authorization'
  );
  //condison
  if (req.method === 'OPTIONS') {
    req.header('Access-Control-Allow-Methods', 'POST, PUT, GET, PATCH, DELETE');
  }
  next();
});

app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Server is running', method: req.method });
});

app.use('/', routeHandler);
// app.use('/authors', authorRoutes);
// app.use('/books', bookRoutes);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
      method: req.method,
    },
  });
});

module.exports = app;
