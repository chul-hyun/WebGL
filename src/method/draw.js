/* exported draw */

/**
 * cash에 저장된 data를 이용하여 canvas에 그린다.
 * @method WebGL.prototype.draw
 * @return {WebGL}
 */
function draw(){
	var layers = this.layers;
	var len = layers.length;
	var i ;
	var layer;

	for( i = 0 ; i < len ; i++) {
		layer = layers[i];
		this.ctx.drawImage(layer.ctx , layer.x, layer.y);
	}

	return this;
}