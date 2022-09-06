// 描述：实现一个JSONP函数

// 要点： 动态地构建script标签来实现跨域请求
// 1. 处理url和参数
// 2. 生成一个回调函数名
// 3. 在window里添加这个回调函数，回调函数体里是调用传入的函数，并且移除此次添加的script标签
// 4. 在DOM里添加这个script标签

function jsonp(url, params, callback) {
    let queryString = url.indexOf("?") === -1 ? "?" : "&";

    for (let k in params) {
        if (params.hasOwnProperty(k)) {
            queryString += `${k}=${params[k]}&`
        }
    }

    let random = Math.random().toString().replace(".", "");
    let callbackName = 'myJsonp' + random;

    queryString += `callback=${callbackName}`;

    let scriptNode = document.createElement("script");
    scriptNode.src = url + queryString;

    window[callbackName] = function() {
        callback(...arguments);

        document.getElementsByTagName("head")[0].removeChild(scriptNode);
    };

    document.getElementsByClassName("head")[0].appendChild(scriptNode);

}