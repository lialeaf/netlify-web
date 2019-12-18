const fs = require('fs');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// //0.
// myEmitter.on('event', () => {
//     console.log('触发事件');
// });
// myEmitter.emit('event');

//1.0
myEmitter.on('event', (a, b) => {
    setImmediate(() => {
        console.log('异步地发生');
    });
    console.log('after');
});
myEmitter.emit('event', 'a', 'b');

// //1.
// const myEmitter = new MyEmitter();
// let m = 0;
// myEmitter.once('event', () => { // 触发一次； 而 .on 触发多次
//     console.log(++m);
// });
// myEmitter.emit('event');
// // 打印: 1
// myEmitter.emit('event');
// // 不触发

// 2.
// const status = {};
// const select = function (file, filename, cb) {
//     emitter.once(file, cb); // .on ?

//     if (status[file] === undefined) {
//         status[file] = 'ready'; // 不存在设置默认值
//     }
//     if (status[file] === 'ready') {
//         status[file] = 'pending';
//         fs.readFile(file, function (err, result) {
//             console.log(filename);
//             emitter.emit(file, err, result); // result.toString()
//             status[file] = 'ready';

//             setTimeout(function () {
//                 delete status[file];
//             }, 1000);
//         });
//     }
// }

// for (let i = 1; i <= 11; i++) {
//     if (i % 2 === 0) {
//         select('js-study/src/es6/others/a.txt', 'a 文件', function (err, result) {
//             console.log('err: ', err, '\nresult: ', (result||'').toString());
//         });
//     } else {
//         select('js-study/src/es6/others/b.txt', 'b 文件', function (err, result) {
//             console.log('err: ', err, '\nresult: ', (result||'').toString());
//         });
//     }
// }