const logLevel = process.env.LOGLEVEL || 'debug';

module.exports = {
    logger: require('tracer').console({
        format: ['{{timestamp}} [{{title}}] {{file}}:{{line}} : {{message}}'],
        preprocess: function (data) {
            data.title = data.title.toUpperCase();
        },
        dateformat: 'isoUtcDateTime',
        level: logLevel
    })
}