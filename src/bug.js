class Bug {
  constructor(swarm) {
    this.x = Math.random();
    this.y = Math.random();
    this.deltaX = 0;
    this.deltaY = 0;
    this.swarm = swarm;
  }

  findLeader() {
    let sample = [];

    while (sample.length < this.swarm.size / 10) {
      let bug = this.swarm.bugs[Math.floor(Math.random() * this.swarm.size)];

      if (this !== bug) {
        sample.push(bug);
      }
    }

    var leader = sample[0];
    var leaderDistance = this.distanceToSquared(leader);

    for (let i = 1; i < sample.length; i++) {
      let bug = sample[i];

      if(this.distanceToSquared(bug) < leaderDistance) {
        leader = bug;
      }
    }

    this.leader = leader;
  }

  step() {
    if(Math.random() < .01) {
      this.findLeader();
    }

    let delta = .001;
    this.deltaX += this.x < this.leader.x ? delta : -delta;
    this.deltaY += this.y < this.leader.y ? delta : -delta;

    let maxDelta = .01;
    this.deltaX = Math.min(maxDelta, Math.max(this.deltaX, -maxDelta));
    this.deltaY = Math.min(maxDelta, Math.max(this.deltaY, -maxDelta));
    
    this.x += this.deltaX;
    this.y += this.deltaY;

    this.x = this.x < 1 ? this.x : -this.x;
    this.y = this.y < 1 ? this.y : -this.y;
  }

  distanceToSquared(other) {
    let differenceInX = this.x - other.x;
    let differenceInY = this.y - other.y;

    return (differenceInX * differenceInX) + (differenceInY * differenceInY);
  }
}

export default Bug;
