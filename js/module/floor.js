define(function(){
    'use strict';
    class Floor{
        constructor(options){
            this.list = options.list;
            this.data = options.data;
            this.init();
        }
        init(){
            var that = this;
            $("#floor").children("div").click(function(){
                $("html").animate({
                    scrollTop:that.data[$(this).index()]
                })
            })
        }
    }

    return {
        f:Floor
    }
});