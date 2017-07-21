
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
		
	var qf = {};
	
	qf.x1 = (-b+Math.sqrt(b*b-4*a*c))/2*a;
	qf.x2 = (-b-Math.sqrt(b*b-4*a*c))/2*a;
	
	return  qf;
}
	
//求直线与圆的交点（ 参数 圆心点c1,c2  鼠标所在点的位置x1,y1  圆的半径r ）
window.ranchy.scIntersection = function(c1,c2,x1,y1,r){
	
	var scIs = {x:0,y:0};
	
	var x;
	var y;
	var k;
	
	k = (y1-c2)/(x1-c1);
	
	console.log(x1,y1,k)
	
	var x2,y2,x3,y3;
	
	var a,b,c;
	
	a = k*k+1;
	b = -2*(c1+c2*k);
	c = c1*c1+c2*c2-r*r;
	
	var qf = ranchy.qf(a,b,c);
//		console.log(qf)
	
	x2 = qf.x1;
	x3 = qf.x2;

//	
//	console.log(qf1)
	
//	x2 = r*Math.sqrt(1/(k*k+1));
//	x3 = -r*Math.sqrt(1/(k*k+1));
//	
//	y2 = k*r*Math.sqrt(1/(k*k+1));
//	y3 = -k*r*Math.sqrt(1/(k*k+1));
	
	if(x1>0 || x2>0){
		scIs.x = x2;
	}else if(x1<0 || x2<0){
		scIs.x = x2;
	}else{
		scIs.x = x3;
	}
	
	scIs.y = k*scIs.x;
	
	return scIs
}
