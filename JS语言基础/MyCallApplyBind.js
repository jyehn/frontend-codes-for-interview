// 描述：实现call apply bind三个函数

//回忆：call的用法

function say(sentence) {
    console.log('i am' + this.name);
    console.log(sentence);
}

var name = 'global';

let fox = {
    name: 'firefox'
}

say.call(fox, 'good morning');


// apply的用法和call一样，只不过，apply的其他参数是以数组传入的



// 总结：手动模拟给这个对象添加方法，使用对象.方法运行，然后删除对象上的这个方法
function myCall(context) {
    if (typeof this !== 'function') {
        console.error('type error');
    }

    let args = [...arguments].slice(1);

    context = context || window;

    context.fn = this;

    result = context.fn(...args);

    delete context.fn;

    return result;

}

function myApply() {
    if (typeof this !== 'function') {
        console.error('type error');
    }

    let args = arguments[1] || []

    context.fn = this;

    let result = context.fn(...args);

    delete context.fn;

    return result;

}

// 总结：bind返回一个函数，这个函数里面保存了this的指向信息和一些提前传入的参数
function myBind(context, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Error');
    }

    let args = [...args],
        fn = this;
    
    return function Fn() {

        return fn.apply(
            this instanceof Fn ? this : context, //判断函数是不是作为构造函数调用，如果是的话，那就用现在的this，而不是保存的context
            args.concat(...arguments)
        )
    }
    
}