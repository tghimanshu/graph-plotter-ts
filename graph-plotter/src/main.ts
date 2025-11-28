import Graph from "./Graph";

const YGRID = 13.5;
const GRID = 27;

/**
 * Represents a circle (visually a square) on the canvas.
 */
class Circle {
  x: number;
  y: number;
  /**
   * Creates a new Circle instance.
   * @param config - Configuration object.
   * @param config.x - Initial x coordinate (default: 10).
   * @param config.y - Initial y coordinate (default: 10).
   */
  constructor(config: { x?: number; y?: number }) {
    this.x = config.x || 10;
    this.y = config.y || 10;
  }
  /**
   * Draws the circle (as a rectangle) on the given context.
   * @param c - The canvas rendering context.
   */
  draw(c: CanvasRenderingContext2D) {
    c.rect(this.x, this.y, 10, 10);
    c.fill();
  }
  /**
   * Updates the position of the circle and redraws it.
   * @param x - New x coordinate.
   * @param y - New y coordinate.
   * @param ctx - The canvas rendering context.
   */
  update(x: number, y: number, ctx: CanvasRenderingContext2D) {
    this.x = x;
    this.y = y;
    this.draw(ctx);
  }
}

const graph = document.querySelector("#graph") as HTMLCanvasElement;

// initialize Graph
const mainGraph: Graph = new Graph({
  graph: graph,
});

const circle = new Circle({});
circle.draw(mainGraph.ctx);

let x: number = 0;
let y: number = 0;

// Do Mouse Move
/**
 * Handles mouse movement over the canvas.
 * Snaps the calculated coordinates to the nearest grid intersection.
 */
graph.addEventListener("mousemove", function (e: MouseEvent) {
  // x = e.offsetX;
  // y = e.offsetY;

  let xg: number = Math.floor((e.offsetX + GRID / 2) / GRID);
  let yg: number = Math.floor((e.offsetY + YGRID / 2) / YGRID);
  console.log(xg, yg);

  // t = c.find_withtag('le_point')
  if (e.offsetX <= 3 || e.offsetY <= 3) {
    x = xg * GRID - 10;
    y = yg * GRID - 10;
  } else if (e.x >= 374 || e.y >= 365) {
    x = xg * GRID + 10;
    y = yg * GRID + 10;
  } else {
    x = xg * GRID;
    y = yg * YGRID;
  }
});

// Init the Frame
/**
 * Main animation loop.
 * Clears the graph, redraws the grid, and updates the circle position.
 */
function init() {
  mainGraph.clearRect();
  mainGraph.drawGraph();
  circle.update(x, y, mainGraph.ctx);
  requestAnimationFrame(function (time) {
    init();
  });
}
init();

export {};
