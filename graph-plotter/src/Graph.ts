class Graph {
  graph: HTMLCanvasElement;
  X: number;
  Y: number;
  GRID: number;
  YGRID: number;
  ctx: CanvasRenderingContext2D;

  constructor(config: {
    graph: HTMLCanvasElement;
    X?: number;
    Y?: number;
    GRID?: number;
    YGRID?: number;
  }) {
    // Globals
    this.X = config.X || 378;
    this.Y = config.Y || 378;
    this.GRID = config.GRID || 27;
    this.YGRID = config.YGRID || 13.5;

    // image
    this.graph = config.graph;
    this.ctx = this.graph.getContext("2d") as CanvasRenderingContext2D;
  }
  drawGraph() {
    for (let i = 0; i <= this.Y + this.GRID; i += this.GRID) {
      this.ctx.moveTo(0, i);
      this.ctx.lineTo(this.X, i);
      this.ctx.stroke();
    }
    for (let i = 0; i < this.X + this.GRID; i += this.GRID) {
      if (i % 2 === 0 && i !== 0) {
        // Skip Lines
        if (i < 150) {
          continue;
        }
        // Normal Lines
        if (i > 350) {
          this.ctx.beginPath();
          this.ctx.setLineDash([]);
          this.ctx.moveTo(i, 0);
          this.ctx.lineTo(i, this.Y);
          this.ctx.stroke();
        }
        // Dashed Lines
        this.ctx.beginPath();
        this.ctx.setLineDash([2, 2]);
        this.ctx.moveTo(i, 0);
        this.ctx.lineTo(i, this.Y);
        this.ctx.stroke();
      } else {
        // Normal Lines
        this.ctx.beginPath();
        this.ctx.setLineDash([]);
        this.ctx.moveTo(i, 0);
        this.ctx.lineTo(i, this.Y);
        this.ctx.stroke();
      }
    }
  }
  init() {
    this.drawGraph();
  }

  clearRect() {
    this.ctx.clearRect(0, 0, this.X, this.Y);
  }
}

export default Graph;
