// 描述 实现一个myNew函数，实现和new 运算符一样的效果

// 要点：
// （1）首先创建了一个新的空对象
// （2）设置原型，将对象的原型设置为函数的 prototype 对象。
// （3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
// （4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

function myNew() {
    let newObject = null,
        constructor = arguments[0],
        result = null;
    
    if (typeof constructor !== 'function') {
        console.error('type error');
        return ;
    }

    newObject = Object.create(constructor.prototype); //制定原型，创建对象


    result = constructor.apply(newObject, arguments.slice(1)); // 运行构造函数,result为构造函数的返回

    let flag = 
        result && (typeof result === 'object' || typeof result === 'function');

    return flag ? result : newObject; //如果构造函数返回了引用类型的值，那么就返回这个值，否则返回创建的对象
}