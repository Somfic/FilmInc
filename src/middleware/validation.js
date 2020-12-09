const yup = require("yup");
const ServerError = require("../error/ServerError");

module.exports = (schema) => async(req, res, next) => {
    logger.trace("Middleware: validation");

    try {
        let validBody = await schema.validate(req.body);
        req.body = validBody;
        return next();
    } catch (err) {
        return next(ServerError.badRequest(err));
    }
};