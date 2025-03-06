// Step 1: Define the base class (Product)
class Vehicle {
  start() {
    throw "Method 'start()' must be implemented.";
  }
}

// Step 2: Create concrete product classes
class Car extends Vehicle {
  start() {
    console.log("Car is starting...");
  }
}

class Bike extends Vehicle {
  start() {
    console.log("Bike is starting...");
  }
}

// Step 3: Create a Factory class
class VehicleFactory {
  static createVehicle(type) {
    if (type === "car") {
      return new Car();
    } else if (type === "bike") {
      return new Bike();
    } else {
      throw new Error("Invalid vehicle type.");
    }
  }
}

// Step 4: Use the factory to create objects
const car = VehicleFactory.createVehicle("car");
const bike = VehicleFactory.createVehicle("bike");

car.start(); // Output: Car is starting...
bike.start(); // Output: Bike is starting...
