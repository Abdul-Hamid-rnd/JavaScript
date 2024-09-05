## JavaScript Classes ❓
**A class in JavaScript is a blueprint for creating objects. It defines the properties (data) and methods (functions) that the objects created from the class will have. While JavaScript traditionally used functions and prototypes for creating objects, ES6 (ECMAScript 2015) introduced a cleaner and more intuitive syntax through classes.**

### ⬇️ Key Concepts of a Class
**✅ Blueprint:** A class is a model or template for objects.

**✅ Properties:** These are the attributes or data associated with a class.

**✅ Methods:** These are the behaviors or actions that the class can perform.

**✅ Constructor:** A special method called when an object is instantiated from the class. It initializes the object's properties.

**✅ Example**
```
// Defining a class called Person
class Person {
  // The constructor method is called when a new object is created from the class
  constructor(name, age) {
    this.name = name;  // 'this' refers to the current instance of the class
    this.age = age;
  }

  // Method of the class
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

```

## JavaScript Instances ❓
**An instance is a specific realization of a class. When you create an object using a class, that object is referred to as an instance of the class. Each instance has its own data (properties), but it shares the structure and behavior (methods) defined in the class.**

**✅ Example**

```
// Defining a class Car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;  // Instance property
    this.model = model;
    this.year = year;
  }

  // Method to display car details
  getDetails() {
    return `${this.brand} ${this.model} (${this.year})`;
  }
}

// Creating instances of the Car class
const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2019);

// Accessing instance methods and properties
console.log(car1.getDetails()); // Output: Toyota Corolla (2020)
console.log(car2.getDetails()); // Output: Honda Civic (2019)

```

## Inheritance ❓
**JavaScript is a prototype-based language, meaning that objects inherit directly from other objects. This is called prototypal inheritance. Every object in JavaScript has a prototype (another object from which it inherits methods and properties). When you try to access a property or method on an object, JavaScript first looks at the object itself. If the property is not found, it then looks at the object's prototype, and so on, up the prototype chain.**

  ✅ **1. Prototypal Inheritance:** JavaScript is a prototype-based language, meaning that objects inherit directly from other objects. This is called prototypal inheritance. Every object in JavaScript has a prototype (another object from which it inherits methods and properties). When you try to access a property or method on an object, JavaScript first looks at the object itself. If the property is not found, it then looks at the object's prototype, and so on, up the prototype chain.

⬇️ **Example of Prototypal Inheritance**

```
// Create an object called animal
const animal = {
  eat() {
    console.log("The animal is eating.");
  }
};

// Create a new object called dog that inherits from animal
const dog = Object.create(animal);
dog.bark = function() {
  console.log("The dog is barking.");
};

// Use properties and methods from both dog and animal
dog.bark();  // Output: The dog is barking.
dog.eat();   // Output: The animal is eating.

```

✅ **2. Class-based Inheritance (ES6):** With the introduction of ES6, JavaScript introduced the class syntax, which allows for class-based inheritance. This is syntactic sugar over the prototypal inheritance model, making it more familiar to developers coming from class-based languages like Java or C++.

**⬇️ Example of Class-based Inheritance**

```
// Define a parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Parent class method
  eat() {
    console.log(`${this.name} is eating.`);
  }
}

// Define a child class that inherits from Animal
class Dog extends Animal {
  constructor(name, breed) {
    // Call the parent class constructor
    super(name);
    this.breed = breed;
  }

  // Child class method
  bark() {
    console.log(`${this.name} is barking.`);
  }
}

// Create an instance of the Dog class
const myDog = new Dog("Rex", "German Shepherd");

// Call methods from both the parent and child class
myDog.eat();  // Output: Rex is eating.
myDog.bark(); // Output: Rex is barking.

```
### ✅ Key Concepts in JavaScript Inheritance

**1. Prototype Chain**

```
const animal = {
  walk() {
    console.log("Animal walking");
  }
};

const dog = Object.create(animal);
dog.bark = function() {
  console.log("Dog barking");
};

// Access the prototype chain
console.log(dog.__proto__ === animal); // true

// If a property or method is not found in dog, it will look in animal
dog.walk(); // Output: Animal walking

```

**2. The extends and super Keywords**

```
class Parent {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // Call the parent class constructor
    this.age = age;
  }

  showAge() {
    console.log(`I am ${this.age} years old.`);
  }
}

const child = new Child("Alice", 12);
child.greet();    // Output: Hello, my name is Alice.
child.showAge();  // Output: I am 12 years old.

```

**3. Method Overriding**

```
class Animal {
  speak() {
    console.log("Animal is making a sound.");
  }
}

class Dog extends Animal {
  // Override the speak method
  speak() {
    console.log("Dog is barking.");
  }
}

const myDog = new Dog();
myDog.speak(); // Output: Dog is barking.

```
**4. Mixins in JavaScript Inheritance**

```
// Mixin for adding behavior
const canFly = {
  fly() {
    console.log(`${this.name} is flying!`);
  }
};

// Mixin for adding behavior
const canSwim = {
  swim() {
    console.log(`${this.name} is swimming!`);
  }
};

// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }
}

// Child class
class Duck extends Animal {}

// Copy mixin methods into the Duck prototype
Object.assign(Duck.prototype, canFly, canSwim);

// Create a Duck instance
const duck = new Duck("Daffy");

duck.fly();  // Output: Daffy is flying!
duck.swim(); // Output: Daffy is swimming!

```
