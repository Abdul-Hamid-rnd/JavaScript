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
