/* exported clear */

/**
 * canvas를 지운다.
 * @method WebGL.prototype.clear
 * @return {WebGL}
 */
function clear( x , y , w , h ){
	this.ctx.save();
	this.ctx.setTransform(1, 0, 0, 1, 0, 0);
	this.ctx.clearRect(0, 0, this.width, this.height);
	this.ctx.restore();
	 
	var layers = this.layers;
	var len = layers.length;
	var i ;
	var layer;

	for( i = 0 ; i < len ; i++) {
		layer = layers[i];
		
		layer.ctx.save();
		layer.ctx.setTransform(1, 0, 0, 1, 0, 0);
		layer.ctx.clearRect(0, 0, layer.width, layer.height);
		layer.ctx.restore();
	}
	
	 return this;
}