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
                return next(ServerError.internalError(err));
            }

            if (result == true) {
                let token = jwt.sign({
                        id: userAccount._id,
                        name: userAccount.name,
                        isAdmin: userAccount.isAdmin,
                    },
                    config.jwtSecret, {
                        expiresIn: "6h",
                    }
                );

                return res.status(200).json({ token: token });
            } else {
                return next(ServerError.unauthorized("Invalid login attempt"));
            }
        });
    } catch (err) {
        return next(ServerError.badRequest(err));
    }
};