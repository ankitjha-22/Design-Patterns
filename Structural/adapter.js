// Existing class
class OldSystem {
  request() {
    return "Old system request";
  }
}

// Target interface
class NewSystem {
  specificRequest() {
    return "New system request";
  }
}

// Adapter to make OldSystem work with NewSystem
class Adapter extends NewSystem {
  constructor(oldSystem) {
    super();
    this.oldSystem = oldSystem;
  }

  specificRequest() {
    return this.oldSystem.request();
  }
}

// Client code
const oldSystem = new OldSystem();
const adapter = new Adapter(oldSystem);
console.log(adapter.specificRequest()); // "Old system request"
