/**
 * Represents a graph grid on a canvas.
 */
class Graph {
  /**
   * Creates a new Graph instance.
   * @param {Object} config - The configuration object.
   * @param {HTMLCanvasElement} config.graph - The canvas element to draw on.
   * @param {number} [config.X=378] - The width of the graph.
   * @param {number} [config.Y=378] - The height of the graph.
   * @param {number} [config.GRID=27] - The grid spacing size.
   * @param {number} [config.YGRID=13.5] - The vertical grid spacing size.
   */
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
  /**
   * Draws the graph grid lines on the canvas.
   * Handles both solid and dashed lines for specific frequencies.
   */
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
