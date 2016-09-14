class app {
  constructor(context) {
    this.context = context;
  }

  run() {
    this.context.fillStyle = 'green';
    this.context.fillRect(0, 0, 700, 700);  
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('screen');
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  
  let runner = new app(canvas.getContext('2d'));
  runner.run();
});

// window.addEventListener('resize', function(){
//     alert('here');
// });
