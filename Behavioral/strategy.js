// Strategy interface (abstract)
class Strategy {
  execute(a, b) {
    throw new Error("This method should be overridden!");
  }
}

// ConcreteStrategyA: Addition strategy
class ConcreteStrategyA extends Strategy {
  execute(a, b) {
    return a + b;
  }
}

// ConcreteStrategyB: Subtraction strategy
class ConcreteStrategyB extends Strategy {
  execute(a, b) {
    return a - b;
  }
}

// ConcreteStrategyC: Multiplication strategy
class ConcreteStrategyC extends Strategy {
  execute(a, b) {
    return a * b;
  }
}

// Context: The object using a strategy
class Context {
  constructor(strategy) {
    this.strategy = strategy; // strategy is injected at runtime
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executeStrategy(a, b) {
    return this.strategy.execute(a, b);
  }
}

// Usage
const context = new Context(new ConcreteStrategyA());
console.log(context.executeStrategy(5, 3)); // Output: 8 (Addition)

context.setStrategy(new ConcreteStrategyB());
console.log(context.executeStrategy(5, 3)); // Output: 2 (Subtraction)

context.setStrategy(new ConcreteStrategyC());
console.log(context.executeStrategy(5, 3)); // Output: 15 (Multiplication)
