/* exported draw */

/**
 * cash에 저장된 data를 이용하여 canvas에 그린다.
 * @method WebGL.prototype.draw
 * @return {WebGL}
 */
function draw(){
	this.ctx.putImageData(this.cash, this.x, this.y);
	this.cash = this.ctx.getImageData(0, 0, this.width, this.height);
	return this;
}