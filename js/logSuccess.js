;(function(){
    "use strict";

    class Logsuce{
        constructor(options){
            this.logout = options.logout;
            this.back = options.back;

            this.getData();
        }
        // 拿登陆的数据
        getData(){
            // console.log(localStorage.getItem("data"));
            this.data = JSON.parse(localStorage.getItem("data"));
            for(let i=0;i<this.data.length;i++){
                if(this.data[i].onoff == 1){
                    this.logout.innerHTML = `<span>欢迎您：</span>
                                            <a href="#">${this.data[i].user}</a>
                                            <a href="#" class="back">[退出]</a>
                                            <a href="vip.html">[机构会员]</a>`;
                    
                }
            }
            this.addEvent();
        }
        addEvent(){
            this.logout.addEventListener("click",(eve)=>{
                let e = eve || window.event;
                let target = e.target || e.srcElement;
                if(target.className == "back"){
                    for(let i=0;i<this.data.length;i++){
                        this.data[i].onoff = 0;
                    }
                    this.logout.innerHTML = `<span>您好，请</span>
                                            <a href="login/login.html">[登陆]</a>
                                            <a href="login/register.html">[注册]</a>
                                            <a href="vip.html">[机构会员]</a>`;
                    localStorage.setItem("data",JSON.stringify(this.data));
                }
            })
        }
    }

    new Logsuce({
        logout:document.querySelector("#top .top-l"),
        back:document.querySelectorAll("#top .top-l a")[1]
    })
})();