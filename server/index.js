const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const config = require('./src/config/config.js');
const logger = config.logger;
//const database = require('./src/services/database');

const bodyParser = require('body-parser');

// Setup parser
app.use(bodyParser.json());

// Logging for all requests
app.all('*', (req, res, next) => {
	logger.info('Incoming request');
	logger.debug(`Url: ${req.url}`);
	logger.debug(`Method: ${req.method}`);
	if (isPopulated(req.headers.authorization)) {
		logger.debug(`Auth: ${req.headers.authorization}`);
	}
	if (isPopulated(req.query)) {
		logger.debug(`Query: ${JSON.stringify(req.query)}`);
	}
	if (isPopulated(req.body)) {
		logger.debug(`Body: ${JSON.stringify(req.body)}`);
	}
	if (isPopulated(req.params)) {
		logger.debug(`Params: ${JSON.stringify(req.params)}`);
	}
	next();
});

app.get('/', (req, res) => {
    res.send('hi');
});

app.listen(port, () => {
	logger.info(`Server initiated on port ${port}`);
});

function isPopulated(object) {
    return object != null && Object.keys(object).length > 0;
}