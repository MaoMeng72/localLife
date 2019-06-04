;(function(){
    "use strict";

    class Car{
        constructor(){
            this.ul = document.querySelector("#car ul");
            this.clear = document.querySelector("#car .summary img");
            this.sum = document.querySelector("#car .summary b");

            this.url = "http://localhost/life/data/goods.json";

            this.init();
            this.addEvent();
        }
        init(){
            let that = this;
            ajaxGet(this.url).then(function(res){
                that.res = JSON.parse(res);
                that.getCar();
            })
        }
        getCar(){
            this.car = JSON.parse(localStorage.getItem("car"));
            if(this.car == null) this.car = [];
            let str = "";
            for(let i=0;i<this.res.length;i++){
                for(let j=0;j<this.car.length;j++){
                    if(this.res[i].id == this.car[j].id){
                        str += `<li index="${this.res[i].id}">
                                    <img src="${this.res[i].url}" alt="">
                                    <span>${this.res[i].name}</span>
                                    <b>${this.res[i].price}</b>
                                    <input type="number" min="1" class="add" value="${this.car[j].num}">
                                    <i>${this.res[i].price*this.car[j].num}</i>
                                    <input type="button" value="删除" class="del">
                                </li>`;
                    }
                }
            }
            this.ul.innerHTML = str;
            this.total();
        }
        addEvent(){
            this.ul.addEventListener("click",(eve)=>{
                let e = eve || window.event;
                let target = e.target || e.srcElement;
                if(target.className == "del"){
                    this.id = target.parentNode.getAttribute("index");
                    target.parentNode.remove();
                    this.setCar();
                }
            })

            this.ul.addEventListener("input",(eve)=>{
                let e = eve || window.event;
                let target = e.target || e.srcElement;
                if(target.className == "add"){
                    this.id2 = target.parentNode.getAttribute("index");
                    this.num = target.value;
                    this.changeNum();
                }
            })

            let that = this;
            // this.clear.onclick = function(){
            //     that.ul.innerHTML = "";
            //     localStorage.setItem("car",null);
            // }
        }
        setCar(){
            for(var i=0;i<this.car.length;i++){
                if(this.id == this.car[i].id){
                    this.car.splice(i,1);
                }
            }     
            localStorage.setItem("car",JSON.stringify(this.car));
        }

        changeNum(){
            for(var i=0;i<this.car.length;i++){
                if(this.id2 == this.car[i].id){
                    this.car[i].num = this.num;
                }
            }     
            localStorage.setItem("car",JSON.stringify(this.car));
            
        }

        total(){
            let total = 0;
            for(let i=0;i<this.car.length;i++){
                total += this.res[i].price*this.car[i].num;
            }
            this.sum.innerHTML = "￥"+total;
        }
    }

    new Car;
})();