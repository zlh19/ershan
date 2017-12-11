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

options.forEach(option => {
    const value = progarm[option];
    if (value) {
        require(`../lib/${option}`)();
    }
});

