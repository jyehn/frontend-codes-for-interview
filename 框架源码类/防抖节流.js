// 防抖和节流的基本原理

//用法

let debounceFunc = debounce(func, 1000);
xxxHandler = obj.debounceFunc;


//要点： 每次在一个周期内这个事件发生，都把这个事件的回调推迟到一个周期以后执行
function debounce(fn, wait) {
    let timer = null;
    return function() {
        var context = this, //obj.xxxx调用的时候也能生效
            args = [...arguments];
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        timer = setTimeout(() => {
            fn.apply(context, args);
        }, wait);
    }
}


//要点：同一个时间周期内发的事件，只执行一次回调
function throttle(fn, wait) {
    let timer = null;

    return function() {
        var context = this,
            args = arguments;
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                return fn.apply(context, args);
            }, wait)
        }
    }
}