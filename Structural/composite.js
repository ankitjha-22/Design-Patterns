// Component
class Component {
  operation() {
    throw "Method 'operation' should be implemented";
  }
}

// Leaf
class Leaf extends Component {
  operation() {
    console.log("Leaf operation");
  }
}

// Composite
class Composite extends Component {
  constructor() {
    super();
    this.children = [];
  }

  add(child) {
    this.children.push(child);
  }

  operation() {
    console.log("Composite operation:");
    this.children.forEach((child) => child.operation());
  }
}

// Client code
const leaf1 = new Leaf();
const leaf2 = new Leaf();
const composite = new Composite();

composite.add(leaf1);
composite.add(leaf2);
composite.operation(); // Will call leaf operations
