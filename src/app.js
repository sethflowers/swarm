import Swarm from './Swarm';

class App {
  constructor(canvas, context, width, height, swarmSize) {
    this.canvas = canvas;
    this.context = context;
    this.setSize(width, height);
    this.swarm = new Swarm(swarmSize);
  }

  step() {
    this.context.fillStyle = 'white';
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.fillStyle = 'black';

    this.swarm.bugs.forEach((bug) => {
      let x = bug.x * this.width;
      let y = bug.y * this.height;
      this.context.fillRect(x, y, 10, 10);
    });
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;
  }
}

export default App;
