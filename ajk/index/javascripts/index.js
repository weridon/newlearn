$(document).ready(function() {
	//点击显示、隐藏下拉用户菜单
	function user(){
		$("#user-name").click(function(){
   		$("#user-menu").toggle();
    });
	}
	user();
    //选项切换 智能配件 手机
	function barchange(){
		$(document).ready(function(){
	    $(".bar-nav li").click(function(){
	      $(".bar-nav li").eq($(this).index()).addClass("active").siblings(".bar").removeClass('active');
	        $(".detail>div").eq($(".bar-nav li").index(this)).css('display', 'block').siblings().css('display', 'none'); 
        });
    });
	}
	barchange();
	//选项切换 运动量 血压 肺活量
	function checkchange(){
		$(document).ready(function(){
	    $(".check-nav li").click(function(){
	     	$(".check-nav li").eq($(this).index()).addClass("active").siblings().removeClass('active');
	     		$(".checks>div").eq($(".check-nav li").index(this)).css('display', 'block').siblings().css('display', 'none'); 
        });
    });
	}
	checkchange();
	//选项切换 当天 7天3 30天 
	function checkschange(){
		$(document).ready(function(){
	    $(".checkdate li").click(function(){
	     	$(".checkdate li:visible").eq($(this).index()).addClass("active").siblings().removeClass('active');
	     		$(".chartsdata>div").eq($(".checkdate li").index(this)).css('display', 'block').siblings().css('display', 'none'); 
        });
    });
	}
	checkschange();
	//选项切换 昨天 今天 7天 所有
	function darenbchange(){
		$(document).ready(function(){
	    $(".drb-time li").click(function(){
	    	$(".drb-time li").eq($(this).index()).addClass("active").siblings().removeClass('active');
	     		$(".drbdetail>div").eq($(".drb-time li").index(this)).css('display', 'block').siblings().css('display', 'none'); 
        });
    });
	}
	darenbchange();
  //进程饼图
	function pie1(){
    KISSY.config({
      packages:[{
                name:"kg",
                path:"http://g.tbcdn.cn/",
                combine:true
            }]
    });
    KISSY.use("kg/kcharts/6.0.1/piechart/index",function(S,Pie){
      function pie1(){
        var data = [ {label:"",color:'#85c51f', data:2.3 },
                   { label:"",color:'#f09f11', data:7.7 }];

        var cfg = {
          series:data,
          renderTo:"#J_Pie1",
          cx:150,cy:80,//圆环位置
          rs:[40,60],//圆环内半径 外半径
          donut:true,
          donutSize:40,
          anim:{
            easing:'swing',
            duration:800
          }
        }

        var pie = new Pie(cfg)
            , ms = 600

        function enter(e){
          var sector = e.sector
              , set = sector.get('set')
              , middleangle = sector.get('middleangle')
              , angel = middleangle*Math.PI/180
              , cx = this.get("cx")
              , cy = this.get("cy")
              , unit = 10
              , x = unit*Math.cos(angel)
              , y = -unit*Math.sin(angel)

          set.stop().animate({transform:'s1.1 1.1 '+cx+' '+ cy},ms,'elastic')
        }
        function leave(e){
          var sector = e.sector
            , set = sector.get('set')
          set.stop().animate({transform:""},ms,"elastic")
        }

        pie.on("mouseover",enter);
        pie.on("mouseout",leave);

        pie.on("afterRender",function(){
            // do sth
        });

      }
      pie1();
    })
  };
  pie1();
  //box的手机饼图
  function chartpie(){
   	KISSY.config({
            packages:[{
                name:"kg",
                path:"http://g.tbcdn.cn/",
                combine:true
            }]
        });
    KISSY.use("kg/kcharts/6.0.1/piechart/index",function(S,Pie){
      function pie2(){
        var data = [ 
                   {label:"强度运动",color:'#32addb', data:2 },
                   { label:"适度运动",color:'#85c51f', data:1 },
                   { label:"轻度/静止",color:'#f09f11', data:8 }];

        var cfg = {
          series:data,
          renderTo:"#J_Pie2",
          cx:140,cy:130,
          rs:[45,65],
          donut:true,
          donutSize:40,
          anim:{
            easing:'swing',
            duration:800
          }
        }

        var pie = new Pie(cfg)
          , ms = 600

        function enter(e){
          var sector = e.sector
            , set = sector.get('set')
            , middleangle = sector.get('middleangle')
            , angel = middleangle*Math.PI/180
            , cx = this.get("cx")
            , cy = this.get("cy")
            , unit = 10
            , x = unit*Math.cos(angel)
            , y = -unit*Math.sin(angel)

          set.stop().animate({transform:'s1.1 1.1 '+cx+' '+ cy},ms,'elastic')
        }
        function leave(e){
          var sector = e.sector
            , set = sector.get('set')
          set.stop().animate({transform:""},ms,"elastic")
        }

        pie.on("mouseover",enter);
        pie.on("mouseout",leave);

        pie.on("afterRender",function(){
            // do sth
        });

      }
      pie2();
    })
  };
  chartpie();
   //box的饼图 点击智能配件时进行
  $(".bar1").click(function(){
    function chartpie2(){
    KISSY.config({
            packages:[{
                name:"kg",
                path:"http://g.tbcdn.cn/",
                combine:true
            }]
        });
    KISSY.use("kg/kcharts/6.0.1/piechart/index",function(S,Pie){
      function pie3(){
        var data = [ 
                   {label:"强度运动",color:'#32addb', data:2 },
                   { label:"适度运动",color:'#85c51f', data:1 },
                   { label:"轻度/静止",color:'#f09f11', data:8 }];

        var cfg = {
          series:data,
          renderTo:"#J_Pie3",
          cx:140,cy:130,
          rs:[45,65],
          donut:true,
          donutSize:40,
          anim:{
            easing:'swing',
            duration:800
          }
        }

        var pie = new Pie(cfg)
          , ms = 600

        function enter(e){
          var sector = e.sector
            , set = sector.get('set')
            , middleangle = sector.get('middleangle')
            , angel = middleangle*Math.PI/180
            , cx = this.get("cx")
            , cy = this.get("cy")
            , unit = 10
            , x = unit*Math.cos(angel)
            , y = -unit*Math.sin(angel)

          set.stop().animate({transform:'s1.1 1.1 '+cx+' '+ cy},ms,'elastic')
        }
        function leave(e){
          var sector = e.sector
            , set = sector.get('set')
          set.stop().animate({transform:""},ms,"elastic")
        }

        pie.on("mouseover",enter);
        pie.on("mouseout",leave);

        pie.on("afterRender",function(){
            // do sth
        });

      }
      pie3();
    })
    };
    chartpie2();
    //box的柱状图 
    function barchart(){
      (function(S){
        S.config({
          packages:[{
              name:"kg",
              path:"http://g.tbcdn.cn/",
              combine:true
          }]
        });
        S.use('kg/kcharts/6.0.1/barchart/index',function(S,BarChart){
      
          var barchart = new BarChart({
            renderTo:"#demo1",
            title:{
                  content:"",
                  css:{
                  }
                },//标题名称
            anim:{},
            subTitle:{
            content:"",
            css:{
                }
            },//标题下面注释
            yLabels:{
             isShow:false
              // css:{
              //   "marginLeft":"-4px",
              //   "font-family":"Microsoft Yahei",
              //   "font-size":"10px"
              // },
              // //画垂直坐标
              // template:function(index,text){
              //   //index 当前索引  text 内容
              //   return text ;
              // }
            },
         
            xAxis: {
              text:[
              '04.22','04.23','04.24','04.26','04.27'
              ],
            },
            yAxis:{
              min:0
            },
            bars:{
              barsRatio:0.6,
              barRatio:0.8
            },//柱宽
            series:[{
                    text: '',
                    data: [1669,1097,314,72,335]
                  }
            ],
            legend:{
              isShow:true,y:-10
                },
            tip:{
              template:"{{text}} {{y}} 卡路里",
              alignX:"right",
              css:{"border-color":"{COLOR}"},
              offset:{
                y:-10
              }
              }//鼠标悬浮时出现值及样式
          });
        barchart.on("afterRender",function(){
          var points = barchart._points[0];
          var htmlPaper = barchart.getHtmlPaper();
          for(var i in points){
          htmlPaper.text(points[i]['x'],points[i]['y']-10,points[i]['dataInfo']['y']+"","center","bottom").css({"color":"#666"});
         }
        })//柱上方的字,柱高
      });

    })(KISSY);
    };
    barchart();
  });
  $("#xtseven").click(function(){
    //血压第一个折线图 7天
  function xueya1(){
    KISSY.config({
        packages:[{
            name:"kg",
            path:"http://g.tbcdn.cn/",
            combine:true
        }]
    });
    KISSY.use("kg/kcharts/6.0.1/linechart/index",function(S,LineChart){
      var linechart = new LineChart({
          renderTo:"#xychart1",
          points:{
            attr:{
              type:"auto"
            }
          },
          yLabels:{
            css:{
              "marginLeft":"-20px",
              "font-family":"Microsoft Yahei",
              "font-size":"10px"
            }
          },
          xLabels:{
            css:{
              "font-family":"Microsoft Yahei",
               "font-size":"10px"
            }
          },
          title:{
                  content:"血压走势图"
                },
                anim:{},
                // subTitle:{
                //   content:"Source: WorldClimate.com"
                // },//标题名
          lineType:"arc",
          xAxis: {
              text:['07-18', '07-18']          
                },
          yAxis:{
                  num:7
                },
          comparable:true,
          series:[{
                    text: '标准收缩压',
                    data: [120,120]
                }, {
                    text: '标准舒张压',
                    data: [80,80]
                }
                , {
                    text: '你的收缩压',
                    data: [120,120]
                }, {
                    text: '你的舒张压',
                    data: [80,80]
                }
                ],
          legend:{
            isShow:true,y:-10
          },
          tip:{
            offset:{
                        x:10,
                        y:10
                    },
            template:function(e){
              var html = "";
              for(var i in e.datas){
                html +="<span style='font-size:10px;color:"+e.datas[i]['color']+"'>"+e.datas[i]['text'] +" "+e.datas[i]['y']+" <br/>"
              }
              return html;
            }
          }
      });

    });
  };
  xueya1();
  });
  //血压第二个折线图 30天
  $("#xuey").click(function(){
     function xueya2(){
    KISSY.config({
        packages:[{
            name:"kg",
            path:"http://g.tbcdn.cn/",
            combine:true
        }]
    });
    KISSY.use("kg/kcharts/6.0.1/linechart/index",function(S,LineChart){
      var linechart = new LineChart({
          renderTo:"#xychart2",
          points:{
            attr:{
              type:"auto"
            }
          },
          yLabels:{
            css:{
              "marginLeft":"-20px",
              "font-family":"Microsoft Yahei",
              "font-size":"10px"
            }
          },
          xLabels:{
            css:{
              "font-family":"Microsoft Yahei",
               "font-size":"10px"
            }
          },
          title:{
                  content:"血压走势图"
                },
                anim:{},
                // subTitle:{
                //   content:"Source: WorldClimate.com"
                // },//标题名
          lineType:"arc",
          xAxis: {
              text:['07-03', '07-03', '07-03', '07-03','07-03', '07-06', '07-18']
          
                },
          yAxis:{
                  num:7
                },
          comparable:true,
          series:[{
                    text: '标准收缩压',
                    data: [120,120,120,120,120,120,120]
                }, {
                    text: '标准舒张压',
                    data: [80,80,80,80,80,80,80]
                }
                , {
                    text: '你的收缩压',
                    data: [120,120,120,120,120,120,120]
                }, {
                    text: '你的舒张压',
                    data: [80,80,80,80,80,80,80]
                }
                ],
          legend:{
            isShow:true,y:-10
          },
          tip:{
            offset:{
                        x:10,
                        y:10
                    },
            template:function(e){
              var html = "";
              for(var i in e.datas){
                html +="<span style='font-size:10px;color:"+e.datas[i]['color']+"'>"+e.datas[i]['text'] +" "+e.datas[i]['y']+" <br/>"
              }
              return html;
            }
          }
      });

    });
  };  
  xueya2();  
  });
});

