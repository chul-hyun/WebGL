/* exported clear */

/**
 * canvas를 지운다.
 * @method WebGL.prototype.clear
 * @return {WebGL}
 */
function clear( x , y , w , h ){
	 this.canvas.width = this.width;
	 //layers 까지?
	 return this;
}