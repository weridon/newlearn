KISSY.add('demo',function(S ,require, exports, module){
    var Node = require('node');
    var $ = Node.all;
    var Dom = require('dom');

        // $('.J_Target').on('click',function(ev){
        //     //ev.target 指向被点击的节点
        //     var $target = $(ev.target);
        //     var $currentTarget = $(ev.currentTarget);
        //     $('.J_TargetText').text('target:'+$target.attr('class'));
        //     $('.J_CurrentTargetText').text('currentTarget:'+$currentTarget.attr('class'));
        // })
//悬浮显示二级目录
    $('.nav-first .ul>.li').on('mouseenter mouseleave',function(ev){ 
        var self = $(this).children("div");
        if(ev.type === 'mouseenter'){
            console.log("on");
            Dom.removeClass(self,"hidden");
        }else if(ev.type === 'mouseleave'){
            console.log("no");
            Dom.addClass(self,"hidden");
        }
    })

//悬浮简体繁体切换,增减class
    $('.lau').on('mouseenter mouseleave',function(ev){
        if(ev.type === 'mouseenter'){
            console.log("on");
            Dom.removeClass('.traditional',"hidden");
        }else if(ev.type === 'mouseleave'){
            console.log("no");
            Dom.addClass('.traditional',"hidden");
        }
    })

//悬浮显示登录，改变css样式
    $('.person').on('mouseenter mouseleave',function(ev){
        if(ev.type === 'mouseenter'){
            Dom.style('.person .menu',"display","block");
        }else if(ev.type === 'mouseleave'){
            Dom.style('.person .menu',"display","none");
        }
    })


//航班动态内的切换
    
    $(".span-right").on("click",function(e){
        $(this).addClass("selected");
        $(this).siblings().removeClass("selected");
    });
    $(".span-left").on("click",function(e){
        $(this).addClass("selected");
        $(this).siblings().removeClass("selected");
    });

});

KISSY.use('demo');


