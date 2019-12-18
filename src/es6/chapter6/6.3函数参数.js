//基本类型传值,不改变原变量的值
//对象参数传引用，会改变原对象的值

function f(o) {
    o.message = 'set in f'; // o 指向函数外相同的对象，并修改对象的属性值
    o = {
        message: 'new object!',
        id: 5
    };  // o 指向了一个新的，完全独立的对象；如没有定义这个新o对象，则以下操作针对外部同名变量
    o.id = 6;   // 对函数内的局部变量赋值，没有修改函数体外的同名变量：函数体内的局部变量的优先级高于外部变量

    console.log(`inside f: o.message='${o.message}'(after assignment)`);
    console.log(`inside: o.id='${ o.id }'`);    // =5
}

let o = {
    message:'initial value'
}

console.log(`before calling f: o.message='${o.message}'`);
f(o);
console.log(`after calling f: o.message='${o.message}'`);
console.log(`outside: o.id='${o.id}'`); // undefined
