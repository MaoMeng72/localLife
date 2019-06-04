;(function(){
    "use strict";

    class List{
        constructor(){
            this.list = document.getElementById("list");

            this.url = "http://localhost/life/data/goods.json";

            this.init();

            this.addEvent();
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
                                <img src="${this.res[i].url}" alt="">
                                <span>${this.res[i].name}</span>
                                <b>${this.res[i].tip}</b>
                                <s>￥${this.res[i].price}</s>
                        </div>`;
            }
            this.list.innerHTML = str;
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
    }
    new List;
})();