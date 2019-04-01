/**
 * typeof函数返回变量的类型
 * */
console.log(typeof 37 === 'number');
console.log(typeof 3.14 === 'number');
console.log(typeof Infinity === 'number');
console.log(typeof NaN === 'number');
console.log(typeof 'liuhw' === 'string');
console.log(typeof undefine === 'undefined');
let nullable = null;
console.log(typeof nullable === 'object');
let array = [1,2,3,4,5];
console.log(typeof array === 'object');
let func = function (index) {
  return index;
};
console.log(typeof func === 'function');
