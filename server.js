const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('errorHandler');

const app = express();
// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(errorHandler());

// mount apiRouter
const apiRouter = require('./routes/index');
app.use('/api/', apiRouter);

// start app listening
const PORT = process.env.PORT || 4000;
app.listen(PORT);
console.log('Server is running!');

// exports
module.exports = app;
