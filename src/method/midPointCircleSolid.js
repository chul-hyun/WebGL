/* exported midPointCircleSolid */

/**
 * MidPoint Circle Algorithm 을 구현한 메소드 (solid)
 * @method WebGL.prototype.midPointCircleSolid
 * @param  {int} xc 원의 중심 x값.
 * @param  {int} yc 원의 중심 y값.
 * @param  {int} radius 원의 반지름
 * @return {WebGL}
 */
function midPointCircleSolid(xc, yc, radius){
	var p, x, y;

	p = 5 - 4 * radius;
	x = 0;
	y = radius;

	while( x <= y ){
		setPointSolid.call(this, xc, yc, x, y, p);

		x++;
		if( p < 0 ){
			p += 8 * x + 4;
		}else{
			y--;
			p += 8 * x + 4 - 8 * y;
		}
	}

	return this;
}

/**
 * 1/8원 나머지를 채워주는 midPointCircleSolid helpler 함수.
 * @method WebGL.prototype.setPointSolid
 * @private
 * @param {int} xc 원의 중심 x값.
 * @param {int} yc 원의 중심 y값.
 * @param {int} x  1/8원을 그릴 점 x값.
 * @param {int} y  1/8원을 그릴 점 y값.
 * @param {int} pmode 양수면 선까지 잇고 음수면 점만 찍는다.
 */
function setPointSolid(xc, yc, x, y, pmode){
	if( x === 0 ){
		this.setPixel(xc + x, yc + y);
		this.setPixel(xc + x, yc - y);

		this.midPointLine(xc - y, yc, xc + y, yc);
	}
	else if( x === y ){
		this.midPointLine(xc - x, yc + y, xc + x, yc + y);
		this.midPointLine(xc - x, yc - y, xc + x, yc - y);
	}
	else{
		if( pmode < 0 ){
			this.setPixel(xc + x, yc + y);
			this.setPixel(xc + x, yc - y);
			this.setPixel(xc - y, yc + x);
			this.setPixel(xc - y, yc - x);
		}else{
			this.midPointLine(xc - x, yc + y, xc + x, yc + y);
			this.midPointLine(xc - x, yc - y, xc + x, yc - y);
		}
		this.midPointLine(xc - y, yc + x, xc + y, yc + x);
		this.midPointLine(xc - y, yc - x, xc + y, yc - x);
	}
}