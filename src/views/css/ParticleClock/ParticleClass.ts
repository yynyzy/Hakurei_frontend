import { getRandom } from '@@/utils/index'

export class Particle {
  private x: number;
  private y: number;
  private size: number;
  private ctx: CanvasRenderingContext2D | null;

  constructor(canvas: HTMLCanvasElement) {
    const r = Math.min(canvas.width, canvas.height) / 2;
    const cx = canvas.width / 2;
    const cy = canvas.height /2;
    const rad = getRandom(0, 360) * Math.PI / 180;
    this.size = getRandom(2, 7);
    this.x = cx + Math.cos(rad) * r;
    this.y = cy + Math.sin(rad) * r;
    this.ctx = canvas.getContext('2d');
  }

  draw() {
    this.ctx!.beginPath();
    this.ctx!.fillStyle = "#5445544d";
    this.ctx!.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    this.ctx!.fill();
  }

  moveTo(tx: number, ty: number) {
    const duration = 500;
    const _x = this.x;
    const _y = this.y;
    const speedX = Math.abs((tx - _x) / duration);
    const speedY = Math.abs((ty - _y) / duration);
    const startTime = Date.now();
    const _move = () => {
      const t = Date.now() - startTime;
      const x = _x;
      const y = _y;
      this.x = x + speedX * t;
      this.y = y + speedY * t;
      if(t >= duration) {
        this.x = tx;
        this.y = ty;
        return
      }
      requestAnimationFrame(_move);
    }
    _move();
  }
}
