// Step 1: Create the Prototype class
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method to clone the object
  clone() {
    return new Car(this.make, this.model, this.year);
  }

  // Method to display car details
  displayInfo() {
    console.log(`Car Info: ${this.year} ${this.make} ${this.model}`);
  }
}

// Step 2: Create a prototype object
const prototypeCar = new Car("Toyota", "Camry", 2021);

// Step 3: Clone the prototype object
const car1 = prototypeCar.clone();
const car2 = prototypeCar.clone();

// Step 4: Modify the cloned objects (optional)
car1.year = 2022;
car2.make = "Honda";

car1.displayInfo(); // Car Info: 2022 Toyota Camry
car2.displayInfo(); // Car Info: 2021 Honda Camry
