/**
 * Created by yadi_coco on 2017/3/19.
 */
jQuery(document).ready(function($) {
    $(".specific").click(function(){
        $(this).parents(".syllabus").toggleClass("overFlow");
    });
    function countDown(){
        var times=new Array(3)
            now=new Date().getTime();
        $(".time").each(function(i){
            times[i]=new Date($(this).text()+" 00:00:00").getTime();
        });
        for(i=0;i<times.length;i++){
            countDay=parseInt(Math.ceil(times[i]-now)/(1000*3600*24));
            countHour=parseInt(Math.ceil((times[i]-now)%(1000*3600*24))/(1000*3600));
            countMin=parseInt(Math.ceil((times[i]-now)%(1000*3600)/(60*1000)));
            countSecond=parseInt(Math.ceil((times[i]-now)%(1000*60)/1000));
            $(".day").eq(i).text(countDay);
            $(".hour").eq(i).text(countHour);
            $(".minutes").eq(i).text(countMin);
            $(".second").eq(i).text(countSecond);
        }

    }
    setInterval(countDown,1000);
});