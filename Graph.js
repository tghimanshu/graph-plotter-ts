class Graph {
  constructor(config) {
    // Globals
    this.X = config.X || 378;
    this.Y = config.Y || 378;
    this.GRID = config.GRID || 27;
    this.YGRID = config.YGRID || 13.5;

    // image
    this.graph = config.graph;
    this.ctx = this.graph.getContext("2d");
  }
  drawGraph() {
    for (let i = 0; i <= this.Y + this.GRID; i += this.GRID) {
      c.moveTo(0, i);
      c.lineTo(X, i);
      c.stroke();
    }
    for (let i = 0; i < X + GRID; i += GRID) {
      if (i % 2 === 0 && i !== 0) {
        if (i < 150) {
          continue;
        }
        if (i > 350) {
          c.beginPath();
          c.setLineDash([]);
          c.moveTo(i, 0);
          c.lineTo(i, Y);
          c.stroke();
        }
        c.beginPath();
        c.setLineDash([2, 2]);
        c.moveTo(i, 0);
        c.lineTo(i, Y);
        c.stroke();
      } else {
        c.beginPath();
        c.setLineDash([]);
        c.moveTo(i, 0);
        c.lineTo(i, Y);
        c.stroke();
      }
    }
  }
}
