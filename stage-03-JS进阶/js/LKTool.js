/**
 * 添加一个样式类
 * @param {object}obj
 * @param {string}cs
 */
function addClass(obj, cs) {
    console.log(hasClass(obj, cs));
    if(!hasClass(obj, cs)){
        obj.className += " " + cs;
    }
}

/**
 * 判断有没有样式类
 * @param {object}obj
 * @param {string}cs
 * @returns {boolean}
 */
function hasClass(obj, cs) {
    var reg = new RegExp("\\b" + cs + '\\b');
    return reg.test(obj.className);
}

/**
 * 删除样式类
 * @param {object}obj
 * @param {string}cs
 */
function removeClass(obj, cs) {
    // 1. 创建正则
    var reg = new RegExp("\\b" + cs + '\\b');
    // 2. 删除标签的class
    obj.className = obj.className.replace(reg, '');
}

/**
 * 切换样式类
 * @param {object}obj
 * @param {string}cs
 */
function toggleClass(obj, cs) {
    // 1. 判断obj中是否含有cs
    if(hasClass(obj, cs)){
        // 有, 删除样式类
        removeClass(obj, cs);
    }else{
        // 没有, 添加样式类
        addClass(obj, cs);
    }
}

/**
 * 根据id获取标签
 * @param {string}id
 * @returns {any}
 */
function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : null;
}

/**
 * 获取scroll家族头部和左边的滚动的长度
 * @returns {{top: number, left: number}}
 */
function scroll(){
    // 判断
    if(window.pageYOffset !== 0){
        return {
            'top': window.pageYOffset,
            'left': window.pageXOffset
        }
    }else if(document.compatMode === 'CSS1Compat'){ // w3c
        return {
            'top': document.documentElement.scrollTop,
            'left': document.documentElement.scrollLeft
        }
    }

    return {
        'top': document.body.scrollTop,
        'left': document.body.scrollLeft
    }
}

/**
 * 控制元素的显示
 * @param {object}obj
 * @returns {string}
 */
function show(obj) {
    return obj.style.display = 'block';
}

/**
 * 控制元素的显示
 * @param {object}obj
 * @returns {string}
 */
function hide(obj) {
    return obj.style.display = 'none';
}

function client() {
    if(window.innerWidth){
        return {
            'width': window.innerWidth,
            'height': window.innerHeight
        }
    }else if(document.compatMode === 'CSS1Compat'){ // w3c
        return {
            'width': document.documentElement.clientWidth,
            'height': document.documentElement.clientHeight
        }
    }

    return {
        'width': document.body.clientWidth,
        'height': document.body.clientHeight
    }
}

/**
 * 匀速动画函数
 * @param {object}obj
 * @param {number}target
 * @param {number}speed
 */
function constant(obj, target, speed) {
    // 1. 清除定时器
    clearInterval(obj.timer);

    // 2. 判断方向
    var dir = obj.offsetLeft <= target ? speed : -speed;

    // 3. 设置定时器
    obj.timer = setInterval(function () {
        obj.style.left = obj.offsetLeft + dir + 'px';
        if(Math.abs(target - obj.offsetLeft) <= Math.abs(dir)){
            obj.style.left = target + 'px';
            clearInterval(obj.timer);
        }
    });
}

/**
 *
 * @param {object}obj
 * @param {string}attr
 * @returns {string}
 */
function getCssStyleAttr(obj, attr) {
    if(obj.currentStyle){ // IE 和 opera
        return obj.currentStyle[attr];
    }else {
        return window.getComputedStyle(obj, null)[attr];
    }
}

/**
 * 缓动动画
 * @param obj
 * @param json
 * @param fn
 */
function buffer(obj, json, fn) {
    // 1.1 清除定时器
    clearInterval(obj.timer);

    // 1.2 设置定时器
    var begin = 0, target = 0, speed = 0;
    obj.timer = setInterval(function () {
        // 1.3.0 旗帜
        var flag = true;
        for(var k in json){
            // 1.3 获取初始值
            if("opacity" === k){ // 透明度
                begin =  parseInt( parseFloat(getCssStyleAttr(obj, k)) * 100);
                target = parseInt(parseFloat(json[k]) * 100);
            }else if("scrollTop" === k){
                begin = Math.ceil(obj.scrollTop);
                target = parseInt(json[k]);
            }else { // 其他情况
                begin = parseInt(getCssStyleAttr(obj, k)) || 0;
                target = parseInt(json[k]);
            }

            // 1.4 求出步长
            speed = (target - begin) * 0.2;

            // 1.5 判断是否向上取整
            speed = (target > begin) ? Math.ceil(speed) : Math.floor(speed);

            // 1.6 动起来
            if("opacity" === k){ // 透明度
                // w3c的浏览器
                obj.style.opacity = (begin + speed) / 100;
                // ie 浏览器
                obj.style.filter = 'alpha(opacity:' + (begin + speed) +')';
            }else if("scrollTop" === k){
                obj.scrollTop = begin + speed;
            }else if("zIndex" === k){
                obj.style[k] = json[k];
            }else {
                obj.style[k] = begin + speed + "px";
            }

            // 1.5 判断
            if(begin !== target){
                flag = false;
            }
        }

        // 1.3 清除定时器
        if(flag){
            clearInterval(obj.timer);
            // 判断有没有回调函数
            if(fn){
                fn();
            }
        }
    }, 20);
}
