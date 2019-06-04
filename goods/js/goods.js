;(function(){
    "use strict";
    class Goods{
        constructor(){
            this.a = document.querySelector(".link .details");
            this.cont = document.querySelector(".goods-b");

            this.url = "http://localhost/life/data/goods.json";

            this.init();
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
                    str2 = `<div class="box">
                                <div class="s_box">
                                    <img src="${this.res[i].url}" alt="">
                                    <span></span>
                                </div>
                                <div class="b_box">
                                    <img src="${this.res[i].url} alt="">
                                </div>
                            </div>
                            <div class="introduce">
                                <div class="title">
                                    <h3>${this.res[i].name}</h3>
                                    <h4>${this.res[i].tip}</h4>
                                </div>
                                <div class="buy">
                                    <p><span>促销价</span><b>￥${this.res[i].price}</b><s>￥${this.res[i].prevpri}</s></p>
                                    <img src="images/buy.png" alt="">
                                </div>
                                <div class="car">加入购物车</div>
                            </div>
                        </div>`;
                }
                this.a.innerHTML = str1;
                this.cont.innerHTML = str2;
            }
        }
    }

    new Goods;
})();