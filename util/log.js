'use strict';

const chalk = require('chalk');


module.exports = {
    info: function (info) {
        console.log(chalk.cyan(`============================================[${info}]=========================================`))
    },
    error: function (err) {
        console.log(chalk.red(`==============================================[${err}]=========================================`))
    }
};