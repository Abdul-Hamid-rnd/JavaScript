## ❤️ JavaScript filter method

***1. Filter out even numbers***
```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);


// Output: [2, 4, 6, 8, 10]


```
***2. Filter strings longer than 3 characters***
```
const words = ["apple", "banana", "kiwi", "orange", "grape"];
const longWords = words.filter(word => word.length > 3);
console.log(longWords);


// Output: ["apple", "banana", "kiwi", "orange", "grape"]


```
***3. Filter objects with a certain property***
```
const people = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 22 }
];
const adults = people.filter(person => person.age >= 25);
console.log(adults);

// Output: [{ name: "John", age: 25 }, { name: "Alice", age: 30 }]

```
***4. Filter falsy values from an array***
```
const values = [0, 1, "", "hello", null, undefined, false, true];
const truthyValues = values.filter(Boolean);
console.log(truthyValues);


// Output: [1, "hello", true]

```
***5. Filter unique values in an array***
```
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = numbers.filter((value, index, array) => array.indexOf(value) === index);
console.log(uniqueNumbers);


// Output: [1, 2, 3, 4, 5]

```
***6. Filter elements not equal to a specific value***
```
const numbers = [1, 2, 3, 4, 5];
const notEqualToThree = numbers.filter(num => num !== 3);
console.log(notEqualToThree);


// Output: [1, 2, 4, 5]

```
***7. Filter prime numbers***
```
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const primes = numbers.filter(num => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
});
console.log(primes);


// Output: [2, 3, 5, 7]

```
***8. Filter elements based on a range***
```
const numbers = [15, 25, 35, 45, 55, 65];
const range = numbers.filter(num => num >= 30 && num <= 50);
console.log(range);


// Output: [35, 45]
```
***9. Filter elements containing a specific substring***
```
const words = ["apple", "banana", "kiwi", "orange", "grape"];
const containsLetterA = words.filter(word => word.includes("a"));
console.log(containsLetterA);


// Output: ["apple", "banana", "orange", "grape"]

```
***10. Filter elements based on a custom function***
```
const numbers = [1, 2, 3, 4, 5];
const filtered = numbers.filter(num => {
  // Custom condition: Include only numbers greater than 2
  return num > 2;
});
console.log(filtered);


// Output: [3, 4, 5]

```
***11. Filter elements based on an external array of allowed values***
```
const allowedValues = [2, 4, 6, 8, 10];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(num => allowedValues.includes(num));
console.log(filteredNumbers);


// Output: [2, 4, 6, 8, 10]

```
***12. Filter objects based on multiple conditions***
```
const products = [
  { name: "Laptop", price: 800, brand: "Dell" },
  { name: "Tablet", price: 300, brand: "Apple" },
  { name: "Phone", price: 500, brand: "Samsung" }
];

const filteredProducts = products.filter(product => {
  return product.price > 400 && product.brand !== "Apple";
});

console.log(filteredProducts);


// Output: [{ name: "Phone", price: 500, brand: "Samsung" }]

```
***13. Filter elements based on index***
```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenIndexedNumbers = numbers.filter((num, index) => index % 2 === 0);
console.log(evenIndexedNumbers);


// Output: [1, 3, 5, 7, 9]

```
***14. Filter elements based on a function that returns a boolean***
```
const numbers = [1, 2, 3, 4, 5];
const isGreaterThanTwo = num => num > 2;
const filteredNumbers = numbers.filter(isGreaterThanTwo);
console.log(filteredNumbers);


// Output: [3, 4, 5]

```
***15. Filter elements based on the type***
```
const mixedArray = [1, "two", 3, "four", 5];
const numbersOnly = mixedArray.filter(item => typeof item === "number");
console.log(numbersOnly);


// Output: [1, 3, 5]

```
***16. Filter elements with a specific property and value***
```
const students = [
  { name: "John", grade: "A" },
  { name: "Alice", grade: "B" },
  { name: "Bob", grade: "A" }
];

const gradeAStudents = students.filter(student => student.grade === "A");
console.log(gradeAStudents);


// Output: [{ name: "John", grade: "A" }, { name: "Bob", grade: "A" }]

```
***17. Filter elements based on a regular expression***
```
const words = ["apple", "banana", "kiwi", "orange", "grape"];
const regex = /^b/;
const startsWithB = words.filter(word => regex.test(word));
console.log(startsWithB);


// Output: ["banana"]

```
***18. Filter elements with truthy values using a custom function***
```
const mixedValues = [0, "apple", false, true, "", "banana"];
const truthyValues = mixedValues.filter(value => {
  // Custom condition: Include only truthy values
  return Boolean(value);
});
console.log(truthyValues);


// Output: ["apple", true, "banana"]


```
***19. Filter elements based on their length***
```
const words = ["apple", "banana", "kiwi", "orange", "grape"];
const lengthGreaterThan5 = words.filter(word => word.length > 5);
console.log(lengthGreaterThan5);


// Output: ["banana", "orange"]


```
***20. Filter elements with a case-insensitive search***
```
const fruits = ["Apple", "banana", "KIWI", "Orange", "grape"];
const searchQuery = "ki";
const caseInsensitiveSearch = fruits.filter(fruit =>
  fruit.toLowerCase().includes(searchQuery.toLowerCase())
);
console.log(caseInsensitiveSearch);


// Output: ["KIWI"]

```
