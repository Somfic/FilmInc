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
                next(ServerError.unauthorized(err));
            }

            if (payload) {
                let uid = payload.uid;
                let userAccount = await UserAccount.findOne({ uid: uid });
                if (!userAccount) {
                    next(ServerError.unauthorized("Account has been deleted"));
                }

                let name = userAccount.name;

                logger.trace(`Authorized user: ${name} (${uid})`);

                req.uid = payload.uid;
                next();
            } else {
                next(ServerError.unauthorized("Invalid token"));
            }
        });
    } catch (err) {
        next(ServerError.badRequest(err));
    }
};