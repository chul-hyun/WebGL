/**
 * 점을 찍는 메소드.
 * @method WebGL.prototype.setPixel
 * @param {int} x x좌표값
 * @param {int} y y좌표값
 * @param {Array} 색깔 정보값(0~255 범위) [rad, green, bule, alpha]
 * @return {WebGL}
 */

/* exported setPixel */
function setPixel(x, y, rgba){
	if( _.isUndefined(rgba) ){
		rgba = [255, 255, 255, 255];
	}
	var pos = x + this.width * y;

	_.times(4, function(i){
		this.cash.data[pos+i] = rgba[i];
	}, this);

	return this;
}