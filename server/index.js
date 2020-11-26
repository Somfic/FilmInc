const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const config = require('./src/config/config.js');
const logger = require('./src/config/logger');
const database = require('./src/config/database');

// Setup parser
app.use(require('body-parser').json());

// Logging for all requests
app.all('*', (req, res, next) => {
	let requestInfo = {
		authorization: req.headers.authorization,
		query: req.query,
		body: req.body,
		params: req.params
	}

	logger.debug(`Incoming request: ${req.protocol + '://' + req.get('host') + req.originalUrl}`, requestInfo);
	next();
});

// Routes
app.use('/showings', require('./src/routes/showings'));

app.listen(port, () => {
	logger.info(`Server initiated on port ${port}`);
	logger.debug(`Mode: ${config.mode}`);
});

database.connect();