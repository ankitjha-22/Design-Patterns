// Implementor Interface
class DrawingAPI {
  drawCircle(radius, x, y) {
    throw "Method 'drawCircle' should be implemented";
  }
}

// Concrete Implementor 1
class DrawingAPI1 extends DrawingAPI {
  drawCircle(radius, x, y) {
    console.log(
      `Drawing circle with radius ${radius} at (${x}, ${y}) using API 1`
    );
  }
}

// Concrete Implementor 2
class DrawingAPI2 extends DrawingAPI {
  drawCircle(radius, x, y) {
    console.log(
      `Drawing circle with radius ${radius} at (${x}, ${y}) using API 2`
    );
  }
}

// Abstraction
class Shape {
  constructor(drawAPI) {
    this.drawAPI = drawAPI;
  }

  draw() {
    throw "Method 'draw' should be implemented";
  }
}

// Refined Abstraction
class Circle extends Shape {
  constructor(radius, x, y, drawAPI) {
    super(drawAPI);
    this.radius = radius;
    this.x = x;
    this.y = y;
  }

  draw() {
    this.drawAPI.drawCircle(this.radius, this.x, this.y);
  }
}

// Client code
const api1 = new DrawingAPI1();
const api2 = new DrawingAPI2();

const circle1 = new Circle(10, 0, 0, api1);
circle1.draw(); // API 1

const circle2 = new Circle(5, 5, 5, api2);
circle2.draw(); // API 2
