
//Ranchy canvas function and math function

//动画兼容
if(!window.requestAnimationFrame){
    window.requestAnimationFrame =(window.webkitRequestAnimationFrame||
                                   window.mozRequestAnimationFrame||
                                   window.oRequestAnimationFrame||
                                   window.msRequestAnimationFrame||
                                  function(callback){
                                       return window.setTimeout(callback,1000/60); 
                                 });
    
}
if (!window.cancelAnimationFrame) {
  window.cancelAnimationFrame = (window.cancelRequestAnimationFrame ||
                                 window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
                                 window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
                                 window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||
                                 window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||
                                 window.clearTimeout);
}

window.ranchy = {};

   //canvas
//鼠标在画布中位置捕获

window.ranchy.captureMouse = function(e){
	
        var mouse = {x:0,y:0};
        
        e.addEventListener('mousemove',function(event){
            var x,y;
            if(event.pageX||event.pageY){
                x = event.pageX;
                y = event.pageY;
            }else{
                x = event.clientX + document.body.scrollLeft +document.documentElement.scrollLeft;
                y = event.clientY + document.body.scrollTop +document.documentElement.scrollTop;
            }
            
            x -= e.offsetLeft;
            y -= e.offsetTop;
            
            mouse.x = x;
            mouse.y = y;       
            
        },false);

         return mouse;  	
	
}


	//math
	
//一元二次方程求根公式quadratic formula
	//
window.ranchy.qf = function(a,b,c){
		
	var qf = {x1:0,x2:0};
	
	qf.x1 = (-b+Math.sqrt(b*b-4*a*c))/2*a;
	qf.x2 = (-b-Math.sqrt(b*b-4*a*c))/2*a;
	
	return  qf;
}
	
//求直线与圆的交点（ 参数 圆心点c1,c2  鼠标所在点的位置x1,y1  圆的半径r ）
window.ranchy.scIntersection = function(c1,c2,x1,y1,r){
	
	var scIs = {x:0,y:0};

	var k,b;
	k = (y1-c2)/(x1-c1);
	b = c2-c1*k;
	
	var x2,x3;
	var xx = x1-c1;
	var yy = y1-c2;
		
	x2 = c1 + r*Math.sqrt(xx*xx/(xx*xx+yy*yy));
	x3 = c1 - r*Math.sqrt(xx*xx/(xx*xx+yy*yy));
	
	if(x1>c1){
		scIs.x = x2;
	}else if(x1<c1){
		scIs.x = x3;
	}else{
		scIs.x = x2;
	}
	scIs.y = k*scIs.x + b;
	
	return scIs
}

//运动函数
	//力N 当前速度v 摩擦系数μ 起点x,y 
	// 摩擦力   f = μN
	//m 桌球重量 170g
	//mode:normal(匀速,默认)、up(匀加速)、down（匀减速）(string)
	
window.ranchy.move = function(obj,n,mode,μ,m,x,y){
	

	
	
}
// 两点间距离
window.ranchy.distance = function (x1, y1, x2, y2){
  let len = arguments.length;
  let dx = len === 4 ? x2 - x2 : x1;
  let dy = len === 4 ? y2 - y1 : y1;
  return Math.sqrt(dx*dx + dy*dy);
};