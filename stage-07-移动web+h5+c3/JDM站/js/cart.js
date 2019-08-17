window.addEventListener('load',()=> {
    deleteProduct();
});

/*
* 删除商品
* */
function deleteProduct() {
    //1.获取需要的元素
    let panel = document.getElementsByClassName('panel')[0];
    let panelContent = panel.getElementsByClassName('panel-content')[0];
    let trashes = document.getElementsByClassName('shop-deal-right');
    let checkBoxs = document.getElementsByClassName('cart-check-box');

    //2.监听点击
    let up; //上翻的盖子
    for (let i = 0; i < trashes.length; i++) {
        mjd.tap(trashes[i],(e)=>{
            //2.1实现垃圾篓翻盖
            //2.1.1 取到盖子
            up = trashes[i].firstElementChild;
            //2.1.2 加过渡
            up.style.transaction = 'all .2s ease';
            up.style.webkitTransition = 'all .2s ease';
            //2.1.3 实现动画
            up.style.transformOrigin = '0 0.5rem';
            up.style.webkitTransformOrigin = '0 0.5rem';
            up.style.transform = 'rotate(-45deg)';
            up.style.webkitTransform = 'rotate(-45deg)';

            //2.2 弹出面板
            panel.style.display = 'block';
            panelContent.className = 'panel-content jump';
        });
    }

    //3. 点击取消按钮
    let cancel = panelContent.getElementsByClassName('cancel')[0];
    mjd.tap(cancel,()=>{
        panel.style.display = 'none';
        up.style.transform = 'none';
        up.style.webkitTransform = 'none';
    });

    //4. 复选框的选中和取消
    for (let i = 0; i < checkBoxs.length ; i++) {
        mjd.tap(checkBoxs[i],(e)=>{
            if (e.target.hasAttribute('checked')) {
                e.target.removeAttribute('checked');
            } else{
                e.target.setAttribute('checked','');
            }
        });
    }
}

