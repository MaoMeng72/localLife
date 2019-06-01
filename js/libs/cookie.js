function setCookie(key,value,options){
    options = options ? options : {}
    var d = new Date()
    d.setDate(d.getDate()+options.expires);
    var expires = options.expires ? ";expires="+d : "";
    var path = options.path ? ";path="+options.path : "";
    document.cookie = key + "=" + value + expires + path;
}

function removeCookie(key,options){
    options = options || {};
    if(options.path){
        var obj = {
            expires:-1,
            path:options.path
        }
    }else{
        var obj = {
            expires:-1
        }
    }
    setCookie(key,1231,obj)
}

function getCookie(key){
    var arr = document.cookie.split("; ");
    for(var i=0;i<arr.length;i++){
        if(arr[i].split("=")[0] == key){
            return arr[i].split("=")[1];
        }
    }
    return "";
}