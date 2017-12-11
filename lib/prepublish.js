'use strict';

const shell = require('shelljs');
const log = require('../util/log');
const co = require('co');
const inquirer = require('inquirer');
const chalk = require('chalk');

const current = process.cwd();
const pkg = require(`${current}/package.json`);
const version = pkg['version'];


function* core() {
    const answer = yield inquirer.prompt([{
        type: 'input',
        name: 'message',
        message: '备注',
        validate(inputValue) {
            if (!inputValue.trim()) {
                return '请输入备注';
            }
            return true
        },
        default: function () {
            return '';
        }
    }, {
        type: 'input',
        name: 'branch',
        message: '分支',
        validate(inputValue) {
            if (!inputValue.trim()) {
                return '请输入分支';
            }
            return true
        },
        default: function () {
            return '';
        }
    }]);

    const message = answer.message;
    const branch = answer.branch;

    const gitAdd = `git add .`;
    const gitCommit = `git commit -m "${message}"`
    const gitPushBranch = `git push origin ${branch}`

    const comands = [gitAdd, gitCommit, gitPushBranch];
    comands.forEach(cmd => {
        log.info(cmd);
        shell.exec(cmd);
    });

}
module.exports = cb => {
    co(core())
        .then(e => log.info(`prepublish success`))
        .catch(e => log.error(`[err in prePublish]: ${e}`));
}
