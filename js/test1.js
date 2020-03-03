function a(){
    var i=1;
    console.log("外侧执行啦");
    return function(){
        console.log(++i);
    }
}
var b=a();