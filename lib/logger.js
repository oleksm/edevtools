'use strict';
const winston = require('winston');
const fs = require('fs');

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const env = process.env.NODE_ENV || 'development';
const logDir = 'log';
// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const myFormat = printf(info => {
  return `${info.timestamp}  ${info.level.toUpperCase()}  ${info.label} | ${info.message}`;
});

var getLogger = function(module) {
    var path = module.filename.split('/').slice(-1).join('/');

    return winston.createLogger({
      transports: [
        // colorize the output to the console
        new (winston.transports.Console)({
          format: combine(
            label({ label: path }),
            timestamp({
            format: 'YYYY-MM-DD HH:mm:ss.SSS'
            }),
            myFormat
          ),
        }),
        // new (winston.transports.File)({
        //   filename: `${logDir}/results.log`,
        //   level: env === 'development' ? 'debug' : 'info'
        // })
      ]
    });
};

module.exports = getLogger;
