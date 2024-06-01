***1.Convert a string to an array:***
```
const str = 'hello';
const arr = Array.from(str);
console.log(arr); // ['h', 'e', 'l', 'l', 'o']

```
***2. Convert a Set to an array:***
```
const set = new Set(['foo', 'bar', 'baz']);
const arr = Array.from(set);
console.log(arr); // ['foo', 'bar', 'baz']

```
***3. Using a map function:***
```
const numbers = [1, 2, 3, 4];
const doubled = Array.from(numbers, x => x * 2);
console.log(doubled); // [2, 4, 6, 8]

```
***4. Convert arguments to an array:***
```
function f() {
    return Array.from(arguments);
}

const arr = f(1, 2, 3);
console.log(arr); // [1, 2, 3]

```
***5. Create an array of numbers***
```
const length = 5;
const customArray = Array.from({ length }, (_, i) => i + 1);
console.log(customArray); // [1, 2, 3, 4, 5]

```
***6. Create an array of objects***
```
const length = 3;
const customArray = Array.from({ length }, (_, i) => ({ id: i + 1, value: `Item ${i + 1}` }));
console.log(customArray); 
// [{ id: 1, value: 'Item 1' }, { id: 2, value: 'Item 2' }, { id: 3, value: 'Item 3' }]

```
***7.  Create an array with a specific pattern***
```
const length = 4;
const customArray = Array.from({ length }, (_, i) => i % 2 === 0 ? 'even' : 'odd');
console.log(customArray); // ['even', 'odd', 'even', 'odd']

```
***8. Create a matrix (2D array)***
```
const rows = 3;
const cols = 4;
const matrix = Array.from({ length: rows }, (_, rowIndex) => 
  Array.from({ length: cols }, (_, colIndex) => `R${rowIndex + 1}C${colIndex + 1}`)
);
console.log(matrix);
// [
//   ['R1C1', 'R1C2', 'R1C3', 'R1C4'],
//   ['R2C1', 'R2C2', 'R2C3', 'R2C4'],
//   ['R3C1', 'R3C2', 'R3C3', 'R3C4']
// ]

```
***9. Create an array from a string with transformations***
```
const str = 'hello';
const customArray = Array.from(str, char => char.toUpperCase());
console.log(customArray); // ['H', 'E', 'L', 'L', 'O']

```
***10. Create an array of random numbers***
```
const length = 10;
const min = 1;
const max = 100;

const randomArray = Array.from({ length }, () => 
  Math.floor(Math.random() * (max - min + 1)) + min
);

console.log(randomArray); // Example output: [23, 67, 34, 89, 12, 3, 56, 78, 45, 90]

```
