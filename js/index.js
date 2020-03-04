window.onload=function(){
    var item=document.getElementsByClassName("shopClass_item");//获得是伪数组,菜单列表项
    for(let i=0;i<item.length;i++){
    item[i].addEventListener('mouseover',throttle(showSub,1000),false); //鼠标经过事件，要设置防抖动 tt(showSub,3000)
    item[i].addEventListener('mouseout',debounce(hidSub,1000),false); //鼠标移除事件，要设置防抖动
    }

    function showSub(){
        this.getElementsByClassName("shopClass_list")[0].style.display="block";
    }

     function hidSub(){
        this.getElementsByClassName("shopClass_list")[0].style.display="none";
     }

    //接下来函数节流：事件绑定的其实是下面的闭包函数
    //注意传参this，this在闭包中产生了变化
    function throttle(fn,delay){
        let lock=true;
        return ()=>{
            if(!true) return;
            lock=false;
            setTimeout(()=>{
                fn.apply(this,arguments);
                lock=true;
            },delay);
        }
    }
    //下面这个函数防抖动没有使用，其实可以用来替代在mian.css中使用hover实现的菜单滑动事件，不需要每次hover都进行反应，只需要最后一次。
    function debounce(fn,delay){
        let  timer= null;
        return ()=>{
            clearTimeout(timer);
            timer=setTimeout(()=>{
                fn.apply(this,arguments);
            },delay);
        }
    }
}

    
