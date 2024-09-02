## Create Object ❓

### ✅ Summary creating object

```
1. Object Literal Syntax
2. new Object() Syntax
3. Constructor Functions
4. Object.create() Method
5. ES6 Classes
6. Singleton Pattern
7. Factory Functions
8. Using the new Keyword with Built-in Constructors
```

✅ **1. Object Literal Syntax**
```
const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello!");
  }
};

// Accessing properties
console.log(person.name); // Output: John
person.greet();           // Output: Hello!

```
✅ **2. new Object() Syntax**
```
const person = new Object();
person.name = "John";
person.age = 30;
person.greet = function() {
  console.log("Hello!");
};

console.log(person.name); // Output: John
person.greet();           // Output: Hello!

```
✅ **3. Constructor Functions**
```
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log("Hello!");
  };
}

// Creating an object using the constructor function
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

console.log(person1.name); // Output: John
person1.greet();           // Output: Hello!

```
✅ **4. Object.create() Method**
```
const personPrototype = {
  greet: function() {
    console.log("Hello!");
  }
};

// Creating a new object with personPrototype as its prototype
const person = Object.create(personPrototype);
person.name = "John";
person.age = 30;

console.log(person.name); // Output: John
person.greet();           // Output: Hello!

```
✅ **5. ES6 Classes**
```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello!");
  }
}

// Creating an object using the class
const person1 = new Person("John", 30);
console.log(person1.name); // Output: John
person1.greet();           // Output: Hello!

```
✅ **6. Singleton Pattern**
```
const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // Output: true

```
✅ **7. Factory Functions**
```
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
      console.log("Hello!");
    }
  };
}

const person1 = createPerson("John", 30);
console.log(person1.name); // Output: John
person1.greet();           // Output: Hello!

```
✅ **8. Using the new Keyword with Built-in Constructors**
```
const date = new Date();
console.log(date); // Output: current date and time

const array = new Array(1, 2, 3);
console.log(array); // Output: [1, 2, 3]

const regex = new RegExp("\\d+");
console.log(regex); // Output: /\d+/

```
***9. ***
```

```
***10. ***
```

```
