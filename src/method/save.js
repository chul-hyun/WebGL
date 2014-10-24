/* exported save */

/**
 * save
 * @method webGL.prototype.save
 */
function save(){
	  this.bg = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
}