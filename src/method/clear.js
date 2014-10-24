/* exported clear */

/**
 * clear
 * @method webGL.prototype.clear
 */
function clear(){
	 this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}