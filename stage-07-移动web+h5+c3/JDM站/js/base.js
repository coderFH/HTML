window.mjd = {};

mjd.transitionEnd = (obj, callBack)=>{
    // 1. 容错
    if(typeof obj !== 'object') return;

    obj.addEventListener('transitionEnd', (e) => {
        callBack && callBack(e);
    });

    obj.addEventListener('webkitTransitionEnd', (e) => {
        callBack && callBack(e);
    });
};


/*
  封装tap事件
  移动端的click事件
  click 比 tap事件 执行速度迟 200ms - 300ms
*/

mjd.tap = (obj, callBack)=>{
     // 1.1  起始时间
     let startTime = 0;
     // 1.2 是否产生移动
     let isMove = false;
     // 1.3 监听触摸
     obj.addEventListener('touchstart', ()=>{
          // 1.4 获取当前的时间
          startTime = Date.now();
     });
    obj.addEventListener('touchmove', ()=>{
        // 1.5 产生移动
        isMove = true;
    });
    obj.addEventListener('touchend', (e)=>{
        // 1.6 判断是否是tap事件
        if(Date.now() - startTime < 200 && !isMove){
            callBack && callBack(e)
        }
        // 1.7 还原状态
        startTime = 0;
        isMove = false;
    });

};