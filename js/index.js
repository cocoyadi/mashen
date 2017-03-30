/**
 * Created by yadi_coco on 2017/3/14.
 */
jQuery(document).ready(function($) {
    $(".showList").click(function(){
        $(".toright").toggleClass("hidden");
        $(".ul-menu").toggleClass("hidden");
        $(".todown").toggleClass("hidden");
    });
    $(".a").bind('mouseover',function(){
        $(this).addClass("hidden");
        $(this).siblings(".b").removeClass("hidden");
    });
    $(".b").bind('mouseout',function(){
        $(this).addClass("hidden");
        $(this).siblings(".a").removeClass("hidden");
    });

    $(".prompt_close").click(function(){
        $(".prompt_box").hide();
    });
    $(function() {
        var $slider = $('#demo-slider-0');
        var counter = 0;
        var getSlide = function() {
            counter++;
            return '<li><img src="http://s.amazeui.org/media/i/demos/bing-' +
                (Math.floor(Math.random() * 4) + 1) + '.jpg" />' +
                '<div class="am-slider-desc">动态插入的 slide ' + counter + '</div></li>';
        };



    });

});
