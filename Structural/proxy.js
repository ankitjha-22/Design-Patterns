// RealSubject
class RealSubject {
  request() {
    console.log("Request from RealSubject");
  }
}

// Proxy
class Proxy {
  constructor(realSubject) {
    this.realSubject = realSubject;
  }

  request() {
    console.log("Proxy operation before RealSubject");
    this.realSubject.request();
  }
}

// Client code
const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);
proxy.request();
