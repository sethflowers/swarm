import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('screen');
  let context = canvas.getContext('2d');  
  let runner = new App(canvas, context);

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
