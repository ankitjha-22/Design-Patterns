/*
The Builder Pattern is a creational design pattern that is used to construct a complex object step by step. 
It allows you to produce different types and representations of an object using the same construction process. 
The pattern is particularly useful when an object has a large number of parameters or configuration options, and 
you want to provide a more readable and maintainable way to create instances of that object.
*/

// Product class
class House {
  constructor() {
    this.foundation = "";
    this.walls = "";
    this.roof = "";
  }

  describe() {
    console.log(
      `House with foundation: ${this.foundation}, walls: ${this.walls}, roof: ${this.roof}`
    );
  }
}

// Builder class
class HouseBuilder {
  constructor() {
    this.house = new House();
  }

  buildFoundation(foundation) {
    this.house.foundation = foundation;
    return this;
  }

  buildWalls(walls) {
    this.house.walls = walls;
    return this;
  }

  buildRoof(roof) {
    this.house.roof = roof;
    return this;
  }

  getResult() {
    return this.house;
  }
}

// Client code
const builder = new HouseBuilder();
const house = builder
  .buildFoundation("Concrete")
  .buildWalls("Brick")
  .buildRoof("Tile")
  .getResult();

house.describe();
