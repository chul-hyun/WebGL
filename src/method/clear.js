/* exported clear */

/**
 * cash를  비운다.
 * @method WebGL.prototype.clear
 * @return {WebGL}
 */
function clear(){
	 this.cash = ctx.createImageData(this.width, this.height);
	 return this;
}