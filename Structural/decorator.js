// Component
class Coffee {
  cost() {
    return 5;
  }
}

// Decorator
class CoffeeDecorator {
  constructor(coffee) {
    this._coffee = coffee;
  }

  cost() {
    return this._coffee.cost();
  }
}

// Concrete Decorator 1
class MilkDecorator extends CoffeeDecorator {
  cost() {
    return this._coffee.cost() + 2;
  }
}

// Concrete Decorator 2
class SugarDecorator extends CoffeeDecorator {
  cost() {
    return this._coffee.cost() + 1;
  }
}

// Client code
let myCoffee = new Coffee();
myCoffee = new MilkDecorator(myCoffee);
myCoffee = new SugarDecorator(myCoffee);

console.log(myCoffee.cost()); // 8
