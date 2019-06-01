;(function(){
    "use strict";
    class Register{
        constructor(options){
            this.user = options.user;
            this.pass = options.pass;
            this.pass2 = options.pass2;
            this.btn = options.btn;
            this.mask = options.mask;

            this.init();
            this.getData();
        }
        init(){
            var that = this;
            this.btn.onclick = function(){
                // 设置localstorage中的数据
                that.setData()
            }
        }
        getData(){
            // 将localstorage中数据赋给this.data，若没有数据则直接给他一个空数组
            this.data = localStorage.getItem("data");
            if(this.data == null){
                this.data = [];
            }else{
                this.data = JSON.parse(this.data)
            }
        }
        setData(){
            if(this.data.length == 0){
                // 第一次注册
                this.data.push({
                    user:this.user.value,
                    pass:this.pass.value,
                    onoff:0
                })
                this.mask.style.display = "block";
                this.mask.innerHTML = "注册成功！";
                setTimeout(() => {
                    this.mask.style.display = "none";  
                    location.href = "http://localhost/life/login/login.html";
                }, 1000);
                localStorage.setItem("data",JSON.stringify(this.data))
            }else{
                // 不是第一次注册，如果不是第一次注册，需要判断这次注册的和之前注册的是否重名，如果重名，不执行
                for(var i=0;i<this.data.length;i++){
                    if(this.data[i].user === this.user.value){
                        return;
                    }
                    this.mask.style.display = "block";
                    this.mask.innerHTML = "用户名已经存在！";
                    setTimeout(() => {
                        this.mask.style.display = "none";  
                    }, 1000);
                }
                // 如果执行了，表示没重名，那就再增加一个
                this.data.push({
                    user:this.user.value,
                    pass:this.pass.value,
                    onoff:0
                })
                this.mask.style.display = "block";
                this.mask.innerHTML = "注册成功！";
                setTimeout(() => {
                    this.mask.style.display = "none";  
                    location.href = "http://localhost/life/login/login.html";
                }, 1000);
                localStorage.setItem("data",JSON.stringify(this.data))
                console.log(this.mask.innerHTML)
            }
        }
    }

    new Register({
        user:document.querySelector("#register .user"),
        pass:document.querySelector("#register .pass"),
        pass2:document.querySelector("#register .pass2"),
        btn:document.querySelector("#register .btn"),
        mask:document.querySelector("#register .mask")
    })

})();
