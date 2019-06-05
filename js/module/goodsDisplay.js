define(function(){
    'use strict';
    class Display{
        constructor(options){
            this.list = options.list;
            this.url = options.url;
            this.init();
            this.h();

            this.addEvent();
        }
        init(){
            var that = this;
            ajaxGet(this.url).then(function(res){
                that.res = JSON.parse(res);
                that.display();
            })
        }
        display(){
            let str = "";
            for(let i=0;i<10;i++){
                str += `<li index=${this.res[i].id} class="sp"><a href="http://localhost/life/goods/goods.html">
                            <img src="${this.res[i].url}" alt="">
                            <b>${this.res[i].name}</b>
                            <i>${this.res[i].tip}</i>
                            <s>￥${this.res[i].price}</s>
                        </a></li>`;
            }
            for(let i=0;i<this.list.length;i++){
                this.list[i].innerHTML = str;
            }
        }
        addEvent(){
            var that = this;
            for(let i=0;i<this.list.length;i++){
                this.list[i].addEventListener("click",function(eve){
                    let e = eve || window.event;
                    let target = e.target || e.srcElement;
                    if(target.ndoeName == "IMG"||"B"||"I"||"S"){
                        that.id = target.parentNode.parentNode.getAttribute("index");
                        localStorage.setItem("goods",that.id)
                    }
                })
            }
        }
        h(){
            this.fru = $("#fruits");
            this.kit = $("#kitchen");
            this.milk = $("#milk");
            this.sna = $("#snacks");
            this.meat = $("#meat");
            this.data = [this.fru.offset().top,this.kit.offset().top,this.milk.offset().top,this.sna.offset().top,this.meat.offset().top];
        }
    }

    return {
        d:Display
    }
});