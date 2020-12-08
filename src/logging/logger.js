const chalk = require("chalk");
const prettyJson = require("prettyjson");

const theme = {
    critical: chalk.magentaBright,
    error: chalk.redBright,
    warning: chalk.yellow,
    info: chalk.blueBright,
    debug: chalk.gray,
    trace: chalk.grey,
};

module.exports = {
    critical(message, object = null) {
        log("critical", message, object);
    },

    error(message, object = null) {
        log("error", message, object);
    },

    warning(message, object = null) {
        log("warning", message, object);
    },

    info(message, object = null) {
        log("info", message, object);
    },

    debug(message, object = null) {
        log("debug", message, object);
    },

    trace(message, object = null) {
        log("trace", message, object);
    },
};

function log(logLevel, message, object = null) {
    let thisTime = new Date();
    let timestamp = `${thisTime.toLocaleDateString()} ${thisTime.toLocaleTimeString()}`;
    let content = "";
    content += theme.debug(timestamp);
    content += " ";
    content += colorize(localizeTag(logLevel), logLevel);
    content += " ";
    content += buildMessage(logLevel, message);

    if (object != null) {
        prettyJson
            .render(object)
            .split("\n")
            .forEach(
                (line) => (content += `\r\n                           ${line}`)
            );
    }

    writeToConsole(logLevel, content);
}

function buildMessage(logLevel, content) {
    switch (logLevel) {
        case "critical":
        case "error":
        case "warning":
            return chalk.inverse(colorize(` ${content} `, logLevel));

        default:
            return ` ${colorize(content, logLevel)} `;
    }
}

function localizeTag(logLevel) {
    switch (logLevel) {
        case "critical":
            return " FAIL";

        case "error":
            return "ERROR";

        case "warning":
            return " WARN";

        case "info":
            return " INFO";

        case "debug":
            return "DEBUG";

        case "trace":
            return "TRACE";
    }
}

function colorize(content, logLevel) {
    switch (logLevel) {
        case "critical":
            return theme.critical(content);
        case "error":
            return theme.error(content);

        case "warning":
            return theme.warning(content);

        case "info":
            return theme.info(content);

        case "debug":
            return theme.debug(content);

        case "trace":
            return theme.debug(content);

        default:
            return content;
    }
}

function writeToConsole(logLevel, content) {
    content = content.trimEnd();

    switch (logLevel) {
        case "critical":
        case "error":
            console.error(content);
            break;

        case "warning":
            console.warn(content);
            break;

        case "info":
            console.log(content);
            break;

        case "debug":
        case "trace":
            console.debug(content);
            break;
    }
}