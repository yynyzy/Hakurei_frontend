class Sakura {

  // 花瓣的坐标
  private x: number;
  private y: number;
  // 花瓣的宽高
  private width: number;
  private height: number;
  // 透明度
  private opacity: number;
  private rotate: number;
  // 速度
  private speedX: number;
  private speedY: number;
  private speedRotate: number;

  private canvasWidth: number;
  private canvasHeight: number;
  // 花瓣图片
  private SakuraImg: HTMLImageElement;
  private ctx: CanvasRenderingContext2D

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, SakuraImg: HTMLImageElement) {
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.SakuraImg = SakuraImg;
    this.ctx = ctx;
    this.x = Math.random() * this.canvasWidth;
    this.y = (Math.random() * this.canvasHeight * 2) * this.canvasHeight;
    this.width = Math.random() * 15 + 25;
    this.height = Math.random() * 15 + 20;
    this.opacity = this.width / 50;
    this.rotate = Math.random();
    this.speedX = Math.random() * 2 + 1;
    this.speedY = Math.random() + 1.5;
    this.speedRotate = Math.random() * 0.02;
  }

  draw() {
    if (this.x > this.canvasWidth || this.y > this.canvasHeight) {
      this.x = -this.SakuraImg.width;
      this.y = (Math.random() * this.canvasHeight * 2) - this.canvasHeight;
      this.rotate = Math.random();
      this.speedX = Math.random() * 2 + 1;
      this.speedY = Math.random() + 1.5;
      this.speedRotate = Math.random() * 0.02;
    }

    this.ctx.globalAlpha = this.opacity;
    this.ctx.drawImage(
      this.SakuraImg,
      this.x,
      this.y,
      this.width * (0.6 + (Math.abs(Math.cos(this.rotate)) / 3)),
      this.height * (0.6 + (Math.abs(Math.sin(this.rotate)) / 5)),
    )
  }

  animate(mouseX: number = 0) {
    this.x += this.speedX + mouseX * 5;
    this.y += this.speedY + mouseX * 2;
    this.rotate += this.speedRotate;
    this.draw();
  }
}

export default Sakura;
