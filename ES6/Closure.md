## JavaScript Closure.....

***1. Basic Closure:***
```
function outerFunction(x) {
  return function(y) {
    return x + y;
  };
}

const closureFunction = outerFunction(5);
console.log(closureFunction(3)); // Output: 8

```
***2. Counter using Closure:***
```
function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const increment = counter();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2

```
***3. Private Variables:***
```
function secretPassword() {
  const password = '12345';
  return {
    guessPassword: function(guess) {
      return guess === password;
    }
  };
}

const checkPassword = secretPassword();
console.log(checkPassword.guessPassword('54321'));

// Output: false

```
***4. Callback with Closure:***
```
function performAction(name, callback) {
  console.log(`Performing action: ${name}`);
  callback();
}

function logAction() {
  const message = 'Action completed!';
  console.log(message);
}

performAction('Log Action', logAction);

```
***5. Currying with Closure:***
```
function curryAdd(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}

const result = curryAdd(1)(2)(3);
console.log(result);

// Output: 6

```
***6. Memoization with Closure:***
```
function memoize() {
  const cache = {};
  return function(n) {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    } else {
      console.log('Calculating result');
      const result = n * 2;
      cache[n] = result;
      return result;
    }
  };
}

const memoizedFunction = memoize();

console.log(memoizedFunction(5)); // Output: Calculating result, 10
console.log(memoizedFunction(5)); // Output: Fetching from cache, 10

```
***7. Event Handling with Closure:***
```
function clickCounter() {
  let count = 0;
  return function() {
    console.log(`Button clicked ${++count} times`);
  };
}

const buttonClick = clickCounter();

buttonClick(); // Output: Button clicked 1 times
buttonClick(); // Output: Button clicked 2 times

```
***8. Factory Function with Closure:***
```
function createPerson(name) {
  return {
    getName: function() {
      return name;
    },
    setName: function(newName) {
      name = newName;
    }
  };
}

const person = createPerson('John');

console.log(person.getName()); // Output: John

person.setName('Jane');
console.log(person.getName()); // Output: Jane

```
***9. Partial Application with Closure:***
```
function multiply(x, y) {
  return x * y;
}

function partialMultiply(x) {
  return function(y) {
    return multiply(x, y);
  };
}

const double = partialMultiply(2);

console.log(double(5));

// Output: 10

```
***10. Generator Function with Closure:***
```
function* generateSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const sequence = generateSequence();

console.log(sequence.next().value); // Output: 0
console.log(sequence.next().value); // Output: 1

```
