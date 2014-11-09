/**
 * layer 생성 및 반환.
 * @method WebGL.prototype.getLayer
 * @param {Number} [x=0]      start x
 * @param {Number} [y=0]      start y
 * @param {Number} [width=canvas.width]  width
 * @param {Number} [height=canvas.width]  height
 * @returns {WebGL}
 */

/* exported getLayer */
function getLayer(x, y, width, height){
	var layer = new WebGL(this.canvas, x, y, width, height);
	layer.index = this.layers.length;
	this.layers.push(layer);
	return layer;
}