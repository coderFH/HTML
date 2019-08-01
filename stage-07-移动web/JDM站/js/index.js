window.addEventListener('load',()=> {
    //轮播图
    carousel();
    // 改变导航条的背景
    changeNavBarColor();
});

//处理尺寸改变的时候,刷新下布局
let timer = null;
window.addEventListener('resize',()=>{
    clearInterval(timer);
    timer = setTimeout(()=>{
        window.location.reload();
    },50);
});

/*
* 轮播图
* */
function carousel() {
    //1.获取需要的标签
    let banner = document.getElementsByClassName('jd-banner')[0];
    console.log(banner);
    let bannerW = banner.offsetWidth / 10;  //除以10是因为单位是rem
    let imageBox = banner.getElementsByTagName('ul')[0];  //图片
    let indicatorBox = banner.getElementsByTagName('ol')[0]; //指示器
    let allPoints = indicatorBox.getElementsByTagName('li'); //所有的原点

    //2.设置过度效果  清除过渡效果 位置的改变
    let addTransition = ()=>{
        imageBox.style.transition = 'all .2s ease';
        //兼容
        imageBox.style.webkitTransition = 'all .2s ease';
    };

    let removeTransition = () => {
        imageBox.style.transition = 'none';
        //兼容
        imageBox.style.webkitTransition = 'none';
    };

    let changeTransitionX = (x) => {
        imageBox.style.transform = `translateX(${x}rem)`;
        imageBox.style.webkitTransform = `translateX(${x}rem)`;
    };

    let autoplay = () => {
        index++;
        //设置过渡效果
        addTransition();
        //改变位置
        changeTransitionX(-index * bannerW);
    }


    // 3.让图片盒子滚起来
    let index = 1; //全局的索引
    let timer = null;
    timer = setInterval(autoplay,3000);

    //4.当图片过渡结束(判断边界值)
    imageBox.addEventListener('transitionEnd',()=>{
        //4.1 判断最大索引和最小索引
        if (index >= 9) {
            index = 1;
        } else if(index <= 0) {
            index = 8;
        }
        //4.2 清除过渡
        removeTransition();
        changeTransitionX(-index * bannerW);
        //4.3 指示器
        changePoint();
    });

    imageBox.addEventListener('webkitTransitionEnd', () => {
        // 4.1 判断最大索引和最小索引
        if (index >= 9) { // 最大值
            index = 1;
        } else if (index <= 0) { // 最小值
            index = 8;
        }
        // 4.2 清除过渡
        removeTransition();
        changeTransitionX(-index * bannerW);

        // 4.3 指示器
        changePoint();
    });

    //5. 指示器处理
    let changePoint = () => {
        for (let i = 0; i < allPoints.length; i++) {
            allPoints[i].className = '';
        }
        //5.1 索引保持一致
        let pointIndex = index;
        if (pointIndex >= 9) {
            pointIndex = 1;
        } else if (pointIndex <= 0) {
            pointIndex = 8;
        }
        allPoints[pointIndex - 1].className = 'current';
    };

    //6.监听手势滑动
    let startX = 0; //起始触摸
    let endX = 0; //结束触摸
    let distanceX = 0; //滑动的距离

    imageBox.addEventListener('touchstart',(e)=> {
        console.log(111);
        //6.1 清除定时器
        clearInterval(timer);
        startX = e.touches[0].clientX;
    });

    imageBox.addEventListener('touchmove',(e)=> {
        console.log(222);
        e.preventDefault();
        endX = e.touches[0].clientX;
        //6.2 移动的距离
        distanceX = (startX - endX) / 10;
        //让盒子走起来
        removeTransition();
        changeTransitionX(-index * bannerW - distanceX);
    });

    imageBox.addEventListener('touchend',(e)=> {
        e.preventDefault();
        if (Math.abs(distanceX) > 1 / 3 * bannerW && endX !== 0 ) {
            //判断
            if (distanceX > 0) {
                index++;
            } else if(distanceX < 0) {
                index--;
            }
        }

        // 添加过渡效果
        addTransition();
        //改变位置
        changeTranslateX(-index * bannerW);
        // 开启定时器
        timer = setInterval(autoPlay, 1000);
        // 清除记录值
        startX = 0;
        endX = 0;
        distanceX = 0;
    });
}

/*
* 改变导航条的颜色
* */
function changeNavBarColor() {
    // 1. 获取需要的标签
    let headerBox = document.getElementsByClassName('jd-header-box')[0];
    let banner = document.getElementsByClassName('jd-banner')[0];

    //2. 求出轮播图的高度
    let bannerH = banner.offsetHeight, scrollTopH = 0;

    //3. 监听页面的滚动
    window.addEventListener('scroll',()=>{
        //3.1 求出页面偏离头部高度
        scrollTopH = document.documentElement.scrollTop;
        //3.2 判断
        let opt = 0;
        if (scrollTopH <= bannerH) {
            //3.3 求出透明度
            opt = scrollTopH / bannerH * 0.85;
        } else {
            opt = 0.85;
        }
        //3.4 设置颜色的渐变
        headerBox.style.backgroundColor = `rgba(236,45,45,${opt})`;
    })
}