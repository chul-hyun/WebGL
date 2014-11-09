/* exported draw */

/**
 * cash에 저장된 data를 이용하여 canvas에 그린다.
 * @method WebGL.prototype.draw
 * @return {WebGL}
 */
function draw(){
	this.ctx.putImageData(this.cash, this.x, this.y);
	 return this;
}