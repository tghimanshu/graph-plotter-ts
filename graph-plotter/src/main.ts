import Graph from "./Graph";

const YGRID = 13.5;
const GRID = 27;

class Circle {
  x: number;
  y: number;
  constructor(config: { x?: number; y?: number }) {
    this.x = config.x || 10;
    this.y = config.y || 10;
  }
  draw(c: CanvasRenderingContext2D) {
    c.rect(this.x, this.y, 10, 10);
    c.fill();
  }
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
