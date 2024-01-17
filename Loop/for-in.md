## ❤️ JavaScript for...in loop 
***1. Complex object with nested structures***
```
const complexObject = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zipCode: "10001",
  },
  hobbies: ["reading", "coding", "traveling"],
};

// Function to recursively iterate over the object properties
function iterateObject(obj, indent = 0) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      const value = obj[prop];

      // Add indentation for better visualization of nesting
      const indentation = " ".repeat(indent * 2);

      // Output property and value
      console.log(`${indentation}${prop}:`);

      // If the value is an object or array, recursively iterate
      if (typeof value === "object" && value !== null) {
        iterateObject(value, indent + 1);
      } else {
        // Output the value for non-object and non-array properties
        console.log(`${indentation}  ${value}`);
      }
    }
  }
}

// Use the for...in loop to iterate over the complex object
console.log("Output of the for...in loop:");
iterateObject(complexObject);

Output of the for...in loop:
name:
  John
age:
  30
address:
  city:
    New York
  zipCode:
    10001
hobbies:
  0:
    reading
  1:
    coding
  2:
    traveling

```

***2. Complex object with mixed data types***
```
const mixedObject = {
  name: "Alice",
  age: 25,
  isStudent: true,
  grades: [90, 85, 92],
  address: {
    city: "San Francisco",
    zipCode: "94105",
  },
  favoriteSubjects: ["Math", "History", "Computer Science"],
};

// Function to iterate over the object properties using for...in loop
function iterateObject(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      const value = obj[prop];

      // Check the data type of the value
      let dataType;
      if (Array.isArray(value)) {
        dataType = "Array";
      } else if (typeof value === "object" && value !== null) {
        dataType = "Object";
      } else {
        dataType = typeof value;
      }

      // Output property, data type, and value
      console.log(`${prop} (${dataType}):`, value);
    }
  }
}

// Use the for...in loop to iterate over the mixed object
console.log("Output of the for...in loop:");
iterateObject(mixedObject);

Output of the for...in loop:
name (string): Alice
age (number): 25
isStudent (boolean): true
grades (Array): [90, 85, 92]
address (Object): { city: 'San Francisco', zipCode: '94105' }
favoriteSubjects (Array): [ 'Math', 'History', 'Computer Science' ]


```
***3.  Iterating over an Array***
```
const fruits = ["Apple", "Banana", "Orange", "Grapes"];

console.log("Fruits in the array:");
for (let index in fruits) {
  console.log(`${index}: ${fruits[index]}`);
}

//output:
0: Apple
1: Banana
2: Orange
3: Grapes

```
***4. Iterating over an Object with Functions***
```
const person = {
  name: "Bob",
  age: 28,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
  sayGoodbye: function() {
    console.log("Goodbye!");
  },
};

console.log("Properties and methods of the person object:");
for (let key in person) {
  if (typeof person[key] === "function") {
    console.log(`Method: ${key}`);
  } else {
    console.log(`Property: ${key} - Value: ${person[key]}`);
  }
}


//Output:
Properties and methods of the person object:
Property: name - Value: Bob
Property: age - Value: 28
Method: greet
Method: sayGoodbye

```
***5. Iterating over a String***
```
const message = "Hello, JavaScript!";

console.log("Characters in the string:");
for (let index in message) {
  console.log(`Index ${index}: ${message[index]}`);
}

//Output:

Characters in the string:
Index 0: H
Index 1: e
Index 2: l
Index 3: l
Index 4: o
Index 5: ,
Index 6:  
Index 7: J
Index 8: a
Index 9: v
Index 10: a
Index 11: S
Index 12: c
Index 13: r
Index 14: i
Index 15: p
Index 16: t
Index 17: !

```
***6. Iterating over an Array of Objects***
```
const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
];

console.log("Book information:");
for (let index in books) {
  const book = books[index];
  console.log(`Book ${parseInt(index) + 1}: ${book.title} by ${book.author}`);
}

//Output
Book information:
Book 1: The Catcher in the Rye by J.D. Salinger
Book 2: To Kill a Mockingbird by Harper Lee
Book 3: 1984 by George Orwell

```
***7. Iterating over Function Parameters***
```
function printInfo(name, age, country) {
  console.log("Function parameters:");
  for (let param in arguments) {
    console.log(`${param}: ${arguments[param]}`);
  }
}

printInfo("Sophie", 30, "USA");

//Output:

Function parameters:
0: Sophie
1: 30
2: USA

```
***8.  Iterating over Object Entries***
```
const student = {
  name: "Alex",
  age: 21,
  grade: "A",
};

console.log("Object entries using for...in loop:");
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

//Output:

Object entries using for...in loop:
name: Alex
age: 21
grade: A

```
***9. Dynamically Modifying Object Properties***
```
const car = {
  make: "Honda",
  model: "Accord",
};

console.log("Original car properties:");
for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

// Dynamically add a new property
car.color = "Blue";

console.log("\nModified car properties:");
for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

//Output
Original car properties:
make: Honda
model: Accord

Modified car properties:
make: Honda
model: Accord
color: Blue


```
***10. Filtering Properties based on Type***
```
const mixedData = {
  name: 'John',
  age: 25,
  city: 'New York',
  isActive: true,
  scores: [80, 90, 75]
};

console.log("Filtering properties based on type:");
for (let key in mixedData) {
  const value = mixedData[key];
  const type = typeof value;
  
  if (type === 'number' || type === 'boolean') {
    console.log(`${key}: ${value}`);
  }
}

//Output

Filtering properties based on type:
age: 25
isActive: true

```
