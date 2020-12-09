const express = require("express");
const app = express();

const config = require("./src/config/config.js");
const logger = require("./src/logging/logger");
const database = require("./src/database/database");
const cors = require("cors");
const path = require("path");

// Setup body parser (json) middleware
app.use(require("body-parser").json());

// Setup CORS middleware
app.use(cors());

// Setup logging middleware
app.use(require("./src/logging/loggerHandler"));

// Routes
app.use("/api/watchable", require("./src/routes/watchable"));
app.use("/api/scheduled", require("./src/routes/scheduled"));
app.use("/api/auth", require("./src/routes/authentication"));
app.use("/api/user", require("./src/routes/useraccount"));

// Error handling
app.use(require("./src/error/errorHandler.js"));

if (config.mode == "production") {
    logger.debug("Production mode detected, hosting frontend");

    // Serve static client
    app.use(express.static(path.resolve(__dirname, "public/")));

    // Send to client in case of invalid url
    app.get(/.*/, (req, res) => {
        res.sendFile(path.resolve(__dirname, "public/index.html"));
    });

    // Setup Vue Router History fallback
    app.use(require("connect-history-api-fallback"));
} else {
    logger.debug(`Mode: ${config.mode}, skipping frontend hosting`);
}

// Start database
database.connect();

// Start server
app.listen(config.port, () => {
    logger.info(`Server initiated on port ${config.port}`);
});