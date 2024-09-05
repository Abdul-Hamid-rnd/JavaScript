***1. Basic Class with Constructor and Method***
```
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name}`;
    }
}

const person = new Person('John', 25);
console.log(person.greet()); // Output: Hello, my name is John

```
***2. Class with Getters and Setters***
```
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    set widthValue(value) {
        this.width = value;
    }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // Output: 50
rect.widthValue = 7;
console.log(rect.area); // Output: 70

```
***3. Static Method***
```
class Calculator {
    static add(a, b) {
        return a + b;
    }
}

console.log(Calculator.add(10, 20)); // Output: 30

```
***4. Class Inheritance***
```
class Animal {
    speak() {
        return "Animal speaks";
    }
}

class Dog extends Animal {
    speak() {
        return "Dog barks";
    }
}

const dog = new Dog();
console.log(dog.speak()); // Output: Dog barks

```
***5. Class with Constructor Overloading (Using Default Parameters)***
```
class Product {
    constructor(name = "Unknown", price = 0) {
        this.name = name;
        this.price = price;
    }

    details() {
        return `${this.name}: $${this.price}`;
    }
}

const item = new Product("Laptop", 1200);
const defaultItem = new Product();
console.log(item.details()); // Output: Laptop: $1200
console.log(defaultItem.details()); // Output: Unknown: $0

```
***6. Private Fields and Methods (ES2022+)***
```
class BankAccount {
    #balance = 0;

    constructor(accountHolder) {
        this.accountHolder = accountHolder;
    }

    #updateBalance(amount) {
        this.#balance += amount;
    }

    deposit(amount) {
        this.#updateBalance(amount);
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount("Alice");
account.deposit(100);
console.log(account.getBalance()); // Output: 100

```
***7. Using this inside Class Methods***
```
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    getCarInfo() {
        return `Model: ${this.model}, Year: ${this.year}`;
    }
}

const car = new Car('Toyota', 2022);
console.log(car.getCarInfo()); // Output: Model: Toyota, Year: 2022

```
***8. Class Method Returning this for Method Chaining***
```
class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        return this;
    }

    decrement() {
        this.count--;
        return this;
    }

    getCount() {
        return this.count;
    }
}

const counter = new Counter();
counter.increment().increment().decrement();
console.log(counter.getCount()); // Output: 1

```
***9. Class with Async Method***
```
class DataFetcher {
    async fetchData() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("Data loaded"), 1000);
        });
    }
}

const fetcher = new DataFetcher();
fetcher.fetchData().then(data => console.log(data)); // Output (after 1 second): Data loaded

```
***10. Class with Static Properties and Methods***
```
class AppSettings {
    static theme = "Dark";

    static changeTheme(newTheme) {
        this.theme = newTheme;
    }

    static getTheme() {
        return this.theme;
    }
}

console.log(AppSettings.getTheme()); // Output: Dark
AppSettings.changeTheme("Light");
console.log(AppSettings.getTheme()); // Output: Light

```
***1. Async Method with await***
```
class API {
    async getData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return data;
    }
}

const api = new API();
api.getData().then(data => console.log(data));

```
***2.  Method Overloading Using arguments***
```
class MathOperations {
    calculate() {
        if (arguments.length === 1) {
            return arguments[0] * arguments[0]; // Square of the number
        } else if (arguments.length === 2) {
            return arguments[0] + arguments[1]; // Sum of two numbers
        } else {
            return 0;
        }
    }
}

const math = new MathOperations();
console.log(math.calculate(4));       // Output: 16 (Square of 4)
console.log(math.calculate(4, 5));    // Output: 9 (Sum of 4 and 5)

```
***3. Class with Default Class Field Values***
```
class User {
    name = "Anonymous"; // Default class field

    getName() {
        return this.name;
    }
}

const user = new User();
console.log(user.getName()); // Output: Anonymous

