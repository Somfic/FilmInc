const { Server } = require("mongodb");

module.exports = class ServerError {
	constructor(code, message) {
		this.code = code;
		this.message = message;
	}

	static badRequest(message) {
		return new ServerError(400, message);
	}

	static unauthorized(message) {
		return new ServerError(401, message);
	}

	static notFound(message) {
		return new ServerError(404, message);
	}

	static internalError(message) {
		return new ServerError(500, message);
	}

	static notImplemented(message) {
		return new ServerError(501, message);
	}
};
