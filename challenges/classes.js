console.log("/////////////// CLASSES ///////////////");
// 1. Copy and paste your prototype in here and refactor into class syntax.

// old constructor
/*
function CuboidMaker(attr) {
  this.length = attr.length;
  this.width = attr.width;
  this.height = attr.height;
}

CuboidMaker.prototype.volume = function() {
  return this.length * this.width * this.height;
};

CuboidMaker.prototype.surfaceArea = function() {
  return (
    2 *
    (this.length * this.width +
      this.length * this.height +
      this.width * this.height)
  );
};
*/

// new class
class CuboidMaker2 {
  constructor(attr) {
    this.length = attr.length | null;
    this.width = attr.width | null;
    this.height = attr.height | null;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const cuboid2 = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
  constructor(cubeattr) {
    super(cubeattr);
    this.edge = cubeattr.edge;
  }
  cubeVolume() {
    return Math.pow(this.edge, 3);
  }
  cubeSurfaceArea() {
    return 6 * Math.pow(this.edge, 2);
  }
}

const cube = new CubeMaker({
  edge: 5
});

console.log(cube);
console.log(cube.cubeVolume()); // 125
console.log(cube.cubeSurfaceArea()); // 150
