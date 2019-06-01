;(function($){
    "use strict";

    $.fn.banner = function(option){
        var {items,left,right,list,moveTime,delayTime,autoPlay,index} = option;

        list = list===false ? false : true;
        autoPlay = autoPlay===false ?false : true;
        moveTime = moveTime || 200;
        delayTime = delayTime || 3000;
        index = index || 0;


        // list功能的实现
        if(list){
            var str = "";
            for(var i=0;i<items.length;i++){
                str += `<li></li>`;
            }
            this.append($("<ul class='list'>").html(str));  

            // 设置list的样式
            $(".list").css({
                position:"absolute",
                display:"flex",
                bottom:0,
                left:0,
                right:0,
                listStyle:"none",
                height:20,
                justifyContent:"center",
            }).children("li").css({
                width:20,
                height:20,
                borderRadius:"50%",
                background:"rgba(255,255,255,0.6)",
                margin:"0 10px",
                cursor:"pointer"
            }).eq(index).css("background","pink");

            // list的功能，绑定事件
            $(".list").children("li").click(function(){
                if($(this).index() > index){
                    move(1,index,$(this).index());
                }
                if($(this).index() < index){
                    move(-1,index,$(this).index());
                }
                index = $(this).index();
            })

            // list的运动
            let move = function(direct,iPrev,iNow){
                items.eq(iPrev).css({
                    left:0
                }).stop().animate({
                    left:-items.eq(0).width() * direct
                },moveTime).end().eq(iNow).css({
                    left:items.eq(0).width() * direct
                }).stop().animate({
                    left:0
                },moveTime)
                $(".list").children().eq(iPrev).css("background","rgba(255,255,255,0.6)").end().eq(iNow).css("background","pink");
            }
        }

        // 左右按钮btns功能的实现
        if(left!=undefined && left.length>0 && right!=undefined && right.length>0){
            left.click(leftEvent);
            right.click(rightEvent);
        }

        let iPrev = items.length-1;

        // 点击左按钮的事件
        function leftEvent(){
            if(index == 0){
                index = items.length-1;
                iPrev = 0;
            }else{
                index--;
                iPrev = index + 1;
            }
            move(1);
        }
        // 点击右按钮的事件
        function rightEvent(){
            if(index == items.length-1){
                index = 0;
                iPrev = items.length-1;
            }else{
                index++;
                iPrev = index - 1;
            }
            move(-1);
        }

        // btns的运动
        let move = function(direct){
            items.eq(iPrev).css({
                left:0
            }).stop().animate({
                left:items.eq(0).width() * direct
            },moveTime).end().eq(index).css({
                left:-items.eq(0).width() * direct
            }).stop().animate({
                left:0
            },moveTime)
            // 设置list的当前项
            if(list){
                $(".list").children().eq(iPrev).css("background","rgba(255,255,255,0.6)").end().eq(index).css("background","pink");
            }
        }
        
        // 是否自动播放
        if(autoPlay){
            let timer;
            // 自动轮播
            timer = setInterval(() => {
                rightEvent();
            }, delayTime);

            // 鼠标进入离开事件
            this.hover(function(){
                clearInterval(timer);
            },function(){
                timer = setInterval(() => {
                    rightEvent();
                }, delayTime);
            })
        }        
    }    
})(jQuery);