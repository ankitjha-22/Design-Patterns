// Subsystem 1
class Subsystem1 {
  operation1() {
    console.log("Subsystem1 operation1");
  }
}

// Subsystem 2
class Subsystem2 {
  operation2() {
    console.log("Subsystem2 operation2");
  }
}

// Facade
class Facade {
  constructor() {
    this.subsystem1 = new Subsystem1();
    this.subsystem2 = new Subsystem2();
  }

  simpleOperation() {
    this.subsystem1.operation1();
    this.subsystem2.operation2();
  }
}

// Client code
const facade = new Facade();
facade.simpleOperation();
