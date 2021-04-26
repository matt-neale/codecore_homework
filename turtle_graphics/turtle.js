class Turtle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction = "east";
    this.position = [[x, y]];
  }
  grid = "";

  forward(steps) {
    if (this.direction === "east") {
      return this.position.push((this.x += steps), this.y);
    } else if (this.direction === "south") {
      return this.position.push(this.x, (this.y += steps));
    } else if (this.direction === "west") {
      return this.position.push((this.x -= steps), this.y);
    } else {
      return this.position.push(this.x, (this.y -= steps));
    }
  }
  right() {
    if (this.direction === "east") {
      return (this.direction = "south");
    } else if (this.direction === "south") {
      return (this.direction = "west");
    } else if (this.direction === "west") {
      return (this.direction = "north");
    } else {
      return (this.direction = "east");
    }
  }
  left() {
    if (this.direction === "east") {
      return (this.direction = "north");
    } else if (this.direction === "north") {
      return (this.direction = "west");
    } else if (this.direction === "west") {
      return (this.direction = "south");
    } else {
      return (this.direction = "east");
    }
  }
  allPoints() {
    return console.log(this.position);
  }
  print() {
    let xMin = -100;
    let xMax = 100;
    let yMin = -100;
    let yMax = 100;

    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        if (i === this.position[(x, y)]) {
          console.log(`■`);
        } else {
          console.log(`□`);
        }
      }
    }
  }
}

const flash = new Turtle(0, 0).forward(3);

flash.allPoints();
