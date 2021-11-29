const log4js = require("log4js");

log4js.configure({
    appenders: {
        consoleLogger: {type: "console"},
        errorFileLogger: {type: "file", filename: "error.log"},
        warnFileLogger: {type: "file", filename:"warn.log"}
    },
    categories: {
        default: { appenders: ["consoleLogger"], level: "trace" },
        infoL: { appenders: ["consoleLogger"], level: "info" },
        errorL: { appenders: ["errorFileLogger", "consoleLogger"], level: "error" },
        warnL: { appenders: ["warnFileLogger", "consoleLogger"], level: "warn" }
    }
})

module.exports = log4js;
