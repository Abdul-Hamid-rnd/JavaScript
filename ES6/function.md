## ❤️ JavaScript Function....

***1. Function Declaration:***
```
function myFunction() {
    // function body
}

```
***2. Function Expression:***
```
var myFunction = function() {
    // function body
};

```
***3. Arrow Function (ES6+):***
```
const myFunction = () => {
    // function body
};

```
***4. Function Constructor:***
```
var myFunction = new Function('param1', 'param2', 'return param1 + param2');

```
***5. Immediately Invoked Function Expression (IIFE):***
```
(function() {
    // function body
})();

```
***6. Named Function Expression:***
```
var myFunction = function myFunctionName() {
    // function body
};

```
***7. Method within an Object:***
```
var myObject = {
    myMethod: function() {
        // method body
    }
};

```
***8. Shorthand Method (ES6+):***
```
var myObject = {
    myMethod() {
        // method body
    }
};

```
***9. Lexical Scoping:***
```
function Counter() {
  this.count = 0;

  setInterval(() => {
    // 'this' refers to the Counter instance
    this.count++;
    console.log(this.count);
  }, 1000);
}

const counter = new Counter();

```
## Function call...

***1. Basic Function Call:***
```
function sayHello() {
    console.log("Hello, World!");
}

sayHello(); // Output: Hello, World!

```
***2. Function with Parameters:***
```
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("John"); // Output: Hello, John!

```
***3. Function with Return Value:***
```
function add(a, b) {
    return a + b;
}

let result = add(3, 5);
console.log(result); // Output: 8

```
***4. Anonymous Function (Function Expression):***
```
let multiply = function(x, y) {
    return x * y;
};

let product = multiply(4, 6);
console.log(product); // Output: 24

```
***5. Immediately Invoked Function Expression (IIFE):***
```
(function() {
    console.log("This is an IIFE");
})();
// Output: This is an IIFE

```
***6. Callback Function:***
```
function doSomethingAsync(callback) {
    setTimeout(function() {
        console.log("Task completed!");
        callback();
    }, 2000);
}

doSomethingAsync(function() {
    console.log("Callback function executed.");
});

```
***7. Function as an Object Method:***
```
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

console.log(calculator.add(10, 5)); // Output: 15
console.log(calculator.subtract(10, 5)); // Output: 5

```

