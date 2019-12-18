//// function getGreeting() {
    
let ff = `function () {   
    name = arguments[0] || 'Your name:';
    console.log(name);
    return ['早上好！',"Hello World!"];
}`;
let f;

/*
//1.eval()
// console.log(ff);
f = eval("(" + ff + ")"); // "(false || " + ff + ")"
console.log(f);
console.log(f('Albert'));
 */


//2.定义一个返回值为函数对象的函数
//new Function()只接受字符串参数，其可选参数为方法的入参，必填参数为方法体内容。
//Function这个构造函数 可以用来创建函数对象
//语法：
//0.一个参数都不传的情况  创建的就是一个空的函数
//var 函数名 = new Function()
//1.只传一个参数的情况 这个参数就是函数体
//var 函数名 = new Function("函数体")
//2.传多个参数的情况，最后一个参数为函数体，前面的参数都是该函数的形参名

f = new Function(`return ${ff}`);   // 生成一个返回指定字符串为函数体的函数
console.log(f);
newFunc = f();  //执行返回的函数生成可执行的新函数
console.log(newFunc('Albert')[0]);

//2.2 只定义函数体
let f_body = `{   
    hellos = ['早上好！', "Good Morning!"];
    name = arguments[0] || 'Your name:';
    // console.log(arguments[1]);
    // console.log(hellos[arguments[1]]);
    hello = hellos[arguments[1]] || 'Good Morning!' ;
    // console.log(hello);
    return name +', ' +hello;
}`;

new_f = new Function(`${f_body}`); // 根据字符串表示的函数体生成一个函数
console.log(new_f);
newFunc = new_f('Albert', 0); //执行生成的函数并返回新函数的返回值
console.log(newFunc);