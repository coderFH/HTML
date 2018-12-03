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
    if(window.pageYOffset){
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