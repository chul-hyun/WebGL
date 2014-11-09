/* exported clear */

/**
 * 화면을 모두 지운다.
 * @method WebGL.prototype.clear
 * @return {WebGL}
 */
function clear(){
	 this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	 this.bg = undefined;
	 return this;
}