import Bug from './Bug';

class Swarm {
  constructor(size) {
    this.size = size;
    this.bugs = [];

    for (let i = 0; i < this.size; i++) {
      this.bugs.push(new Bug());
    }
  }
}

export default Swarm;
