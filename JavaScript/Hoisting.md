## Hoisting
***Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope (either the global scope or function scope) during the compilation phase, before the code is executed. This allows functions to be called and variables to be referenced before they are declared in the code.***

***How Hoisting Works***
```
When JavaScript code is executed, the JavaScript engine performs two passes:

Compilation Phase: During this phase, the engine reads through the entire script and "hoists" all variable and function declarations to the top of their respective scopes.

Execution Phase: The engine then executes the code line by line, in the order it appears.
```
***Hoisting of Variables***
```
Var : Variables declared with var are hoisted to the top of their scope but are not initialized until their line of code is executed. The initial value of hoisted variables is undefined.

Let : Variables declared with let and const are also hoisted, but not initialized. They remain in a "temporal dead zone" (TDZ) from the start of the block until the declaration is encountered, meaning they cannot be accessed before their declaration.
```
***Example of Var hoisting***
```
// 1
console.log(hoistedVar); // Output: undefined
var hoistedVar = 'I am hoisted';
console.log(hoistedVar); // Output: I am hoisted

// 2
var hoistedVar; // Declaration is hoisted
console.log(hoistedVar); // Output: undefined
hoistedVar = 'I am hoisted'; // Initialization and assignment
console.log(hoistedVar); // Output: I am hoisted

```
***Example of let & const hoisting***
```
console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = 'I am not hoisted';
console.log(hoistedLet); // This line will not be executed due to the error above

console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization
const hoistedConst = 'I am also not hoisted';
console.log(hoistedConst); // This line will not be executed due to the error above

```
***Hoisting of Functions***
```
Function declarations are fully hoisted. This means both the function name and the actual function body are hoisted to the top of their scope. This allows functions to be called before they are defined in the code.

Function Expressions: Function expressions, including those defined with var, let, or const, are not hoisted. Only the variable declaration is hoisted, not the assignment.


```
***Example with Function Declarations:***
```
hoistedFunction(); // Output: I am a hoisted function

function hoistedFunction() {
  console.log('I am a hoisted function');
}

```
***Example with Function Expressions:***
```
hoistedExpression(); // TypeError: hoistedExpression is not a function

var hoistedExpression = function() {
  console.log('I am not hoisted');
};

```
***Summary of Hoisting***
```
Variables declared with var: Declarations are hoisted to the top of their scope and initialized to undefined.

Variables declared with let and const: Declarations are hoisted, but not initialized, leading to a ReferenceError if accessed before the declaration (Temporal Dead Zone).

Function declarations: Both the declaration and definition are hoisted to the top of their scope.

Function expressions and arrow functions: Only the variable declaration is hoisted (if declared with var), not the assignment.

Understanding hoisting helps avoid common errors related to the use of variables and functions before they are declared.
```

