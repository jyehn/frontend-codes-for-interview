// 描述： 实现一个可以将函数柯里化的函数
// 解释：函数柯里化值得是将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
// 
let add = (param1, param2, param3) => {
    return param1 + param2 + param3;
  };
  
let func = curry(add, 1);
func(2)(3);


function curry(fn, ...args) {
    let length = fn.length;

    return function(...subArgs) {
        if (length + subArgs.length >= length) {
            return fn.apply(this, args.concat(subArgs));
        } else {
            return curry.call(this, fn, ...subArgs);
        }
    }
}