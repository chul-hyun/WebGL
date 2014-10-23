/**
 * Bresenham 직선 알고리즘
 * @method webGL.prototype.BHLine
 * @param  {int} start_x 시작 x값
 * @param  {int} start_y 시작 y값
 * @param  {int} end_x   끝 x값
 * @param  {int} end_y   끝 y값
 */
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