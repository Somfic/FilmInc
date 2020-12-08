require("dotenv/config");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    databaseUrl: process.env.DB_CONNECTION,
    logLevel: process.env.LOGLEVEL || "debug",
    port: process.env.PORT || 3000,
    saltRounds: 10,
    jwtSecret: process.env.JwtSecret,
};