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
	x = ( x === undefined ) ? 0 : x;
	y = ( y === undefined ) ? 0 : y;
	width = ( width === undefined ) ? this.width : width;
	height = ( height === undefined ) ? this.height : height;
	
	var new_canvas = getCanvas( width, height );
	var layer = new WebGL(new_canvas, x, y, width, height);
	layer.index = this.layers.length;
	this.layers.push(layer);
	return layer;
}

function getCanvas(width, height){
	var canvas = document.createElement('canvas');
	canvas.setAttribute('width', height);
	canvas.setAttribute('height', height);
	return canvas;
}