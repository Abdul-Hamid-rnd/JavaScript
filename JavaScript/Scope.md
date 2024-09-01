
## Scope 
***JavaScript scope refers to the accessibility of variables, functions, and objects in different parts of the code during runtime. Understanding scope is crucial for managing variable access and avoiding conflicts in JavaScript.***

***1. Global Scope***
```
var globalVariable = 'I am global';

function showGlobalVariable() {
  console.log(globalVariable); // Accessible
}

showGlobalVariable(); // Output: I am global
console.log(globalVariable);  // Output: I am global

```
***2. Function Scope***
```
function myFunction() {
  var functionScopedVariable = 'I am inside a function';
  console.log(functionScopedVariable); // Accessible
}

myFunction(); // Output: I am inside a function
console.log(functionScopedVariable); // Error: functionScopedVariable is not defined

```
***3. Block Scope (introduced in ES6)***
```
if (true) {
  let blockScopedVariable = 'I am in a block';
  console.log(blockScopedVariable); // Accessible
}

console.log(blockScopedVariable); // Error: blockScopedVariable is not defined

```
***4. Lexical (Static) Scope***
```
function outerFunction() {
  var outerVariable = 'I am outside';

  function innerFunction() {
    console.log(outerVariable); // Can access outerVariable due to lexical scoping
  }

  innerFunction();
}

outerFunction(); // Output: I am outside

```
***5. Scope Chain***
```
var globalVar = 'Global';

function outer() {
  var outerVar = 'Outer';

  function inner() {
    var innerVar = 'Inner';
    console.log(innerVar);  // Output: Inner
    console.log(outerVar);  // Output: Outer
    console.log(globalVar); // Output: Global
  }

  inner();
}

outer();

```
***6. Closures***
```
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

```
***7. Summary***
```
Global Scope: Variables accessible everywhere.

Function Scope: Variables accessible only within the function.

Block Scope: Variables accessible only within the block, introduced with let and const
.
Lexical Scope: Functions have access to the variables of their parent scope, determined by their location in the source code

Scope Chain: JavaScript searches variables from the innermost to the outermost scope.

Closures: Functions that maintain access to their lexical scope even when executed outside of it.
```

```

