## ❤️ JavaScript flatmap method...
***1. Doubling each element:***
```
const numbers = [1, 2, 3];
const doubled = numbers.flatMap(num => [num, num * 2]);
console.log(doubled);


// Output: [1, 2, 2, 4, 3, 6]

```
***2. Filter and map:***
```
const numbers = [1, 2, 3, 4, 5];
const squaredEven = numbers.flatMap(num => (num % 2 === 0 ? [num * num] : []));
console.log(squaredEven);


// Output: [4, 16]

```
***3. Splitting and flattening strings:***
```
const words = ['Hello', 'World'];
const letters = words.flatMap(word => word.split(''));
console.log(letters);


// Output: ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']

```
***4. Flatten an array of arrays:***
```
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.flatMap(innerArray => innerArray);
console.log(flatArray);

// Output: [1, 2, 3, 4, 5, 6]

```
***5. Remove falsy values:***
```
const mixedValues = [1, false, 'hello', 0, '', 42];
const truthyValues = mixedValues.flatMap(value => value ? [value] : []);
console.log(truthyValues);


// Output: [1, 'hello', 42]

```
***6. Generating a range of numbers:***
```
const range = Array.from({ length: 5 }, (_, index) => index + 1);
console.log(range);


// Output: [1, 2, 3, 4, 5]

```
***7. Nested mapping:***
```
const matrix = [[1, 2], [3, 4], [5, 6]];
const squaredMatrix = matrix.flatMap(row => row.map(num => num * num));
console.log(squaredMatrix);


// Output: [1, 4, 9, 16, 25, 36]

```
***8. Transform and flatten objects:***
```
const people = [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }];
const namesAndAges = people.flatMap(person => [person.name, person.age]);

console.log(namesAndAges);


// Output: ['John', 25, 'Jane', 30]

```
***9. Working with strings***
```
const words = ['Hello', 'World'];
const result = words.flatMap(word => word.split(''));

console.log(result);


// Output: ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']

```
***10. Using index parameter***
```
const numbers = [1, 2, 3];
const result = numbers.flatMap((num, index) => [num, index]);

console.log(result);


// Output: [1, 0, 2, 1, 3, 2]

```
***11. Mapping and converting to strings***
```
const numbers = [1, 2, 3];
const result = numbers.flatMap(num => num.toString().split(''));

console.log(result);


// Output: ['1', '2', '3']

```
***12. Using external function***
```
function multiplyByTwo(num) {
  return [num, num * 2];
}

const numbers = [1, 2, 3];
const result = numbers.flatMap(multiplyByTwo);

console.log(result);


// Output: [1, 2, 2, 4, 3, 6]

```
***13. Creating key-value pairs from an array***
```
const fruits = ['apple', 'banana', 'orange'];
const keyValuePairs = fruits.flatMap(fruit => ({ [fruit]: fruit.length }));

console.log(keyValuePairs);


// Output: [{ apple: 5 }, { banana: 6 }, { orange: 6 }]

```
***14.  Flattening and removing duplicates***
```
const nestedArrays = [[1, 2], [2, 3], [3, 4]];
const uniqueNumbers = [...new Set(nestedArrays.flatMap(arr => arr))];

console.log(uniqueNumbers);


// Output: [1, 2, 3, 4]

```
***15. Flattening arrays recursively***
```
const nestedArrays = [1, [2, [3, [4]]]];
const recursivelyFlattened = function flatten(arr) {
  return arr.flatMap(item => Array.isArray(item) ? flatten(item) : item);
};

console.log(recursivelyFlattened(nestedArrays));


// Output: [1, 2, 3, 4]

```
***16. Creating an array of repeated values***
```
const values = [1, 2, 3];
const repeatedValues = values.flatMap(value => Array(3).fill(value));

console.log(repeatedValues);


// Output: [1, 1, 1, 2, 2, 2, 3, 3, 3]

```
***17. Transforming and flattening objects***
```
const persons = [
  { name: 'Alice', skills: ['JavaScript', 'HTML'] },
  { name: 'Bob', skills: ['CSS', 'React'] }
];

const flattenedSkills = persons.flatMap(person => person.skills.map(skill => `${person.name} knows ${skill}`));

console.log(flattenedSkills);


// Output: ['Alice knows JavaScript', 'Alice knows HTML', 'Bob knows CSS', 'Bob knows React']

```
***18. Flattening and filtering arrays***
```
const mixedData = [1, 'apple', [2, 3], 'orange', 4];
const result = mixedData.flatMap(item => typeof item === 'number' ? [item] : []);

console.log(result);


// Output: [1, 4]

```
***19. Creating an array of unique characters***
```
const words = ['hello', 'world'];
const uniqueCharacters = Array.from(new Set(words.flatMap(word => word.split(''))));

console.log(uniqueCharacters);


// Output: ['h', 'e', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

```
***20. simulate data manipulation involving nested arrays and objects.***
```
const data = [
  {
    category: 'fruit',
    items: [
      { name: 'apple', color: 'red', quantity: 5 },
      { name: 'banana', color: 'yellow', quantity: 3 }
    ]
  },
  {
    category: 'vegetable',
    items: [
      { name: 'carrot', color: 'orange', quantity: 7 },
      { name: 'spinach', color: 'green', quantity: 2 }
    ]
  }
];

// Use flatMap to transform and flatten the data
const transformedData = data.flatMap(category => {
  const categoryInfo = { category: category.category };
  const itemsWithCategory = category.items.map(item => ({ ...categoryInfo, ...item }));
  return itemsWithCategory;
});

console.log(transformedData);


/*
Output:
[
  { category: 'fruit', name: 'apple', color: 'red', quantity: 5 },
  { category: 'fruit', name: 'banana', color: 'yellow', quantity: 3 },
  { category: 'vegetable', name: 'carrot', color: 'orange', quantity: 7 },
  { category: 'vegetable', name: 'spinach', color: 'green', quantity: 2 }
]
*/

```
