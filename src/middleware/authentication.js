const logger = require("../logging/logger");
const jwt = require("jsonwebtoken");
const ServerError = require("../error/ServerError");
const UserAccount = require("../models/UserAccount");
const config = require("../config/config");

module.exports = async(req, res, next) => {
    logger.trace("Middleware: authentication");

    try {
        let header = req.headers.authorization;

        if (!header) {
            next(ServerError.unauthorized("Authorization header missing"));
        }

        let token = header.substring(7, header.length);

        jwt.verify(token, config.jwtSecret, async(err, payload) => {
            if (err) {
                return next(ServerError.unauthorized(err));
            }

            if (payload) {
                let userAccount = await UserAccount.findOne({ _id: payload.id });
                if (!userAccount) {
                    return next(ServerError.unauthorized("Account has been deleted"));
                }

                logger.trace(
                    `Authenticated user: ${userAccount.name} (${userAccount.uid})`
                );

                req.user = userAccount;
                return next();
            } else {
                return next(ServerError.unauthorized("Invalid token"));
            }
        });
    } catch (err) {
        return next(ServerError.badRequest(err));
    }
};