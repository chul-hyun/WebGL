/**
 * 책 보고 구현해보는 openGL.
 * @class webGL
 * @param  {Element} canvas canvas element
 * @returns {webGL}
 */
function webGL(canvas){
	this.ctx = canvas.getContext('2d');
}

webGL.prototype.setPixel     = setPixel;
webGL.prototype.DDALine      = DDALine;
webGL.prototype.BHLine       = BHLine;
webGL.prototype.MidPointLine = MidPointLine;