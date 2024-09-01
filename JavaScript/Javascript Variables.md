## JavaScript Variables 

***JavaScript variables are fundamental to storing and managing data in your applications. Understanding the various types of variables and how they work is essential for effective coding. Here’s a detailed overview of JavaScript variables***

***1. Var***
```
Scope: var is function-scoped, meaning it is accessible within the function where it is declared. If declared outside of any function, it is globally scoped.

Hoisting: Variables declared with var are hoisted to the top of their scope and initialized with undefined. This means they can be used before they are declared without throwing an error (though this is not a recommended practice).

Re-declaration and Reassignment: Variables declared with var can be re-declared and reassigned within the same scope.
```
***Example Var***
```
console.log(foo); // Output: undefined (due to hoisting)
var foo = 'Hello';
console.log(foo); // Output: Hello

```
***2. Let***
```
Scope: let is block-scoped, meaning it is only accessible within the block ({}) where it is declared.

Hoisting: Variables declared with let are hoisted but not initialized. Accessing them before declaration results in a ReferenceError.

Re-declaration and Reassignment: Variables declared with let can be reassigned but not re-declared within the same scope.
```
***Example Let***
```
//console.log(bar); // Uncaught ReferenceError: Cannot access 'bar' before initialization
let bar = 'World';
console.log(bar); // Output: World

if (true) {
  let blockVar = 'Inside block';
  console.log(blockVar); // Output: Inside block
}

// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined

```
***3. Const***
```
Scope: const is also block-scoped, just like let.

Hoisting: Similar to let, const variables are hoisted but not initialized, leading to a ReferenceError if accessed before declaration.

Re-declaration and Reassignment: Variables declared with const cannot be re-declared or reassigned. However, if the variable is an object or array, the contents (properties or elements) can be modified.
```
***Example const***
```
//console.log(baz); // Uncaught ReferenceError: Cannot access 'baz' before initialization
const baz = 'Constant';
console.log(baz); // Output: Constant

const arr = [1, 2, 3];
arr.push(4); // Allowed: modifies the array
console.log(arr); // Output: [1, 2, 3, 4]

//baz = 'New Value'; // Uncaught TypeError: Assignment to constant variable.

```
***Summary***
```
var is function-scoped and can be re-declared and reassigned.

let is block-scoped, can be reassigned but not re-declared in the same scope.

const is block-scoped and cannot be reassigned or re-declared.
```


 
