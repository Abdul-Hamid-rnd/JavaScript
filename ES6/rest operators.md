## JavaScript rest operators...

***1. Function Parameter:***
```
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));

// Output: 10

```
***2. Array Concatenation:***
```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];

console.log(combinedArray);

 // Output: [1, 2, 3, 4, 5, 6]

```
***3. Copying Arrays:***
```
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray);

// Output: [1, 2, 3]

```
***4. Function with Fixed and Rest Parameters:***
```
function logDetails(name, ...details) {
  console.log(name);
  console.log(details);
}

logDetails('John', 25, 'Developer', 'USA');

// Output:
// John
// [25, 'Developer', 'USA']

```
***5. Destructuring with Rest:***
```
const [first, ...rest] = [1, 2, 3, 4, 5];

console.log(first);

// Output: 1

console.log(rest);

 // Output: [2, 3, 4, 5]

```
***6. Object Destructuring with Rest:***
```
const person = { name: 'Alice', age: 30, city: 'Wonderland' };
const { name, ...otherDetails } = person;

console.log(name);

// Output: Alice

console.log(otherDetails);

// Output: { age: 30, city: 'Wonderland' }

```
***7. Dynamic Function Parameters:***
```
function printInfo(info, ...details) {
  console.log(info);
  console.log(details.join(', '));
}

printInfo('Personal Info:', 'John', 25, 'USA');

// Output:
// Personal Info:
// John, 25, USA

```
***8. Rest Parameters with Arrow Function:***
```
const multiply = (multiplier, ...numbers) => {
  return numbers.map(num => num * multiplier);
}

console.log(multiply(2, 1, 2, 3));

// Output: [2, 4, 6]

```
***9. Combining Objects with Spread and Rest:***
```
const defaults = { theme: 'light', fontSize: 14 };
const userSettings = { fontSize: 16, isAdmin: true };

const mergedSettings = { ...defaults, ...userSettings };

console.log(mergedSettings);


// Output: { theme: 'light', fontSize: 16, isAdmin: true }

```
***10. Rest Parameter in Callback Functions:***
```
const processNumbers = (callback, ...numbers) => {
  return numbers.map(callback);
}

const square = num => num * num;
console.log(processNumbers(square, 1, 2, 3, 4));

// Output: [1, 4, 9, 16]

```
