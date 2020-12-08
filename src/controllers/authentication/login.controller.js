const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const UserAccount = require("../../models/UserAccount");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config/config");

module.exports = async(req, res, next) => {
    logger.trace("Controller: authentication.login");

    try {
        let userId = req.body.uid.toString();
        let userAccount = await UserAccount.findOne({
            uid: userId,
        });

        let code = req.body.code.toString();

        bcrypt.compare(code, userAccount.hash, function(err, result) {
            if (err) {
                next(ServerError.internalError(err));
            }

            if (result == true) {
                let token = jwt.sign({ uid: userId, name: userAccount.name },
                    config.jwtSecret, {
                        expiresIn: "12h",
                    }
                );

                res.status(200).json({ token: token });
            } else {
                next(ServerError.unauthorized("Invalid login attempt"));
            }
        });
    } catch (err) {
        next(ServerError.badRequest(err));
    }
};