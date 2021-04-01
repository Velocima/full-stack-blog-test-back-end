const express = require('express');

const apiRouter = express.Router();
module.exports = apiRouter;

apiRouter.get('/', (req, res, next) => {
	res.send('api GET endpoint.');
});

const blogRouter = require('./blogs');
apiRouter.use('/blogs', blogRouter);
