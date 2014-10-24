/* exported DDALine */

/**
 * DDA 직선 알고리즘
 * @method webGL.prototype.DDALine
 * @param  {int} start_x 시작 x값
 * @param  {int} start_y 시작 y값
 * @param  {int} end_x   끝 x값
 * @param  {int} end_y   끝 y값
 */
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