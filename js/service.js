/**
 * Created by yadi_coco on 2017/4/1.
 */
<!--使用客服的脚本-->
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?565efe5088f92fbf332db6f778aac7c1";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
<!--模拟点击事件，定时让对话框弹出-->
// 两秒后模拟点击
setTimeout(function() {
    // IE
    if(document.all) {
        document.getElementById("nb_icon_wrap").click();
    }
    // 其它浏览器
    else {
        var e = document.createEvent("MouseEvents");
        e.initEvent("click", true, true);
        document.getElementById("nb_icon_wrap").dispatchEvent(e);
    }
}, 3000);