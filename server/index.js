const express = require("express");
const app = express();

const config = require("./src/config/config.js");
const logger = require("./src/logging/logger");
const database = require("./src/config/database");
const path = require("path");

// Setup parser
app.use(require("body-parser").json());

// Setup logging middleware
app.use(require("./src/logging/loggerHandler"));

// Routes
app.use("/showings", require("./src/routes/showings"));

// Error handling
app.use(require("./src/error/errorHandler.js"));

// Serve static client
app.use(express.static(path.resolve(__dirname, "public/")));

// Handle SPA
app.get("*", (req, res) =>
	res.sendFile(path.resolve(__dirname, "public/index.html"))
);

app.listen(config.port, () => {
	logger.info(`Server initiated on port ${config.port}`);
	logger.debug(`Mode: ${config.mode}`);
	database.connect();
});
