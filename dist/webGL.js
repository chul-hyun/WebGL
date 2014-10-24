
(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory(require, exports, module);
    }
    else if(typeof define === 'function' && define.amd) {
        define(['require', 'exports', 'module'], factory);
    }
    else {
        var req = function(id) {return root[id];},
            exp = root,
            mod = {exports: exp};
        root['webGL'] = factory(req, exp, mod);
    }
}(this, function(require, exports, module) {


/**
 * Bresenham 직선 알고리즘
 * @method webGL.prototype.BHLine
 * @param  {int} start_x 시작 x값
 * @param  {int} start_y 시작 y값
 * @param  {int} end_x   끝 x값
 * @param  {int} end_y   끝 y값
 */

/* exported BHLine */
function BHLine(start_x, start_y, end_x, end_y){
	var dx = Math.abs( end_x - start_x ),
		dy = Math.abs( end_y - start_y );

	var twoDy = 2 * dy, twoDyMinusDx = 2 * (dy - dx);
	var twoDx = 2 * dx, twoDxMinusDy = 2 * (dx - dy);

	var draw_x, draw_y, p;

	var m = (end_y - start_y) / (end_x - start_x);

	if( 0 < m && m < 1 ){
		p = 2 * dy - dx;

		if( start_x > end_x ){
			draw_x = end_x;
			draw_y = end_y;
			end_x = start_x;
		}else{
			draw_x = start_x;
			draw_y = start_y;
		}

		while(draw_x <= end_x){
			this.setPixel(draw_x, draw_y);
			
			if(p < 0){
				p += twoDy;
			}else{
				draw_y++;
				p += twoDyMinusDx;
			}
			draw_x++;
		}
	}
	
	if( 1 < m && m < Infinity){
		p = 2 * dx - dy;

		if( start_y > end_y ){
			draw_x = end_x;
			draw_y = end_y;
			end_y = start_y;
		}else{
			draw_x = start_x;
			draw_y = start_y;
		}

		while(draw_y <= end_y){
			this.setPixel(draw_x, draw_y);
			
			if(p < 0){
				p += twoDx;
			}else{
				draw_x++;
				p += twoDxMinusDy;
			}
			draw_y++;
		}
	}

	if( -1 < m && m < 0 ){
		p = 2 * dy - dx;

		if( start_x < end_x ){
			draw_x = end_x;
			draw_y = end_y;
			end_x = start_x;
		}else{
			draw_x = start_x;
			draw_y = start_y;
		}

		while(draw_x >= end_x){
			this.setPixel(draw_x, draw_y);
			
			if(p < 0){
				p += twoDy;
			}else{
				draw_y++;
				p += twoDyMinusDx;
			}
			draw_x--;
		}
	}

	if( -Infinity < m && m < -1 ){
		p = 2 * dx - dy;

		if( start_y < end_y ){
			draw_x = end_x;
			draw_y = end_y;
			end_y = start_y;
		}else{
			draw_x = start_x;
			draw_y = start_y;
		}

		while(draw_y >= end_y){
			this.setPixel(draw_x, draw_y);
			
			if(p < 0){
				p += twoDx;
			}else{
				draw_x++;
				p += twoDxMinusDy;
			}
			draw_y--;
		}
	}

	if( m === 0){
		if( start_x > end_x ){
			draw_x = end_x;
			draw_y = end_y;
			end_x = start_x;
		}else{
			draw_x = start_x;
			draw_y = start_y;
		}

		while(draw_x <= end_x){
			this.setPixel(draw_x, draw_y);
			draw_x++;
		}
	}

	if( m === Infinity || m === -Infinity ){
		if( start_y > end_y ){
			draw_x = end_x;
			draw_y = end_y;
			end_y = start_y;
		}else{
			draw_x = start_x;
			draw_y = start_y;
		}

		while(draw_y <= end_y){
			this.setPixel(draw_x, draw_y);
			draw_y++;
		}
	}

	if( m === 1 ){
		if( start_y > end_y ){
			draw_x = end_x;
			draw_y = end_y;
			end_y = start_y;
		}else{
			draw_x = start_x;
			draw_y = start_y;
		}

		while(draw_y <= end_y){
			this.setPixel(draw_x, draw_y);
			draw_y++;
			draw_x++;
		}
	}

	if( m === -1 ){
		if( start_y < end_y ){
			draw_x = end_x;
			draw_y = end_y;
			end_y = start_y;
		}else{
			draw_x = start_x;
			draw_y = start_y;
		}

		while(draw_y >= end_y){
			this.setPixel(draw_x, draw_y);
			draw_y--;
			draw_x++;
		}
	}
}
/**
 * DDA 직선 알고리즘
 * @method webGL.prototype.DDALine
 * @param  {int} start_x 시작 x값
 * @param  {int} start_y 시작 y값
 * @param  {int} end_x   끝 x값
 * @param  {int} end_y   끝 y값
 */

/* exported DDALine */
function DDALine(start_x, start_y, end_x, end_y){
	var dx = end_x - start_x,
		dy = end_y - start_y;

	var steps = (Math.abs(dx) > Math.abs(dy)) ? Math.abs(dx) : Math.abs(dy),
		step;

	var xIncrement = dx / steps,
		yIncrement = dy / steps;

	var draw_x = start_x,
		draw_y = start_y;

	this.setPixel(Math.round(draw_x), Math.round(draw_y));

	for(step = 0 ; step < steps ; step++){
		draw_x += xIncrement;
		draw_y += yIncrement;
		this.setPixel(Math.round(draw_x), Math.round(draw_y));
	}
}
/**
 * MidPoint 직선 알고리즘
 * @method webGL.prototype.MidPointLine
 * @param  {int} start_x 시작 x값
 * @param  {int} start_y 시작 y값
 * @param  {int} end_x   끝 x값
 * @param  {int} end_y   끝 y값
 */

/* exported MidPointLine */
function MidPointLine(start_x, start_y, end_x, end_y){
	var dx = Math.abs( end_x - start_x ),
		dy = Math.abs( end_y - start_y );

	var twoDy = 2 * dy;
	var twoDx = 2 * dx;

	var sx = ( end_x >= start_x ) ? 1 : -1;
	var sy = ( end_y >= start_y ) ? 1 : -1;

	var draw_x, draw_y, p;

	if( dx >= dy ){
		p = 2 * dy - dx;
		draw_x = start_x;
		draw_y = start_y;

		while( 0 <= (end_x - draw_x) * sx){
			this.setPixel(draw_x, draw_y);

			draw_x += sx;
			p += twoDy;
			if( p >= 0 ){
				draw_y += sy;
				p -= twoDx;
			}
		}
	}
	else{
		p = 2 * dx - dy;
		draw_x = start_x;
		draw_y = start_y;

		while( 0 <= (end_y - draw_y) * sy){
			this.setPixel(draw_y, draw_x);

			draw_y += sy;
			p += twoDx;
			if( p >= 0 ){
				draw_x += sx;
				p -= twoDy;
			}
		}
	}
}
/**
 * 점을 찍는 메소드.
 * @method webGL.prototype.setPixel
 * @param {int} x x좌표값
 * @param {int} y y좌표값
 */

/* exported setPixel */
function setPixel(x, y){
	this.ctx.fillRect(x, y, 1, 1);
}
/**
 * 책 보고 구현해보는 openGL.
 * @class webGL
 * @param  {Element} canvas canvas element
 * @returns {webGL}
 */
function webGL(canvas){
	this.ctx = canvas.getContext('2d');
}

/* global setPixel, DDALine, BHLine, MidPointLine */
webGL.prototype.setPixel     = setPixel;
webGL.prototype.DDALine      = DDALine;
webGL.prototype.BHLine       = BHLine;
webGL.prototype.MidPointLine = MidPointLine;
return webGL;
}));