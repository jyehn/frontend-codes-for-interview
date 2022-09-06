// 描述：如何创建一个AJAX

// 1.创建 XMLHttpRequest 对象，也就是创建一个异步调用对象
// 2.创建一个新的 HTTP 请求，并指定该 HTTP 请求的方法、URL 及验证信息 xhr.responseType xhr.setRequestHeader
// 3.设置响应 HTTP 请求状态变化的函数 onreadystatechange onerror
// 4.发送 HTTP 请求 xhr.send
// 5.获取异步调用返回的数据
// 6.使用 JavaScript 和 DOM 实现局部刷新

const SERVERL_URL = "/server";

let xhr  =new XMLHttpRequest();

xhr.open("GET", SERVERL_URL, true);

xhr.onreadystatechange = function() {
    if (this.readyState !== 4) return;

    if (this.status === 200) {
        handle(this.response);
    } else {
        console.error(this.statusText);
    }
}

xhr.onerror = function() {
    console.error(this.statusText);
}

xhr.responseType = "json";
xhr.setRequestHeader("Accept", "application/json");

xhr.send(null);




// 如何使用promise封装一个ajax方法

function getJSON(url) {
    let promise = new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();

        xhr.open("GET", url, true);

        xhr.onreadystatechange = function() {
            if (this.readyState !== 4) return;

            if (this.status === 200) {
                resolve(this.response);
            }else {
                reject(new Error(this.statusText));
            }
        }
        xhr.onerror = function() {
            reject(new Error(this.statusText));
        }

        xhr.responseType = 'json';
        xhr.setRequestHeader("Accept", "application/json");

        xhr.send(null);
    })
    return promise;
}
