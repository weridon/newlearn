//点击切换机票预订、在线值机、航班动态
KISSY.use('node',function(S,Node){
    // 装载了 Node 模块，并处于可用状态
    var S = KISSY;
    var srcPath = "../../../";
    if(S.debug){
        S.config({
            packages:[
                {
                    name:"gallery",
                    path:srcPath,
                    charset:"utf-8",
                    combine:false,
                    tag:S.now(),
                    ignorePackageNameInUri:true,
                    debug:true
                }
            ]
        });
    }

    KISSY.use('gallery/slide/1.3/',function(S,Slide){
        new Slide('J_tab',{
            eventType:'click'
        });
    });
    // function log(msg){
    //     document.getElementById('log').innerHTML += '<p>' + msg + '</p>';
    // }
});

//时间表旁边的slide
KISSY.use('node',function(S,Node){
    // 装载了 Node 模块，并处于可用状态
    var S = KISSY;
    var srcPath = "../../../";
    S.config({
        packages:[
            {
                name:"gallery",
                path:srcPath,
                charset:"utf-8",
                combine:false,
                tag:S.now(),
                ignorePackageNameInUri:true,
                debug:true
            }
        ]
    });
    KISSY.use('gallery/slide/1.2/',function(S,Slide){
        var C = new Slide('slides',{
            autoSlide:true,
            effect:'hSlide',
            carousel:true,
            timeout:3000,
            speed:700,
            selectedClass:'active'
        });

    // C.go(2);

        S.one('#J_pre').on('click',function(e){
            e.halt();
            C.previous().stop().play();
        });
        S.one('#J_next').on('click',function(e){
            e.halt();
            C.next().stop().play();
        });

    });
});
//时间表下面的slide
KISSY.use('node',function(S,Node){
    // 装载了 Node 模块，并处于可用状态
    var S = KISSY;
    var srcPath = "../../../";
    S.config({
        packages:[
            {
                name:"gallery",
                path:srcPath,
                charset:"utf-8",
                combine:false,
                tag:S.now(),
                ignorePackageNameInUri:true,
                debug:true
            }
        ]
    });
    KISSY.use('gallery/slide/1.2/',function(S,Slide){
        var C = new Slide('strategy',{
            autoSlide:true,
            effect:'hSlide',
            carousel:true,
            timeout:3000,
            speed:700,
            selectedClass:'active'
        });
    // C.go(2);
    
        S.one('#J_strategy_prev').on('click',function(e){
            e.halt();
            C.previous().stop().play();
        });
        S.one('#J_strategy_next').on('click',function(e){
            e.halt();
            C.next().stop().play();
        });
    });
});