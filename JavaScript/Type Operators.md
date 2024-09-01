## ❓Type Operators
***Type operators in JavaScript are used to identify the type of a value or to manipulate types in certain ways. Here are the details of the type operators available in JavaScript:***

✅ **typeof Operator**

*The typeof operator returns a string indicating the type of the unevaluated operand. It's a unary operator that works with a single operand and can handle different types such as numbers, strings, objects, functions, undefined, etc.*

***Example***
```
console.log(typeof 42);              // "number"
console.log(typeof 'Hello');         // "string"
console.log(typeof true);            // "boolean"
console.log(typeof undefined);       // "undefined"
console.log(typeof null);            // "object" (this is a known quirk of JavaScript)
console.log(typeof {});              // "object"
console.log(typeof []);              // "object" (arrays are considered objects in JavaScript)
console.log(typeof function(){});    // "function"

```

✅ **instanceof Operator**

*The instanceof operator checks if an object is an instance of a specific class or constructor function. It returns true if the object is an instance; otherwise, it returns false.*

***Example***
```
object instanceof constructor

function Person(name) {
  this.name = name;
}

const john = new Person('John');
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true
console.log(john instanceof Array);  // false

const arr = [];
console.log(arr instanceof Array);   // true
console.log(arr instanceof Object);  // true

```

✅ **constructor Property**

*While not strictly an operator, the constructor property of an object references the function that created the instance. It can be used to check the type of an object.*

***Example***
```
const str = new String('Hello');
console.log(str.constructor === String); // true

const num = new Number(123);
console.log(num.constructor === Number); // true

const arr = [];
console.log(arr.constructor === Array);  // true

```

✅ **in Operator**

*The in operator checks if a specified property exists in an object or its prototype chain. Although not a direct type operator, it helps in checking the existence of properties in objects.*

***Example***
```
prop in object

const obj = { name: 'Alice', age: 25 };

console.log('name' in obj); // true
console.log('age' in obj);  // true
console.log('gender' in obj); // false

// Check prototype properties
console.log('toString' in obj); // true, because toString is in the prototype chain

```

✅ **delete Operator**

*The delete operator is used to remove a property from an object. This operator returns true if the property was successfully deleted, or false if it was not (though it generally returns true unless the property is non-configurable).*

***Example***
```
const user = {
  name: 'Bob',
  age: 30
};

console.log(user.age); // 30

delete user.age; // Deletes the 'age' property

console.log(user.age); // undefined
console.log('age' in user); // false

// Deleting an array element
const numbers = [1, 2, 3, 4];
delete numbers[1];
console.log(numbers); // [1, undefined, 3, 4]

```

✅ **void Operator**

*The void operator evaluates an expression and returns undefined regardless of the expression's value. It's often used to intentionally ignore the result of an expression.*

***Example***
```
void expression

console.log(void 0); // undefined
console.log(void (0)); // undefined

// Using void to ignore an expression result
void function() {
  console.log('This will run, but the expression result is ignored');
}();

```

✅ **Type Coercion (Automatic Conversion)**

*JavaScript automatically converts data types to a suitable type when needed, known as type coercion. Although not an operator, understanding type coercion is crucial when working with different types.*

***Example***
```
// Implicit coercion
console.log('5' + 5); // "55" (string concatenation)
console.log('5' - 3); // 2 (numeric subtraction)
console.log(5 == '5'); // true (type coercion in equality)

// Explicit coercion
console.log(Number('5')); // 5 (string to number)
console.log(String(123)); // "123" (number to string)
console.log(Boolean(0));  // false (number to boolean)

```
