;(function(){
    'use strict';
    class Login{
        constructor(options){
            this.user = options.user;
            this.pass = options.pass;
            this.btn = options.btn;
            this.mask = options.mask;

            this.init();
            this.getData();
        }
        init(){

            var that = this;
            this.btn.onclick = function(){
                that.yanzheng();
            }
        }
        getData(){
            // 读取localStorage，如果有就解析成数组，如果没有就给一个空数组，方便操作
            this.data = localStorage.getItem("data");
            if(this.data == null){
                this.data = [];
            }else{
                this.data = JSON.parse(this.data)
            }
        }
        yanzheng(){
            var i = 1;
            for(var i=0;i<this.data.length;i++){
                if(this.data[i].user == this.user.value && this.data[i].pass == this.pass.value){
                    this.data[i].onoff = 1;
                    i = 0;
                    localStorage.setItem("data",JSON.stringify(this.data))
                    this.mask.style.display = "block";
                    this.mask.innerHTML = "登陆成功！";
                    setTimeout(() => {
                        this.mask.style.display = "none";  
                        location.href = "http://localhost/life/index.html";
                    }, 1000);
                    return;
                }
            }
            if(i == 1){
                this.mask.style.display = "block";
                this.mask.innerHTML = "登陆失败！";
                setTimeout(() => {
                    this.mask.style.display = "none";  
                }, 1000);
            }
        }
    }
    new Login({
        user:document.querySelector("#login .user"),
        pass:document.querySelector("#login .pass"),
        btn:document.querySelector("#login .btn"),
        mask:document.querySelector("#login .mask")
    })
})();