const logger = require("../../config/logger");
const Showing = require("../../models/Showing");

module.exports = (req, res, next) => {
    logger.trace('Controller: showings/create');

    let showing = new Showing({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    })

    showing.save().then(data => {
        res.json(data);
    }).catch(err => {
        res.status(301).json(err);
    })
};