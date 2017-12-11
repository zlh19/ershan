'use strict';

/**
 * Module dependencies
 */
const inquirer = require('inquirer');
const co = require('co');
const shell = require('shelljs');

const log = require('../util/log');

function* core() {


    const dir = process.cwd();
    const name = 'ershan';
    const target = 'https://github.com/zlh19/ershan.git';
    const hasCnpm = 'cnpm'

    const cloneStr = `cd ${dir} && git clone ${target}`;
    let installStr = '';

    if (shell.which(hasCnpm)) {
        installStr = `cd ${dir}/${name} && cnpm install`;
    } else {
        installStr = `cd ${dir}/${name} && npm install`;
    }


    const commands = [cloneStr, installStr];

    commands.forEach(cmd => {
        log.info(cmd);
        shell.exec(cmd);
    });

}


module.exports = cb => {
    co(core())
        .catch(e => log.error(`[err in init]: ${e}`))
}
