window.onload = function () {
  // Graph Context
  const graph = document.querySelector("#graph");
  const c = graph.getContext("2d");

  // Graph
  const graph_axis = document.querySelector("#graph-img");

  // Globals
  const X = 378;
  const Y = 378;
  const GRID = 27;
  const YGRID = 13.5;

  function draw_graph() {
    for (let i = 0; i <= Y + GRID; i += GRID) {
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

  class Rect {
    constructor() {
      this.x = 0;
      this.y = 0;
    }
    draw() {
      c.rect(this.x, this.y, 10, 10);
      c.fill();
    }
    update(x, y) {
      this.x = x;
      this.y = y;
      this.draw();
    }
  }

  let firstRect = new Rect();
  firstRect.draw();
  let rectX = 0;
  let rectY = 0;

  graph.addEventListener("mousemove", function (e) {
    rectX = e.layerX;
    rectY = e.layerY;
  });

  function animate() {
    c.clearRect(0, 0, 378, 378);
    draw_graph();
    firstRect.update(rectX, rectY);
    requestAnimationFrame(animate);
  }
  animate();
};
