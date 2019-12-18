// console.log('Begin: ./src/index.js');
import "./public/stylesheets/main.css";
// import "./public/libs/jquery-2.2.4.min";
import "./public/es6/main";
// import "./public/es6/paper-full";

import "./es6/chapter6/index.js"; 

// import "./es6/test/index.js"; // import './test.js';

// var msg = "Hello World!";
// console.log(msg);


// if (process.env.NODE_ENV === 'production') {
//     console.log('Looks like we are in production mode!');
// }
// if (process.env.NODE_ENV !== 'production') {
//     console.log('Looks like we are in development mode!');
// }

// 模块热更新
if (module.hot) {
    module.hot.decline; // 将当前的index.js的HMR关掉
    module.hot.accept(['./es6/chapter5/index.js']); // 启动"./es6/chapter3/index.js"模块的热更新
}

// 2.将公共的依赖模块提取到已有的 entry chunk 中，或者提取到一个新生成的 chunk

// import _ from 'lodash';

// function component() {
//     var element = document.createElement('div');
//     // var element = document.createElement('pre');

//     // lodash 是由当前 script 脚本 import 导入进来的
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     // element.innerHTML = [
//     //     'Hello webpack!',
//     //     '5 cubed is equal to '  cube(5) 
//     // ].join('\n\n');

//     return element;
// }

// document.body.appendChild(component());


// console.log('End: ./src/index.js');