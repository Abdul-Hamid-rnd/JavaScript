## ❤️ JavaScript spread operators...

***1. Copying an array:***
```
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray);

// Output: [1, 2, 3]

```
***2. Concatenating arrays:***
```
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);

// Output: [1, 2, 3, 4, 5, 6]

```
***3. Passing arguments to a function:***
```
const sum = (a, b, c) => a + b + c;
const numbers = [1, 2, 3];
console.log(sum(...numbers));

// Output: 6

```
***4. Creating a copy of an object:***
```
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
console.log(copiedObject);

// Output: { a: 1, b: 2 }

```
***5. Merging objects:***
```
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject);

 // Output: { a: 1, b: 3, c: 4 }

```
***6. Creating a shallow copy of nested arrays:***
```
const originalNestedArray = [[1, 2], [3, 4]];
const copiedNestedArray = [...originalNestedArray];
console.log(copiedNestedArray);

// Output: [[1, 2], [3, 4]]

```
***7. Adding elements to an array:***
```
const initialArray = [1, 2, 3];
const newArray = [...initialArray, 4, 5];
console.log(newArray);

 // Output: [1, 2, 3, 4, 5]

```
***8.  Using the spread operator with strings:***
```
const originalString = "hello";
const characters = [...originalString];
console.log(characters);

// Output: ['h', 'e', 'l', 'l', 'o']

```
***9. Rest parameters in function parameters:***
```
const multiply = (multiplier, ...numbers) => numbers.map(num => num * multiplier);
console.log(multiply(2, 1, 2, 3));

 // Output: [2, 4, 6]

```
***10.  Creating a new array excluding certain elements:***
```
const numbers = [1, 2, 3, 4, 5];
const withoutThree = numbers.filter(num => num !== 3);
console.log(withoutThree);

// Output: [1, 2, 4, 5]

```
***11. Spread and Rest Operators:***
```
// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// Rest operator
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// Output: 15

```
