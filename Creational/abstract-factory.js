// Abstract Product 1
class Chair {
  sit() {
    throw "Method 'sit()' must be implemented.";
  }
}

// Abstract Product 2
class Sofa {
  lieDown() {
    throw "Method 'lieDown()' must be implemented.";
  }
}
// Concrete Chair Product for Modern Furniture
class ModernChair extends Chair {
  sit() {
    console.log("Sitting on a modern chair.");
  }
}

// Concrete Sofa Product for Modern Furniture
class ModernSofa extends Sofa {
  lieDown() {
    console.log("Lying down on a modern sofa.");
  }
}
// Concrete Chair Product for Classic Furniture
class ClassicChair extends Chair {
  sit() {
    console.log("Sitting on a classic chair.");
  }
}

// Concrete Sofa Product for Classic Furniture
class ClassicSofa extends Sofa {
  lieDown() {
    console.log("Lying down on a classic sofa.");
  }
}
// Abstract Factory Interface
class FurnitureFactory {
  createChair() {
    throw "Method 'createChair()' must be implemented.";
  }
  createSofa() {
    throw "Method 'createSofa()' must be implemented.";
  }
}
// Concrete Factory for Modern Furniture
class ModernFurnitureFactory extends FurnitureFactory {
  createChair() {
    return new ModernChair();
  }
  createSofa() {
    return new ModernSofa();
  }
}

// Concrete Factory for Classic Furniture
class ClassicFurnitureFactory extends FurnitureFactory {
  createChair() {
    return new ClassicChair();
  }
  createSofa() {
    return new ClassicSofa();
  }
}
// Client Code
function clientCode(factory) {
  const chair = factory.createChair();
  const sofa = factory.createSofa();

  chair.sit();
  sofa.lieDown();
}

// Create a modern furniture factory
const modernFactory = new ModernFurnitureFactory();
clientCode(modernFactory);
// Output:
// Sitting on a modern chair.
// Lying down on a modern sofa.

// Create a classic furniture factory
const classicFactory = new ClassicFurnitureFactory();
clientCode(classicFactory);
// Output:
// Sitting on a classic chair.
// Lying down on a classic sofa.
