    var aimg = document.querySelectorAll("img");
    var clientH = document.documentElement.clientHeight;
    // console.log(aimg[0].src)

    function lazyLog(arr){
        var scrollT = document.documentElement.scrollTop;
        
        for(var i=0;i<arr.length;i++){
            if(arr[i].src != "") continue;

            if(arr[i].offsetTop < clientH + scrollT){
                arr[i].src = arr[i].getAttribute("data-src");
                console.log(`第${i}张可以加载了`)
            }
        }
    }

    lazyLog(aimg)

    onscroll = function(){
        lazyLog(aimg)
    }