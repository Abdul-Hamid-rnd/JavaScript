## JavaScript sort method...

***1. Sorting Numbers***
```
const numbers = [5, 2, 8, 1, 3];
numbers.sort();

console.log(numbers);

// Output: [1, 2, 3, 5, 8]

```
***2. Sorting Strings***
```
const fruits = ['banana', 'apple', 'orange', 'kiwi'];
fruits.sort();
console.log(fruits);

// Output: ['apple', 'banana', 'kiwi', 'orange']

```
***3. Sorting in Descending Order***
```
const numbers = [5, 2, 8, 1, 3];
numbers.sort((a, b) => b - a);
console.log(numbers);

// Output: [8, 5, 3, 2, 1]

```
***4. Sorting Objects by Property***
```
const people = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);

// Output: [{ name: 'Alice', age: 25 }, { name: 'John', age: 30 }, { name: 'Bob', age: 35 }]

```
***5. Sorting Mixed Data Types***
```
const mixedData = [10, 'apple', 5, 'orange', 8];
mixedData.sort();
console.log(mixedData);

// Output: [10, 5, 8, 'apple', 'orange']

```
***6. Sorting with Locale Compare***
```
const words = ['apple', 'Orange', 'banana', 'Kiwi'];
words.sort((a, b) => a.localeCompare(b));
console.log(words);

// Output: ['Kiwi', 'Orange', 'apple', 'banana']

```
***7. Custom Sorting Function for Strings***
```
const words = ['apple', 'Orange', 'banana', 'Kiwi'];
words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(words);

// Output: ['apple', 'banana', 'Kiwi', 'Orange']

```
***8. Sorting with NaN Values***
```
const values = [5, 2, 'apple', NaN, 8, 'orange'];
values.sort((a, b) => {
  if (isNaN(a)) return 1;
  if (isNaN(b)) return -1;
  return a - b;
});
console.log(values);

// Output: [2, 5, 8, 'apple', 'orange', NaN]

```
***9. Sorting with Null Values***
```
const items = [10, null, 5, null, 8];
items.sort((a, b) => a - b);
console.log(items);

// Output: [null, null, 5, 8, 10]

```
***10. Sorting with undefined Values***
```
const data = [10, undefined, 5, undefined, 8];
data.sort((a, b) => a - b);
console.log(data);

// Output: [undefined, undefined, 5, 8, 10]

```