```
***4. Class Inheritance with Super Method***
```
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound.`;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name); // Calls parent class constructor
    }

    speak() {
        return `${this.name} meows.`;
    }
}

const cat = new Cat("Whiskers");
console.log(cat.speak()); // Output: Whiskers meows.

```
***5. Chaining Methods in a Class***
```
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        return this;
    }

    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
        return this;
    }

    showItems() {
        return this.items;
    }
}

const cart = new ShoppingCart();
cart.addItem("Apple").addItem("Banana").removeItem("Apple");
console.log(cart.showItems()); // Output: ['Banana']

```
***6. Class with Symbol Properties***
```
const privateValue = Symbol("privateValue");

class Secret {
    constructor(value) {
        this[privateValue] = value;
    }

    getSecret() {
        return this[privateValue];
    }
}

const secret = new Secret("hidden");
console.log(secret.getSecret()); // Output: hidden

```
***7. Static Methods with Inheritance***
```
class ParentClass {
    static staticMethod() {
        return "Static method in ParentClass";
    }
}

class ChildClass extends ParentClass {}

console.log(ChildClass.staticMethod()); // Output: Static method in ParentClass

```
***8. Factory Method Pattern with Static Method***
```
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    static createToyota(model) {
        return new Car("Toyota", model);
    }
}

const car = Car.createToyota("Corolla");
console.log(car); // Output: Car { brand: 'Toyota', model: 'Corolla' }

```
***9.  Method Using Rest Parameters (...args)***
```
class Printer {
    print(...messages) {
        return messages.join(' ');
    }
}

const printer = new Printer();
console.log(printer.print("Hello", "World", "!")); // Output: Hello World !

```
***10. Class with an Iterator Method (Custom Iterators)***
```
class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    [Symbol.iterator]() {
        let current = this.start;
        const end = this.end;
        return {
            next() {
                if (current <= end) {
                    return { value: current++, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

const range = new Range(1, 5);
for (const num of range) {
    console.log(num); // Output: 1, 2, 3, 4, 5
}

```
***1. Decorators (with Babel or TypeScript)***
```
function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

class Book {
    @readonly
    title = "JavaScript Guide";

    getTitle() {
        return this.title;
    }
}

const book = new Book();
console.log(book.getTitle()); // Output: JavaScript Guide
book.title = "Changed Title"; // Error: Cannot assign to read-only property 'title'

```
***2. Mixin Example***
```
const CanFly = Base => class extends Base {
    fly() {
        return `${this.name} is flying!`;
    }
};

class Bird {
    constructor(name) {
        this.name = name;
    }
}

class Eagle extends CanFly(Bird) {}

const eagle = new Eagle("Eagle");
console.log(eagle.fly()); // Output: Eagle is flying!

```
***3. Abstract Class with Method to be Implemented by Subclass***
```
class Vehicle {
    drive() {
        throw new Error("Method 'drive()' must be implemented.");
    }
}

class Car extends Vehicle {
    drive() {
        return "Car is driving!";
    }
}

const car = new Car();
console.log(car.drive()); // Output: Car is driving!

```
***4. Proxy Class for Validating Method Calls***
```
class Person {
    constructor(age) {
        this.age = age;
    }

    setAge(newAge) {
        this.age = newAge;
    }
}

const handler = {
    set(target, prop, value) {
        if (prop === "age" && (value < 0 || value > 150)) {
            throw new Error("Invalid age value");
        }
        target[prop] = value;
    }
};

const person = new Proxy(new Person(25), handler);
person.age = 30; // OK
console.log(person.age); // Output: 30
person.age = -1; // Error: Invalid age value

```
***5. Factory Pattern with Dynamic Class Creation***
```
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class ShapeFactory {
    static createShape(type, ...params) {
        switch (type) {
            case "Rectangle":
                return new Rectangle(...params);
            case "Circle":
                return new Circle(...params);
            default:
                throw new Error("Shape not recognized");
        }
    }
}

const rectangle = ShapeFactory.createShape("Rectangle", 10, 20);
console.log(rectangle.area()); // Output: 200

const circle = ShapeFactory.createShape("Circle", 5);
console.log(circle.area()); // Output: 78.5398...

```
***6. Private Static Fields and Methods (ES2022+)***
```
class Counter {
    static #count = 0;

    static increment() {
        Counter.#count++;
        return Counter.#count;
    }

    static getCount() {
        return Counter.#count;
    }
}

console.log(Counter.increment()); // Output: 1
console.log(Counter.getCount());  // Output: 1

```
***7. Method Overriding with Super Call***
```
class Parent {
    greet() {
        return "Hello from Parent";
    }
}

class Child extends Parent {
    greet() {
        return super.greet() + " and Hello from Child";
    }
}

const child = new Child();
console.log(child.greet()); // Output: Hello from Parent and Hello from Child

```
***8. Singleton Pattern in a Class***
```
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        this.data = {};
    }

    set(key, value) {
        this.data[key] = value;
    }

    get(key) {
        return this.data[key];
    }
}

const instance1 = new Singleton();
instance1.set("name", "Singleton");

const instance2 = new Singleton();
console.log(instance2.get("name")); // Output: Singleton
console.log(instance1 === instance2); // Output: true

```
***9. Using Object.defineProperty in Class***
```
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

const car = new Car("Honda", "Civic");

Object.defineProperty(car, "details", {
    get() {
        return `${this.make} ${this.model}`;
    },
    configurable: false,
    enumerable: true
});

console.log(car.details); // Output: Honda Civic

```
***10. Class with Asynchronous Constructor***
```
class AsyncClass {
    constructor() {
        return (async () => {
            this.data = await this.fetchData();
            return this;
        })();
    }

    async fetchData() {
        return new Promise(resolve => {
            setTimeout(() => resolve("Async Data"), 1000);
        });
    }
}

(async () => {
    const asyncObj = await new AsyncClass();
    console.log(asyncObj.data); // Output (after 1 second): Async Data
})();

```
