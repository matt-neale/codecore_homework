class Turtle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction = "east";
    this.position = [[x, y]];
    this.grid = [];
    this.xMax = 0;
    this.yMax = 0;
  }

  forward(steps) {
    for (let i = 0; i < steps; i++) {
      if (this.direction === "east") {
        this.position.push([(this.x += 1), this.y]);
      } else if (this.direction === "south") {
        this.position.push([this.x, (this.y += 1)]);
      } else if (this.direction === "west") {
        this.position.push([(this.x -= 1), this.y]);
      } else {
        this.position.push([this.x, (this.y -= 1)]);
      }
    }
    this.xMax = Math.max(this.x, this.xMax);
    this.yMax = Math.max(this.y, this.yMax);
    return this;
  }
  right() {
    if (this.direction === "east") {
      this.direction = "south";
    } else if (this.direction === "south") {
      this.direction = "west";
    } else if (this.direction === "west") {
      this.direction = "north";
    } else {
      this.direction = "east";
    }
    return this;
  }
  left() {
    if (this.direction === "east") {
      this.direction = "north";
    } else if (this.direction === "north") {
      this.direction = "west";
    } else if (this.direction === "west") {
      this.direction = "south";
    } else {
      this.direction = "east";
    }
    return this;
  }
  allPoints() {
    console.log(this.position);
  }
  print() {
    console.log(`--BEGIN LOG`);
    for (let i = 0; i <= this.yMax; i++) {
      const row = [];
      for (let j = 0; j <= this.xMax; j++) {
        row.push("□");
      }
      this.grid.push(row);
    }
    for (let [i, j] of this.position) {
      this.grid[j][i] = "■";
    }
    for (let row of this.grid) [console.log(row.join(""))];
    console.log(`--END LOG`);
  }
}

new Turtle(0, 4)
  .forward(3)
  .left()
  .forward(3)
  .right()
  .forward(5)
  .right()
  .forward(8)
  .right()
  .forward(5)
  .right()
  .forward(3)
  .left()
  .forward(3)
  .print();
