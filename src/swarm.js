class app {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
  }

  step() {
    this.context.fillStyle = Math.random() > .5 ? 'white' : 'black';
    this.context.fillRect(0, 0, this.width, this.height);  
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('screen');
  let context = canvas.getContext('2d');  
  let runner = new app(canvas, context);

  runner.setSize(document.body.clientWidth, document.body.clientHeight);
  
  let pump = () => {
    runner.step();
    window.requestAnimationFrame(pump);
  };

  window.requestAnimationFrame(pump);

  window.addEventListener('resize', () => {
    runner.setSize(document.body.clientWidth, document.body.clientHeight);
  });
});
