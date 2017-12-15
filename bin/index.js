#!/usr/bin/env node

const progarm = require('commander');
const shell = require('shelljs');
const pkg=require('./../package.json')

progarm
    .version(pkg.version)
    .usage('[options]')
    .option('-i, --init', '初始化前端应用')
    .option('-t, --test', '执行测试代码')
    .option('-r, --prepublish', '执行测试代码')
    .parse(process.argv);


const options=['init','test','prepublish']
const envs=['node','npm','git']
const msg=
`
    环境要求：
        node(v4.0),
        npm,
        git
`

const checkEnv = () => {
    envs.forEach(env => {
        if (!shell.which(env)) {
            console.log(chalk.red(msg));
            shell.exit(1);
        }
    })
}

options.forEach(option => {
    const value = progarm[option];
    if (value) {
        checkEnv()
        require(`../lib/${option}`)();
    }
    console.log(1)
});

