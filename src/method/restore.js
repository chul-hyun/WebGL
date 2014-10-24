/* exported restore */

/**
 * restore
 * @method webGL.prototype.restore
 */
function restore(){
	this.ctx.putImageData(this.bg, 0, 0);
}