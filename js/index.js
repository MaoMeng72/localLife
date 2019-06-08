;(function(){
    
    class Index{
        constructor(){

            this.flashSale = document.querySelector("header .myself");
            // 获取城市位置
            this.adress = document.querySelector(".top-c .adress");
            // 获取切换城市的蒙版
            this.city = document.querySelector(".top-c .city");
            // 获取城市蒙版上的×的图标
            this.cha = document.querySelector(".top-c .city-t img");
            // 获取城市蒙版中的ul，写数据渲染页面
            this.allCity = document.querySelector(".top-c .city-b .allCity");
            // 获取一级菜单
            this.menu = document.querySelector("nav .menu");
            this.menuT = document.querySelector("nav .menu-t");
            // 获取二级菜单
            this.seMenu = document.querySelector("nav .seMenu");
            this.ali = document.querySelectorAll("nav .seMenu li");
            for(let i=0;i<this.ali.length;i++){
                this.ali[i].index = i;
            }
            // 获取三级菜单
            this.third = document.querySelector("nav .third");

            // 获取城市数据
            this.cityName = ["北京市","天津市","上海市","重庆市","河北省","山西省","辽宁省","吉林省","黑龙江省","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","海南省","四川省","贵州省","云南省","陕西省","甘肃省","青海省","台湾省"]
            // 三级菜单的数据
            this.menuData = [{"热门推荐":["苹果","梨子","香蕉","西红柿","石榴","猕猴桃","火龙果","哈密瓜"],"时令水果":["西红柿","西瓜","甘蔗","榴莲","菠萝蜜","水蜜桃","油桃","砀山酥梨"]},{"热门推荐":["猕猴桃","精武鸭脖","周黑鸭","热干面","小龙虾","阳澄湖大闸蟹","糍粑","锅盔"],"有机食材":["有机精选","有机杂粮","有机蔬菜","有机面点","有机肉禽","有机干货"]},{"热门推荐":["有机蔬菜","地域特色","番茄","玉米","山药","南瓜","笋","红薯"],"礼盒":["蔬菜礼盒"]},{"热门推荐":["安格斯牛肉","家佳康猪肉","有机肉禽"],"牛羊":["国产牛排","国产牛肉","进口牛排","进口牛肉","进口羊排","牛腱","牛腩","牛尾","其它","羊肉"],"禽类":["鸡翅鸡腿","鸡胸肉","老鸽","老母鸡","乳鸽","童子鸡","乌鸡","整鸡","整鸭","其它","分割禽"]},{"热门推荐":["厄瓜多尔白虾","翡翠生虾仁","日料刺身","三都港","新西兰青口贝","舟山海鲜"],"虾":["白虾","北极虾","红虾","虎虾","龙虾","虾仁","其他"]},{"热门推荐":["粽子","小龙虾","广州酒家","湾仔码头","缸鸭狗","港式茶点","功德林","荷美尔","健康早餐","避风塘"],"面点":["包子","汤包","飞饼","薯饼","馒头","花卷","面条","拉面","年糕","其它","水饺","馄饨","汤圆","小圆子"]},{"热门推荐":["煲汤佳配","橄榄油","李玉双大米","泰国香米","五常稻花香","有机粮油","营养滋补"],"米面杂粮":["大米","东南亚香米","拉面","方便面","面粉","面条","米粉","南方大米","其他","意大利面","杂粮"]},{"热门推荐":["鲜奶宅配","低温酸奶","低温牛奶","乳酸饮料","常温酸奶","儿童奶","低脂","脱脂奶","全脂奶","奶粉","酸奶粉","豆奶","进口牛奶","冰淇淋"],"品牌推荐":["维必滋","爱氏晨曦","乐纯","Delta希腊酸奶","天润","卡士","优诺","伊利","蒙牛","安佳","德亚","德运","百吉福","明治","味全","总统牌","延世","林海雪原"]},{"热门推荐":["每日坚果","百草味","办公室零食","费列罗","下午茶甜品","张君雅"],"坚果零食":["果仁","果干","混合果仁","坚果","开心果","蜜饯","蔬果干","杏仁","腰果","枣"]},{"热门推荐":["新西兰蜂蜜","名白酒","礼品礼盒"],"酒水茶饮":["白葡萄酒","红葡萄酒","黄酒","名白酒","啤酒","其它酒","香槟","起泡酒","洋酒","预调酒"]},{"热门推荐":["碧然德","菲仕乐","九阳","乐扣乐扣","美的","苏泊尔","特美刻","心相印","BWT","米技","爱仕达","海尔"],"厨房电器":["冰箱","电磁炉","电炖锅","电饭煲","电烤箱","电水壶","电压力锅","豆浆机","煎烤机","面包机","破壁","料理机","其它电器","微波炉","榨汁机"]},{"热门推荐":["水果礼盒","蔬菜礼盒","肉禽礼盒","水产礼盒","粮油礼盒","乳品饮料","酒水礼盒"]}]

            // 获取百度接口
            this.url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";

            
            // 获取购物车
            this.car = document.querySelector("header .car");

            //绑定事件
            this.addEvent();
            this.cityDisplay();
            
        }
        addEvent(){
            let that = this;

            this.flashSale.onclick = function(){
                location.href = "http://localhost/life/goods/flashSale.html";
            }
            // 点击adress，切换所在城市
            this.adress.onclick = function(){
                that.city.style.display = "block";
            }
            // 点击蒙版上的图标，蒙版消失
            this.cha.onclick = function(){
                that.city.style.display = "none";                
            }

            this.menuT.onclick  =function(){
                location.href = "http://localhost/life/goods/list.html"
            }

            // 一级菜单的鼠标滑过事件
            this.menuT.onmouseenter  =function(){
                    that.seMenu.style.display = "block";
            }

            this.seMenu.addEventListener("mouseover",(eve)=>{
                let e = eve || window.event;
                let target = e.target || e.srcElement;
                for(let i=0;i<that.ali.length;i++){
                    that.ali[i].className = "";
                }
                if(target.nodeName == "LI"||"SPAN"||"I"){
                    if(target.nodeName == "LI"){
                        target.className = "active";
                        this.liIndex = target.index;

                    }
                    if(target.nodeName == "SPAN"||"I" && target.nodeName != "LI" && target.nodeName != "UL"){
                        target.parentNode.className = "active";
                        this.liIndex = target.parentNode.index;
                    }
                    this.third.style.display = "block";
                    this.menuDisplay();
                }
            })

            this.menu.addEventListener("mouseleave",(eve)=>{
                let e = eve || window.event;
                let target = e.target || e.srcElement;
                if(target.className == "seMenu"||"third"){
                    this.seMenu.style.display = "none";
                    this.third.style.display = "none";
                    
                }
            })

            
            // 购物车的点击事件
            this.data = JSON.parse(localStorage.getItem("data"));
            var o = 1;
            this.car.onclick = function(){
                for(let i=0;i<that.data.length;i++){
                    if(that.data[i].onoff == 1){
                        location.href = "http://localhost/life/goods/car.html";
                        o = 0;
                    }
                }
                if(o == 1){
                    location.href = "http://localhost/life/login/login.html";
                }
            }
        }
        // 渲染配送地址页面
        cityDisplay(){
            let str = "";
            for(let i=0;i<this.cityName.length;i++){
                str += `<li>${this.cityName[i]}</li>`;
            }
            this.allCity.innerHTML = str;
            // 给li绑定事件委托
            this.allCity.addEventListener("click",(eve)=>{
                let e = eve || window.event;
                let target = e.target || e.srcElement;
                if(target.nodeName == "LI"){
                    let name = target.innerHTML;
                    let str = "送至："+name.slice(0,name.length-1);
                    this.adress.innerHTML = str;
                    this.city.style.display = "none";
                }
            })
        }
        // 渲染三级菜单页面
        menuDisplay(){
            let str = "";
            // console.log(this.menuData[this.liIndex]);
            for(let i in this.menuData[this.liIndex]){
                str += `<div class="thirdCont"><p><a href="#">${i}</a></p><p>`;
                for(let j=0;j<this.menuData[this.liIndex][i].length;j++){
                    str += `<a href="#">${this.menuData[this.liIndex][i][j]}</a><span>|</span>`;
                }
                str += `</p></div>`
            }
            this.third.innerHTML = str;
        }
    }

    new Index();
})();