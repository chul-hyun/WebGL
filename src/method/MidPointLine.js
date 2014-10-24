/* exported MidPointLine */

/**
 * MidPoint 직선 알고리즘
 * @method webGL.prototype.MidPointLine
 * @param  {int} start_x 시작 x값
 * @param  {int} start_y 시작 y값
 * @param  {int} end_x   끝 x값
 * @param  {int} end_y   끝 y값
 */
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