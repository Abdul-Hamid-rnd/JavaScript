## ❓Data Types

***In JavaScript, data types define the different kinds of values that can be stored and manipulated within a program. Understanding data types is essential because they dictate how the language handles and performs operations on these values. JavaScript has two main categories of data types: primitive and non-primitive (reference) types.***

### ✅ Primitive Data Types

```
1. Number - Represents both integer and floating-point numbers.
            Examples: 42, 3.14, -7, Infinity, NaN (Not-a-Number).

2. String - Represents a sequence of characters, used for text.Strings can be created using single
            quotes ('), double quotes ("), or backticks (`).
            Examples: 'Hello', "World", `` `Hello, ${name}```.

3. Boolean - Represents logical values, either true or false.
             Examples: true, false.

4. Undefined - Indicates that a variable has been declared but has not yet been assigned a value.
               Example: let a; (Here, a is undefined).

5. Null  - Represents the intentional absence of any object value. It is explicitly assigned to a
           variable to indicate "no value".
           Example: let b = null;.

6. Symbol -  Represents a unique and immutable identifier, primarily used to identify object
             properties uniquely. Introduced in ECMAScript 6 (ES6).
             Example: let sym = Symbol('description');

7. BigInt - Represents whole numbers larger than 2^53 - 1 (the maximum number JavaScript can safely
            represent with the Number type). Introduced in ECMAScript 2020 (ES11).
            Example: let bigIntNum = 123456789012345678901234567890n;.
```
### ✅ Non-Primitive (Reference) Data Types

```
1. Object
2. Array
3. Function
4. Date
5. Regular Expressions
```
### ✅ Check Data types

```
console.log(typeof 42);          // "number"
console.log(typeof 'Hello');     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (this is a known quirk in JavaScript)
console.log(typeof Symbol('id')); // "symbol"
console.log(typeof 123n);        // "bigint"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object" (arrays are a type of object)
console.log(typeof function(){}); // "function"

```
