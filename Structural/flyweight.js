// Flyweight
class Flyweight {
  constructor(name) {
    this.name = name;
  }

  operation() {
    console.log(`Flyweight: ${this.name}`);
  }
}

// Flyweight Factory
class FlyweightFactory {
  constructor() {
    this.flyweights = {};
  }

  getFlyweight(name) {
    if (!this.flyweights[name]) {
      this.flyweights[name] = new Flyweight(name);
    }
    return this.flyweights[name];
  }
}

// Client code
const factory = new FlyweightFactory();
const flyweight1 = factory.getFlyweight("Shared");
const flyweight2 = factory.getFlyweight("Shared");
flyweight1.operation(); // Flyweight: Shared
flyweight2.operation(); // Flyweight: Shared

const flyweight3 = factory.getFlyweight("Unique");
flyweight3.operation(); // Flyweight: Unique
