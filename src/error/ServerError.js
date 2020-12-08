module.exports = class ServerError {
    constructor(code, error) {
        this.code = code;
        this.error = error;
    }

    static badRequest(error) {
        return new ServerError(400, error);
    }

    static unauthorized(error) {
        return new ServerError(401, error);
    }

    static notFound(error) {
        return new ServerError(404, error);
    }

    static internalError(error) {
        return new ServerError(500, error);
    }

    static notImplemented(error) {
        return new ServerError(501, error);
    }
};