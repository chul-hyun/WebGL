/**
 * 점을 찍는 메소드.
 * @method webGL.prototype.setPixel
 * @param {int} x x좌표값
 * @param {int} y y좌표값
 */
function setPixel(x, y){
	this.ctx.fillRect(x, y, 1, 1);
}