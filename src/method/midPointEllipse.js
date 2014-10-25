/* exported midPointEllipse */

/**
 * MidPoint Ellipse Algorithm 을 구현한 메소드
 * @method WebGL.prototype.midPointEllipse
 * @param  {int} xc 타원의 중심 x값.
 * @param  {int} yc 타원의 중심 y값.
 * @param  {int} rx 타원의 x축 반지름
 * @param  {int} ry 타원의 y축 반지름
 * @return {WebGL}
 */
function midPointEllipse(xc, yc, rx, ry){
	var p, x, y;
    	
    	var rx2 = Math.pow(rx, 2);
    	var ry2 = Math.pow(ry, 2);
    	
    	x = 0;
    	y = ry;
    	p = 4 * ry2 - rx2 * (4 * ry - 1);
    	
    	while( ry2 * x <= rx2 * y ){
    		setEllipsePoint.call(this, xc, yc, x, y);
    		
    		x++;
    		if( p < 0 ){
    			p += 4 * ry2 * (2 * x + 1);
    		}
    		else{
    			y--;
    			p += 4 * ry2 * (2 * x + 1) - 4 * rx2 * 2 * y;
    		}
    	}
    	
    	x = rx;
    	y = 0;
    	p = 4 * rx2 - ry2 * (4 * rx - 1);
    	
    	while( rx2 * y <= ry2 * x ){
    		setEllipsePoint.call(this, xc, yc, x, y);
    		
    		y++;
    		if( p < 0 ){
    			p += 4 * rx2 * (2 * y + 1);
    		}
    		else {
    			x--;
    			p += 4 * rx2 * (2 * y + 1) - 4 * ry2 * 2 * x;
    		}
    	}
}

/**
 * 1/8타원 나머지를 그려주는 midPointEllipse helpler 함수.
 * @param {int} xc 타원의 중심 x값.
 * @param {int} yc 타원의 중심 y값.
 * @param {int} x  1/16타원을 그릴 점 x값.
 * @param {int} y  1/16타원을 그릴 점 y값.
 */

function setEllipsePoint(xc, yc, x, y){
	this.setPixel(xc + x, yc + y);
	if( x === 0 ){
		this.setPixel(xc , yc - y);
    	}
    	else if( y === 0 ){
    		this.setPixel(xc - x, yc );
    	}
    	else{
    		this.setPixel(xc + x, yc - y);
    		this.setPixel(xc - x, yc + y);
    		this.setPixel(xc - x, yc - y);
	}
}