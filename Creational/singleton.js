//The singleton pattern is a design pattern that restricts the instantiation of a class to one object.

//This pattern involves a single class which is responsible to create an object while making sure that only single object gets created.
//This class provides a way to access its only object which can be accessed directly without need to instantiate the object of the class.

// The Singleton pattern disables all other means of creating objects of a class except for the special creation method.
// This method either creates a new object or returns an existing one if it has already been created.

// The Singleton Pattern limits the number of instances of a particular object to just one.
// This single instance is called the singleton.

//Resource: https://refactoring.guru/design-patterns/singleton

//Example 1
function SingleTon() {
  let instance;
  function createInstance() {
    let mysingleObject = new Object("I m here");
    return mysingleObject;
  }
  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
}
let single = SingleTon();
let singleObject1 = single.getInstance();
let singleObject2 = single.getInstance();

console.log(
  singleObject1 === singleObject2
    ? "Ex-1 Singleton Pattern: This shows that both invocations results in single object being formed"
    : "Something went wrong"
);

//Example 2
const Singleton = (function () {
  let pManager;

  function ProcessManager() {
    this.state = 0;
  }

  function createProcessManager() {
    pManager = new ProcessManager();
    return pManager;
  }

  return {
    getProcessManager: () => {
      if (!pManager) pManager = createProcessManager();
      return pManager;
    },
  };
})();

const singleton = Singleton.getProcessManager();
const singleton2 = Singleton.getProcessManager();

console.log(
  singleton === singleton2
    ? "Ex-2 Singleton Pattern: This shows that both invocations results in single object being formed"
    : "Something went wrong"
);
