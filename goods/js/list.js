;(function(){
    "use strict";

    class List{
        constructor(){
            this.list = document.getElementById("list");

            this.url = "http://localhost/life/data/goods.json";

            this.init();

            this.addEvent();
            this.clientH = document.documentElement.clientHeight; //可视屏幕的高度
        }
        init(){
            var that = this;
            ajaxGet(this.url).then(function(res){
                that.res = JSON.parse(res);
                that.display();
            });
        }
        display(){
            let str = "";
            for(let i=0;i<this.res.length;i++){
                str += `<div class="list" index="${this.res[i].id}">
                                <img src-data="${this.res[i].url}" alt="">
                                <span>${this.res[i].name}</span>
                                <b>${this.res[i].tip}</b>
                                <s>￥${this.res[i].price}</s>
                        </div>`;
            }
            this.list.innerHTML = str;
            this.odiv = this.list.children;
            this.lazyLog(this.odiv);
            this.scro();
        }
        addEvent(){
            this.list.addEventListener("click",(eve)=>{
                let e = eve || window.event;
                let target = e.target || e.srcElement;
                if(target.nodeName == "IMG"||"SPAN"||"B"||"S"){
                    this.id = target.parentNode.getAttribute("index");
                    this.setLocal();
                    location.href = "http://localhost/life/goods/goods.html";
                }
            })
        }
        setLocal(){
            localStorage.setItem("goods",this.id);
        }
        scro(){
            let that = this;
            onscroll = function(){
                that.lazyLog(that.odiv);
                for(var i=0;i<that.odiv.length;i++){
                    // console.log(that.odiv[i].offsetTop,that.scrollT,that.clientH);
                }
            }
        }
        lazyLog(arr){
            this.scrollT = document.documentElement.scrollTop;
            for(var i=0;i<arr.length;i++){
                if(arr[i].children[0].src != "") continue;
                
                if(arr[i].offsetTop < this.clientH + this.scrollT){
                    arr[i].children[0].src = arr[i].children[0].getAttribute("src-data");
                }
            }
        }
    }
    new List;
})();