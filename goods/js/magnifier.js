;(function(){
    "use strict";
    
    function Magnifier(){
        // 1.选元素
        this.sBox = document.querySelector("#goods .s_box");
        this.span = document.querySelector("#goods .s_box span");

        this.sImg = document.querySelector("#goods .s_box img");

        this.bBox = document.querySelector("#goods .b_box");
        this.bImg = this.bBox.children[0];

        // 2.绑定事件：进入，移动，离开
        this.init()
    }
    Magnifier.prototype.show = function(){
        // 显示
        this.span.style.display = "block";
        this.bBox.style.display = "block";
        this.sImg.style.opacity = 0.6;
    }
    Magnifier.prototype.hide = function(){
        // 隐藏
        this.span.style.display = "none";
        this.bBox.style.display = "none";
        this.sImg.style.opacity = 1;
    }
    Magnifier.prototype.move = function(pos){
        var l = pos.x - this.span.offsetWidth/2;
        var t = pos.y - this.span.offsetHeight/2;
        if(l<0) l=0;
        if(t<0) t=0;
        (l>this.sBox.offsetWidth-this.span.offsetWidth) && 
        (l=this.sBox.offsetWidth-this.span.offsetWidth);
        (t>this.sBox.offsetHeight-this.span.offsetHeight) && 
        (t=this.sBox.offsetHeight-this.span.offsetHeight);
        this.span.style.left = l + "px";
        this.span.style.top = t + "px";
        var x=  l / (this.sBox.offsetWidth-this.span.offsetWidth)
        var y = t / (this.sBox.offsetHeight-this.span.offsetHeight)
        this.bImg.style.left = -x * (this.bImg.offsetWidth-this.bBox.offsetWidth) + "px";
        this.bImg.style.top = -y * (this.bImg.offsetHeight-this.bBox.offsetHeight) + "px";
        this.span.style.backgroundPosition = -l+"px "+ -t +"px"
    }
    Magnifier.prototype.init = function(){
        var that = this;
        this.sBox.onmouseover = function(){
            that.show()
            this.onmousemove = function(eve){
                var e = eve || window.event;
                that.move({
                    x:e.pageX - this.offsetLeft,
                    y:e.pageY - this.offsetTop
                })
            }
        }
        this.sBox.onmouseout = function(){
            that.hide()
        }
    }

    new Magnifier;
})();