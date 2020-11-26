const express = require("express");
const app = express();

const config = require("./src/config/config.js");
const logger = require("./src/logging/logger");
const database = require("./src/config/database");

// Setup parser
app.use(require("body-parser").json());

// Setup logging middleware
app.use(require("./src/logging/loggerHandler"));

// Routes
app.use("/showings", require("./src/routes/showings"));

// Error handling
app.use(require("./src/error/errorHandler.js"));

app.listen(config.port, () => {
	logger.info(`Server initiated on port ${config.port}`);
	logger.debug(`Mode: ${config.mode}`);
	database.connect();
});
