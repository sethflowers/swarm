class App {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
  }

  step() {
    this.context.fillStyle = Math.random() > .5 ? 'red' : 'black';
    this.context.fillRect(0, 0, this.width, this.height);  
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;
  }
}

export default App;
