window.addEventListener('load', function (ev) {
    // 1. 实现瀑布流布局
    waterFull('main', 'box');

    // 2. 动态加载新的盒子
    var timerId = null;
    window.addEventListener('scroll', function (ev1) {
        clearTimeout(timerId);
        timerId = setTimeout(function () {
            // 2.1 判断是否具备加载的条件
            if (checkWillLoadImage()) { // true
                // 2.2 造数据
                var dataArr = [
                    {'src': 'img01.jpg'},
                    {'src': 'img04.jpg'},
                    {'src': 'img05.jpg'},
                    {'src': 'img06.jpg'},
                    {'src': 'img08.jpg'},
                    {'src': 'img10.jpg'},
                    {'src': 'img02.jpg'},
                    {'src': 'img30.jpg'}
                ];

                // 2.2 遍历假数据, 不断加载
                for (var i = 0; i < dataArr.length; i++) {
                    var newBox = document.createElement('div');
                    newBox.className = 'box';
                    $('main').appendChild(newBox);

                    var newPic = document.createElement('div');
                    newPic.className = 'pic';
                    newBox.appendChild(newPic);

                    var newImg = document.createElement('img');
                    newImg.src = 'images/' + dataArr[i].src;
                    newPic.appendChild(newImg);
                }

                // 2.3 重新布局
                waterFull('main', 'box');
            }
        },200);
    });

    //3.页面的尺寸发生改变
    var timer = null;
    window.addEventListener('resize',function () {
        //3.1 清除定时器
        clearTimeout(timer);
        //3.2 设置定时器
        timer = setTimeout(function () {
            waterFull('main','box');
        },200);
    });
});

/**
 * 实现瀑布流的布局
 * @param {string}parentBox
 * @param {string}childBox
 */
function waterFull(parentBox, childBox) {
    // 1. 求出父盒子的宽度
    //  1.1 获取所有的子盒子
    var allBox = $(parentBox).getElementsByClassName(childBox);
    // console.log(allBox);

    // 1.2 求出子盒子的宽度
    var boxWidth = allBox[0].offsetWidth;
    // console.log(boxWidth);

    // 1.3 获取窗口的宽度
    var clientW = document.documentElement.clientWidth;
    // console.log(clientW);

    // 1.4 求出总列数
    var cols = Math.floor(clientW / boxWidth);
    // console.log(cols);

    // 1.5 父盒子居中
    $(parentBox).style.width = cols * boxWidth + 'px';
    $(parentBox).style.margin = '0 auto';

    // 2. 子盒子定位
    //  2.1 定义变量
    var heightArr = [], boxHeight = 0, minBoxHeight = 0, minBoxIndex = 0;

    // 2.2 遍历所有的子盒子
    for (var i = 0; i < allBox.length; i++) {
        // 2.2.1 求出每一个子盒子的高度
        boxHeight = allBox[i].offsetHeight;
        // console.log(boxHeight);
        // 2.2.2 取出第一行盒子的高度放入高度数组中
        if (i < cols) { // 第一行
            heightArr.push(boxHeight);
        } else { // 剩余行的盒子
            // 2.2.3 取出数组中最矮的高度
            minBoxHeight = _.min(heightArr);
            // 2.2.4 求出最矮高度对应的索引
            minBoxIndex = getMinBoxIndex(heightArr, minBoxHeight);
            // 2.2.5 盒子定位
            allBox[i].style.position = 'absolute';
            allBox[i].style.left = minBoxIndex * boxWidth + 'px';
            allBox[i].style.top = minBoxHeight + 'px';
            // 2.2.6 更新最矮的高度
            heightArr[minBoxIndex] += boxHeight;
        }
    }
    console.log(heightArr, minBoxHeight, minBoxIndex);
}

/**
 * 根据内容取出在数组中对应的索引
 * @param {object}arr
 * @param {number}val
 * @returns {boolean}
 */
function getMinBoxIndex(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
}

/**
 * 判断是否具备加载子盒子的条件
 * @returns {boolean}
 */
function checkWillLoadImage() {
    // 1. 获取最后一个盒子
    var allBox = $('main').getElementsByClassName('box');
    var lastBox = allBox[allBox.length - 1];

    // 2. 求出高度
    var lastBoxDis = lastBox.offsetHeight * 0.5 + lastBox.offsetTop;

    // 3. 求出窗口的高度
    var clientH = document.documentElement.clientHeight;

    // 4. 求出页面滚动产生的高度
    var scrollTopH = scroll().top;

    // 5. 对比
    return lastBoxDis <= clientH + scrollTopH;

}


