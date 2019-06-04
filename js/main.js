require(["module/floor","module/goodsDisplay","libs/jquery"],function(f,g,_){
    var list = document.querySelectorAll(".cont-r ul");
    var url = "http://localhost/life/data/goods.json";
    // console.log(list);
    
    
    
    var g = new g.d({
        list:list,
        url:url
    });

    var f = new f.f({
        list:list,
        data:g.data
    });
    
})