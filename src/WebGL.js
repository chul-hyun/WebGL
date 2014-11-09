 
/**
 * 책 보고 구현해보는 openGL.
 * @class WebGL
 * @param {Element} canvas canvas element
 * @param {Number} [x=0]      start x
 * @param {Number} [y=0]      start y
 * @param {Number} [width=canvas.width]  width
 * @param {Number} [height=canvas.width]  height
 * @returns {WebGL}
 */
function WebGL(canvas, x, y, width, height){
	if( _.isUndefined(canvas) ){
		throw new Error();
	}
	/**
	 * start x
	 * @type {Number}
	 */
	this.x = ( _.isUndefined(x) ) ? 0 : x;
	/**
	 * start y
	 * @type {Number}
	 */
	this.y = ( _.isUndefined(y) ) ? 0 : y;
	/**
	 * width
	 * @type {Number}
	 */
	this.width = ( _.isUndefined(width) ) ? canvas.width : width;
	/**
	 * height
	 * @type {Number}
	 */
	this.height = ( _.isUndefined(height) ) ? canvas.height : height;
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
	/**
	 * imgData cash
	 * @member WebGL.prototype.cash
	 * @type {ImageData}
	 */
	this.cash = ctx.createImageData(this.width, this.height);
	/**
	 * sub WebGL.
	 * @member WebGL.prototype.layers
	 * @type {WebGLArray}
	 */
	this.layers = [];
	/**
	 * parent WebGL's layers index
	 * @member WebGL.prototype.index
	 * @type {Number}
	 */
	this.index = -1;
}

/* exported WebGL */
/* jshint ignore:start */
WebGL.prototype.setPixel					= setPixel;
WebGL.prototype.DDALine				= DDALine;
WebGL.prototype.BHLine					= BHLine;
WebGL.prototype.midPointLine			= midPointLine;
WebGL.prototype.save					= save;
WebGL.prototype.restore					= restore;
WebGL.prototype.clear					= clear;
WebGL.prototype.midPointCircle			= midPointCircle;
WebGL.prototype.midPointCircleSolid		= midPointCircleSolid;
WebGL.prototype.midPointEllipse			= midPointEllipse;
WebGL.prototype.midPointEllipseSolid	= midPointEllipseSolid;
WebGL.prototype.getLayer				= getLayer;
WebGL.prototype.draw					= draw;
/* jshint ignore:end */