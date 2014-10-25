/* exported save */

/**
 * 현제 화면을 배경으로 저장한다.
 * @method WebGL.prototype.save
 * @return {WebGL}
 */
function save(){
	  this.bg = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
	  return this;
}