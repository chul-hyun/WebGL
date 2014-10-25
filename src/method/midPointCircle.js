/* exported midPointCircle */

/**
 * MidPoint Circle Algorithm 을 구현한 메소드
 * @method WebGL.prototype.midPointCircle
 * @param  {int} xc 원의 중심 x값.
 * @param  {int} yc 원의 중심 y값.
 * @param  {int} radius 원의 반지름
 * @return {WebGL}
 */
function midPointCircle(xc, yc, radius){
	var p, x, y;

	p = 5 - 4 * radius;
	x = 0;
	y = radius;

	while( x <= y ){
		setPoint.call(this, xc, yc, x, y);

		x++;
		if( p < 0 ){
			p += 8 * x + 4;
		}else{
			y--;
			p += 8 * x + 4 - 8 * y;
		}
	}
}

/**
 * 1/8원 나머지를 그려주는 midPointCircle helpler 함수.
 * @param {int} xc 원의 중심 x값.
 * @param {int} yc 원의 중심 y값.
 * @param {int} x  1/8원을 그릴 점 x값.
 * @param {int} y  1/8원을 그릴 점 y값.
 */
function setPoint(xc, yc, x, y){
	this.setPixel(xc + x, yc + y);
	this.setPixel(xc + x, yc - y);
	if( x === 0 ){
		this.setPixel(xc + y, yc + x);
		this.setPixel(xc - y, yc + x);
	}
	else if( x === y ){
		this.setPixel(xc - x, yc + y);
		this.setPixel(xc - x, yc - y);
	}
	else{
		this.setPixel(xc - x, yc + y);
		this.setPixel(xc - x, yc - y);

		this.setPixel(xc + y, yc + x);
		this.setPixel(xc + y, yc - x);

		this.setPixel(xc - y, yc + x);
		this.setPixel(xc - y, yc - x);
	}
}