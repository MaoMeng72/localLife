;(function(){
    "use strict";
    class Goods{
        constructor(){
            this.a = document.querySelector(".link .details");
            this.cont = document.querySelector(".goods-b .introduce");
            this.span = document.querySelector(".goods-b .s_box span");
            this.sImg = document.querySelector(".goods-b .s_box img");
            this.bImg = document.querySelector(".goods-b .b_box img");

            this.url = "http://localhost/life/data/goods.json";

            this.init();
            this.addEvent();
        }
        init(){
            var that = this;
            ajaxGet(this.url).then(function(res){
                that.res = JSON.parse(res);
                
                that.getData();
            })
        }
        getData(){
            this.goods = localStorage.getItem("goods");
            this.display();
        }
        display(){
            let i = 0;
            let str1 = "";
            let str2 = "";
            for(let i=0;i<this.res.length;i++){
                if(this.res[i].id == this.goods){
                    str1 = `<a href="#" class="details">${this.res[i].name}</a>`;
                    str2 = `<div class="title">
                                    <h3>${this.res[i].name}</h3>
                                    <h4>${this.res[i].tip}</h4>
                                </div>
                                <div class="buy">
                                    <p><span>促销价</span><b>￥${this.res[i].price}</b><s>￥${this.res[i].prevpri}</s></p>
                                    <img src="images/buy.png" alt="">
                                </div>
                                <div class="car">加入购物车</div>
                            </div>`;
                    this.src = this.res[i].url;
                }
            }
            this.a.innerHTML = str1;
            this.cont.innerHTML = str2; 
            this.sImg.src = this.src;
            this.bImg.src = this.src;
            this.span.background = "url(this.src)";
        }
        addEvent(){
            this.cont.addEventListener("click",(eve)=>{
                let e = eve || window.event;
                let target = e.target || e.srcElement;
                if(target.className == "car"){
                    this.setData();
                }
            })
        }
        setData(){
            this.car = JSON.parse(localStorage.getItem("car"));
            var onoff = 0;
            if(this.car == null){
                this.car = [{
                    id:this.goods,
                    num:1
                }];
                localStorage.setItem("car",JSON.stringify(this.car));
            }else{
                for(let i=0;i<this.car.length;i++){
                    if(this.car[i].id == this.goods){
                        this.car[i].num++;
                        onoff = 1;
                    }
                }
                if(onoff == 0){
                    this.car.push({
                        id:this.goods,
                        num:1
                    })
                }
                localStorage.setItem("car",JSON.stringify(this.car));
            }
        }
    }

    new Goods;
})();