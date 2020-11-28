const express = require("express");
const app = express();

const config = require("./src/config/config.js");
const logger = require("./src/logging/logger");
const database = require("./src/config/database");
const cors = require("cors");
const path = require("path");

// Setup middleware
app.use(require("body-parser").json());
app.use(cors());
app.use(require("./src/logging/loggerHandler"));

// Routes
app.use("/api/showings", require("./src/routes/showings"));

// Error handling
app.use(require("./src/error/errorHandler.js"));

// Serve static client
app.use(express.static(path.resolve(__dirname, "public/")));

// Send to client in case of invalid url
app.get("*", (req, res) => {
	logger.trace("Invalid, sending to index");
	res.sendFile(path.resolve(__dirname, "public/index.html"));
});

// Start database
database.connect();

// Start server
app.listen(config.port, () => {
	logger.info(`Server initiated on port ${config.port}`);
	logger.debug(`Mode: ${config.mode}`);
});
