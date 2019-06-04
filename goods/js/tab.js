;(function(){
    "use strict";
    class Tab{
        constructor(){
            this.ul = document.querySelector("#tab ul");
            this.div = document.querySelector("#tab .zh");

            this.url = "http://localhost/life/data/goods.json";

            this.goods = localStorage.getItem("goods");
            this.init();
        }
        init(){
            let that = this;
            ajaxGet(this.url).then(function(res){
                that.res = JSON.parse(res);
                that.display();
            })
        }
        display(){
            let str = "";
            for(let i=0;i<this.res.length;i++){
                if(this.res[i].id == this.goods){
                    this.xq = this.res[i].xq;
                    this.server = this.res[i].server;
                    this.talk = this.res[i].talk;
                }
            }
            this.addEvent();
        }
        addEvent(){
            this.ul.addEventListener("click",(eve)=>{
                let e = eve || window.event;
                let target = e.target || e.srcElement;
                if(target.className == "li1"){
                    this.div.innerHTML = `<img src="${this.xq}">`;
                }
                if(target.className == "li2"){
                    this.div.innerHTML = `<img src="${this.server}">`;
                }
                if(target.className == "li3"){
                    this.div.innerHTML = `<img src="${this.talk}">`;
                }

            })
        }
    }

    new Tab;
})();