const yup = require("yup");
const ServerError = require("../error/ServerError");

module.exports = (schema) => async (req, res, next) => {
	try {
		let validBody = await schema.validate(req.body);
		req.body = validBody;
		next();
	} catch (err) {
		next(ServerError.badRequest(err));
	}
};
