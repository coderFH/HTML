(function (window) {
    function AjaxTool() {}
     AjaxTool.ajaxRequest = function (params, successCallBack, errorCallBack) {
        // 0. 获取参数
        var requestType = params['requestType'] || 'get';
        var url = params['url'];
        var paramObj = params['paramObj'];
        var timeout = params['timeout'];

        // 1.创建XMLHttpRequest对象 (找到一个电话)
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }

        // 2. 判断请求方式
        if(requestType.toLowerCase() === 'get'){
            var codeURI = encodeURI(url + '?' + getStrWithObject(paramObj));
            xhr.open('get', codeURI, true);
            xhr.send();
        }else if(requestType.toLowerCase() === 'post' ){
            // 请求体
            var codeParam = encodeURI(getStrWithObject(paramObj));
            xhr.open('post', url, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-from-urlencoded');
            xhr.send(codeParam);
        }

        // 3. 监听服务器的响应 (等待电话拨通)
        xhr.onreadystatechange = function () {
            // 4. 处理响应的数据 (对方说话)
            if (xhr.readyState === 4) {
                // 代表服务器已经给了响应, 不代表响应成功
                if (xhr.status === 200) {
                    successCallBack(xhr);
                    // 清除请求定时器
                    clearTimeout(timer);
                } else {
                    errorCallBack();
                }
            }
        };

        // 5. 控制请求的时间
        var timer;
        if (timeout > 0) {
            timer = setTimeout(function () {
                // 取消ajax请求
                xhr.abort();
            }, timeout);
        }
    };

    /**
     * 返回一个随机数
     */
    function getRandomStr() {
        return Math.random() + (new Date().getTime())
    }

    /**
     * 把对象转成字符串
     */
    function getStrWithObject(paramObj) {
        var rArr = [];
        for (var key in paramObj) {
            var str = key + '=' + paramObj[key];
            rArr.push(str);
        }
        rArr.push('random=' + getRandomStr());
        return rArr.join('&');
    }

    window.AjaxTool = AjaxTool;
})(window);