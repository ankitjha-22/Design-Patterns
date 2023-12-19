/*
The Builder Pattern is a creational design pattern that is used to construct a complex object step by step. 
It allows you to produce different types and representations of an object using the same construction process. 
The pattern is particularly useful when an object has a large number of parameters or configuration options, and 
you want to provide a more readable and maintainable way to create instances of that object.
*/

/*
The Builder Pattern is useful in scenarios where:
The construction of an object is complex: If an object requires a lot of parameters or intricate steps to be 
constructed, the Builder Pattern can make the code more readable and maintainable.

The object has multiple representations: If you need to create different representations of the same object, 
using a builder for each representation can be more flexible than having multiple constructors or factory methods.

You want to enforce a specific construction order: The Builder Pattern allows you to enforce a step-by-step 
construction process, ensuring that the object is only constructed when it's fully configured.
*/

// https://www.youtube.com/watch?v=oP76NM4qZhw
// https://www.youtube.com/watch?v=zAByFmRs6No

// Product class
class House {
  constructor() {
    this.foundation = "";
    this.walls = "";
    this.roof = "";
  }

  describe() {
    console.log(
      `House with foundation: ${this.foundation}, walls: ${this.walls}, roof: ${this.roof}`
    );
  }
}

// Builder class
class HouseBuilder {
  constructor() {
    this.house = new House();
  }

  buildFoundation(foundation) {
    this.house.foundation = foundation;
    return this;
  }

  buildWalls(walls) {
    this.house.walls = walls;
    return this;
  }

  buildRoof(roof) {
    this.house.roof = roof;
    return this;
  }

  getResult() {
    return this.house;
  }
}

// Client code
const builder = new HouseBuilder();
const house = builder
  .buildFoundation("Concrete")
  .buildWalls("Brick")
  .buildRoof("Tile")
  .getResult();

house.describe();

// Ex-2
class BookBuilder {
  constructor() {
    this.name = "";
    this.author = "";
    this.price = 0;
    this.category = "";
  }

  withName(name) {
    this.name = name;
    return this;
  }

  withAuthor(author) {
    this.author = author;
    return this;
  }

  withPrice(price) {
    this.price = price;
    return this;
  }

  withCategory(category) {
    this.category = category;
    return this;
  }

  build() {
    return {
      name: this.name,
      author: this.author,
      prices: this.price,
      category: this.category
    };
  }
}

//Calling the builder class
const book = new BookBuilder()
  .withName("The Reckonings")
  .withAuthor("Lacy Johnson")
  .withPrice(31)
  .withCategory("Literature")
  .build();
