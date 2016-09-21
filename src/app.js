import Swarm from './Swarm';

class App {
  constructor(canvas, context, width, height, swarmSize) {
    this.canvas = canvas;
    this.context = context;
    this.setSize(width, height);
    this.swarm = new Swarm(swarmSize);
  }

  step() {
    this.swarm.step();

    this.context.fillStyle = 'white';
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.fillStyle = 'black';

    let bugSize = 3;

    let boundingWidth = this.width / 2;
    let boundingHeight = this.height / 2;
    let translateX = this.width / 4;
    let translateY = this.height / 4;
    
    this.swarm.bugs.forEach((bug) => {
      let x = (bug.x * boundingWidth) + translateX;
      let y = (bug.y * boundingHeight) + translateY;
      this.context.fillRect(x, y, bugSize, bugSize);
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
