/* exported clear */

/**
 * canvas를 지운다.
 * @method WebGL.prototype.clear
 * @return {WebGL}
 */
function clear( x , y , w , h ){
	 this.canvas.width = this.width;
	 
	 var layers = this.layers;
	var len = layers.length;
	var i ;
	var layer;

	for( i = 0 ; i < len ; i++) {
		layer = layers[i];
		layer.canvas.width = layer.width;
	}
	
	 return this;
}