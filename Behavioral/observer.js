// Subject class (Observable)
class Subject {
  constructor() {
    this.observers = [];
  }

  // Add observer
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Remove observer
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // Notify observers
  notifyObservers() {
    this.observers.forEach((observer) => observer.update(this));
  }
}

// Observer class
class Observer {
  update(subject) {
    // React to the update
  }
}

// ConcreteSubject class
class ConcreteSubject extends Subject {
  constructor() {
    super();
    this.state = 0;
  }

  setState(newState) {
    this.state = newState;
    this.notifyObservers();
  }

  getState() {
    return this.state;
  }
}

// ConcreteObserver class
class ConcreteObserver extends Observer {
  update(subject) {
    console.log(`State updated to: ${subject.getState()}`);
  }
}

// Usage
const subject = new ConcreteSubject();
const observer1 = new ConcreteObserver();
const observer2 = new ConcreteObserver();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.setState(1); // Both observers will be notified with the new state

subject.removeObserver(observer1);

subject.setState(2); // Only observer2 will be notified
