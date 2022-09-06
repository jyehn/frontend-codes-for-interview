// 描述：实现一个类似于instanceof 操作符的函数


// 实现总结：判断构造函数的prototye是否出现在对象原型链上
function myInstanceOf(left, right) {
    let prototype = right.prototype;

    let proto = Object.getPrototypeOf(left);
    while (true) {
        if (!proto) return false;
        if (proto === prototype) return true;

        proto = Object.getPrototypeOf(proto);
    }
}