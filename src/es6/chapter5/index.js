var result;
const fn = (x) => x;
result = fn('5.11');
console.log(result);

const obj = { b: 2, c: 3, d: 4 };

({
    a,
    b,
    c
} = obj);
console.log(obj);
console.log(c);
