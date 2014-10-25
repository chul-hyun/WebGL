/* exported restore */

/**
 * 배경으로 복구한다.
 * @method WebGL.prototype.restore
 * @return {WebGL}
 */
function restore(){
	this.ctx.putImageData(this.bg, 0, 0);
	return this;
}