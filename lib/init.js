const co =require('co');
const inquirer = require('inquirer');


function *getCore(){

}
module.exports = () => {
    console.log('init')
    co(getCore)
        .then(()=>{

        })
        .catch(()=>{
                
        })
}


