/**
 * 책 보고 구현해보는 openGL.
 * @class WebGL
 * @param  {Element} canvas canvas element
 * @returns {WebGL}
 */
function WebGL(canvas){
	/**
	 * canvas context
	 * @member WebGL.prototype.ctx
	 * @type {Object}
	 */
	this.ctx = canvas.getContext('2d');
	/**
	 * canvas element
	 * @member WebGL.prototype.canvas
	 * @type {Element}
	 */
	this.canvas = canvas;
}

/* exported WebGL */
/* jshint ignore:start */
WebGL.prototype.setPixel					= setPixel;
WebGL.prototype.DDALine					= DDALine;
WebGL.prototype.BHLine					= BHLine;
WebGL.prototype.midPointLine				= midPointLine;
WebGL.prototype.save						= save;
WebGL.prototype.restore					= restore;
WebGL.prototype.clear					= clear;
WebGL.prototype.midPointCircle			= midPointCircle;
WebGL.prototype.midPointCircleSolid		= midPointCircleSolid;
WebGL.prototype.midPointEllipse			= midPointEllipse;
WebGL.prototype.midPointEllipseSolid		= midPointEllipseSolid;
/* jshint ignore:end */