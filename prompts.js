// const inquirer = require('inquirer');


const questions = [
    {
        type: 'confirm',
        name: 'scss',
        message: '是否安装sass-loader',
        default: false
    },
    {
        type: 'confirm',
        name: 'vuex',
        message: '是否安装vuex',
        default: false
    },
    {
        type: 'confirm',
        name: 'router',
        message: 'vue-router',
        default: false
    },
    // {
    //     type: 'list',
    //     name: 'module',
    //     message: '请选择你要生成的模块',
    //     choices: [
    //         { name: 'Module1', value: '1' },
    //         { name: 'Module2', value: '2' },
    //         { name: 'Module3', value: '3' },
    //     ],
    //     default: 'module0',
    // },
    // {
    //     type: 'input',
    //     name: 'moduleName',
    //     message: '请输入模块名称',
    //     default: 'myModule',
    // },
];

// 测试
// inquirer.prompt(questions).then(
//     answers => {
//         console.log(answers);
//     }
// ).catch(err => {
//     console.warning(err);
// })

module.exports = questions;
