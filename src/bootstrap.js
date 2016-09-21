import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('screen');
  let context = canvas.getContext('2d');
  let width = document.body.clientWidth;
  let height = document.body.clientHeight;
  let swarmSize = 300;
  let runner = new App(canvas, context, width, height, swarmSize);
  
  let pump = () => {
    runner.step();
    window.requestAnimationFrame(pump);
  };

  window.requestAnimationFrame(pump);

  window.addEventListener('resize', () => {
    runner.setSize(document.body.clientWidth, document.body.clientHeight);
  });
});
