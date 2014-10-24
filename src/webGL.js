/**
 * 책 보고 구현해보는 openGL.
 * @class webGL
 * @param  {Element} canvas canvas element
 * @returns {webGL}
 */
function webGL(canvas){
	this.ctx = canvas.getContext('2d');
	this.canvas = canvas;
}

/* global setPixel, DDALine, BHLine, MidPointLine, save, restore, clear */
webGL.prototype.setPixel     = setPixel;
webGL.prototype.DDALine      = DDALine;
webGL.prototype.BHLine       = BHLine;
webGL.prototype.MidPointLine = MidPointLine;
webGL.prototype.save         = save;
webGL.prototype.restore      = restore;
webGL.prototype.clear        = clear;