$(function () {
    // 处理焦点图
    $(window).on('resize', function () {
        // 1. 获取窗口的宽度
        var clientW = $(window).width();
        // 2. 设置临界值
        var isShowBigImage = clientW >= 900;
        // 3. 获取所有的item
        var $allItems = $('#lk_carousel .carousel-item');
        // 4. 遍历
        $allItems.each(function (index, item) {
            // 4.1 取出图片的路径
            var src = isShowBigImage ? $(item).data('lg-img') : $(item).data('sm-img');
            var imgUrl = 'url("' + src + '")';
            // 4.2 设置背景
            $(item).css({
                backgroundImage: imgUrl
            });

            if (!isShowBigImage) {
                // 4.3 设置img标签
                var img = '<img src="' + src + '">';
                $(item).empty().append(img);
            } else {
                $(item).empty();
            }
        })
    });

    // 处理宽度
    $(window).on('resize', function () {
        // 1. 获取标签
        var $ul = $('#lk_product .nav');
        var $allLis = $('.nav-item', $ul);
        console.log($allLis);

        // 2. 遍历
        var totalW = 0;
        $allLis.each(function (index, item) {
            totalW += $(item).innerWidth();
        });

        // 3. 设置宽度
        var parentW = $ul.parent().innerWidth();
        if(totalW > parentW){
            $ul.css({
                width: totalW + 'px'
            })
        }else{
            $ul.removeAttr('style');
        }

    });

    $(window).trigger('resize');

    $('#lk_footer img').tooltip()
});