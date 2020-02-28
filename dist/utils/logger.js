"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
require('dotenv').config();
const fs = require("fs");
const defaultLevel = process.env.LOG_LEVEL;
const logsDir = "logs";
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}
const { combine, timestamp, label, printf } = winston_1.format;
const options = {
    exitOnError: false,
    level: defaultLevel,
    format: combine(timestamp(), label({ label: "Sync Service" }), printf(({ level, message, label, timestamp }) => {
        return `${timestamp} ${level} [${label}] ${message}`;
    }), winston_1.format.splat()),
    transports: [
        new DailyRotateFile({
            name: "info",
            filename: `${logsDir}/info.log`,
            datePattern: "YYYY-MM-DD-HH",
            zippedArchive: true,
            maxSize: "20m",
            maxFiles: "14d",
            showLevel: true,
            timestamp: true,
            level: "info",
        }),
        new DailyRotateFile({
            name: "error",
            filename: `${logsDir}/error.log`,
            datePattern: "YYYY-MM-DD-HH",
            zippedArchive: true,
            maxSize: "20m",
            maxFiles: "14d",
            showLevel: true,
            timestamp: true,
            level: "error",
        }),
        new DailyRotateFile({
            name: "silly",
            filename: `${logsDir}/silly.log`,
            datePattern: "YYYY-MM-DD-HH",
            zippedArchive: true,
            maxSize: "20m",
            maxFiles: "1d",
            showLevel: true,
            timestamp: true,
            level: "silly",
        }),
    ],
};
const logger = winston_1.createLogger(options);
exports.logger = logger;
if (process.env.NODE_ENV === "develop") {
    logger.add(new winston_1.transports.Console({
        format: combine(timestamp(), label({ label: "DEV" }), winston_1.format.colorize({ all: false }), printf(({ level, message, label, timestamp }) => {
            return `${timestamp} ${level} [${label}] ${message}`;
        })),
        handleExceptions: true
    }));
}
class LoggerStream {
    write(message) {
        logger.info(message.substring(0, message.lastIndexOf('\n')));
    }
}
exports.LoggerStream = LoggerStream;
//# sourceMappingURL=logger.js.map