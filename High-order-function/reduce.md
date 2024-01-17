## ❤️ JavaScript reduce method...

***1.Summing an Array***
```
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// Output: 15

```
***2.Finding the Maximum Value***
```
const numbers = [10, 5, 8, 15, 3];
const max = numbers.reduce((maxValue, currentValue) => Math.max(maxValue, currentValue), -Infinity);
console.log(max);

// Output: 15

```
***3.Flattening an Array***
```
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((flat, current) => flat.concat(current), []);
console.log(flattenedArray);

// Output: [1, 2, 3, 4, 5, 6]

```
***4.Counting Occurrences of Elements***
```
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const wordCount = words.reduce((count, word) => {
  count[word] = (count[word] || 0) + 1;
  return count;
}, {});
console.log(wordCount);

// Output: { apple: 3, banana: 2, orange: 1 }

```
***5.Concatenating Strings***
```
const words = ['Hello', ' ', 'World', '!'];
const sentence = words.reduce((result, word) => result + word, '');
console.log(sentence);

// Output: Hello World!

```
***6. Finding the Average***
```
const numbers = [2, 4, 6, 8];
const average = numbers.reduce((sum, num, index, array) => {
  sum += num;
  return index === array.length - 1 ? sum / array.length : sum;
}, 0);
console.log(average);

// Output: 5

```
***7.Filtering Odd Numbers***
```
const numbers = [1, 2, 3, 4, 5];
const oddNumbers = numbers.reduce((result, num) => {
  if (num % 2 !== 0) {
    result.push(num);
  }
  return result;
}, []);
console.log(oddNumbers);

// Output: [1, 3, 5]

```
***8.Transforming Array Elements***
```
const numbers = [1, 2, 3, 4];
const doubled = numbers.reduce((result, num) => {
  result.push(num * 2);
  return result;
}, []);
console.log(doubled);

// Output: [2, 4, 6, 8]

```
***9.Grouping by Property***
```
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];
const groupedByAge = people.reduce((group, person) => {
  const age = person.age;
  (group[age] = group[age] || []).push(person);
  return group;
}, {});
console.log(groupedByAge);


// Output: { 25: [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ], 30: [ { name: 'Bob', age: 30 } ] }

```
***10.Finding the Longest Word***
```
const words = ['apple', 'banana', 'orange', 'strawberry'];
const longestWord = words.reduce((longest, current) => (current.length > longest.length ? current : longest), '');
console.log(longestWord);

// Output: strawberry

```
***11.Calculating Factorial***
```
const number = 5;
const factorial = Array.from({ length: number }, (_, index) => index + 1).reduce((result, num) => result * num, 1);
console.log(factorial);

// Output: 120 (1 * 2 * 3 * 4 * 5)

```
***12.Removing Duplicates from an Array***
```
const numbers = [1, 2, 3, 4, 3, 2, 1];
const uniqueNumbers = numbers.reduce((unique, current) => (unique.includes(current) ? unique : [...unique, current]), []);
console.log(uniqueNumbers);

// Output: [1, 2, 3, 4]

```
***13.Sum of Squares***
```
const numbers = [1, 2, 3, 4];
const sumOfSquares = numbers.reduce((sum, num) => sum + num ** 2, 0);
console.log(sumOfSquares);

// Output: 30 (1^2 + 2^2 + 3^2 + 4^2)

```
***14.Reversing an Array***
```
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = originalArray.reduce((result, current) => [current, ...result], []);
console.log(reversedArray);

 // Output: [5, 4, 3, 2, 1]

```
***15.Grouping by Property and Counting***
```
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});
console.log(fruitCount);

// Output: { apple: 3, banana: 2, orange: 1 }
```
***16.Merging Arrays of Objects***
```
const data = [
  { id: 1, value: 'a' },
  { id: 2, value: 'b' },
  { id: 3, value: 'c' }
];
const mergedObject = data.reduce((result, item) => ({ ...result, [item.id]: item.value }), {});
console.log(mergedObject);

// Output: { 1: 'a', 2: 'b', 3: 'c' }


```
***17.Calculating Average Age***
```
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
];
const averageAge = people.reduce((sum, person) => sum + person.age, 0) / people.length;
console.log(averageAge);

// Output: 25 (25 + 30 + 20) / 3

```
***18.Finding Common Elements in Arrays***
```
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const commonElements = array1.reduce((result, element) => (array2.includes(element) ? [...result, element] : result), []);
console.log(commonElements);

// Output: [3, 4]

```
***19.Converting an Array to an Object***
```
const keyValueArray = [['name', 'Alice'], ['age', 25], ['city', 'New York']];
const objFromArr = keyValueArray.reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
console.log(objFromArr);

// Output: { name: 'Alice', age: 25, city: 'New York' }

```
***20.Grouping Objects by a Property***
```
const books = [
  { title: 'Book1', genre: 'Fiction' },
  { title: 'Book2', genre: 'Non-fiction' },
  { title: 'Book3', genre: 'Fiction' },
  { title: 'Book4', genre: 'Science Fiction' },
  { title: 'Book5', genre: 'Non-fiction' },
];

const groupedByGenre = books.reduce((groupedBooks, book) => {
  const genre = book.genre;

  if (!groupedBooks[genre]) {
    groupedBooks[genre] = [];
  }

  groupedBooks[genre].push(book);
  return groupedBooks;
}, {});

console.log(groupedByGenre);

//output

{
  Fiction: [
    { title: 'Book1', genre: 'Fiction' },
    { title: 'Book3', genre: 'Fiction' }
  ],
  'Non-fiction': [
    { title: 'Book2', genre: 'Non-fiction' },
    { title: 'Book5', genre: 'Non-fiction' }
  ],
  'Science Fiction': [
    { title: 'Book4', genre: 'Science Fiction' }
  ]
}


```

