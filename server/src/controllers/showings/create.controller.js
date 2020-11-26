const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const Showing = require("../../models/Showing");

module.exports = async (req, res, next) => {
    logger.trace('Controller: showings/create');

    let showing = new Showing({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    })

    try {
        let result = await showing.save();

        res.status(201).json(result);
    } catch(err) {
        next(ServerError.badRequest(err));
    }
};