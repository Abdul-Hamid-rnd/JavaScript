## JavaScript forEach method...

***1. Simple Array Iteration:***
```
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number);
});

// Output: 1 2 3 4 5

```
***2. Square each element:***
```
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number * number);
});

// Output: 1 4 9 16 25

```

***3. Array of Objects:***
```
let students = [{ name: 'Alice', age: 22 }, { name: 'Bob', age: 25 }];
students.forEach(function (student) {
  console.log(student.name + ' is ' + student.age + ' years old');
});

// Output: Alice is 22 years old   Bob is 25 years old

```
***4. Modifying Original Array:***
```
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number, index, array) {
  array[index] = number * 2;
});
console.log(numbers);

// Output: [2, 4, 6, 8, 10]

```

***5. Sum of Array Elements:***
```
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(number => sum += number);
console.log(sum);

// Output: 15

```
***6. Skipping Elements:***
```
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  if (number % 2 === 0) {
    console.log(number);
  }
});

// Output: 2 4

```
***7. Using bind to Preserve Context:***
```
let person = {
  name: 'John',
  sayHello: function() {
    console.log('Hello, ' + this.name);
  }
};
let boundFunction = person.sayHello.bind(person);
['Alice', 'Bob'].forEach(boundFunction);

// Output: Hello, John  Hello, John

```
***8. Finding Element Index:***
```
let numbers = [10, 20, 30, 40, 50];
let findNumber = 30;
let index = -1;
numbers.forEach(function (number, i) {
  if (number === findNumber) {
    index = i;
  }
});
console.log(index);

// Output: 2

```
***9. Logging Index and Value:***
```
let numbers = [10, 20, 30, 40, 50];
numbers.forEach(function (number, index) {
  console.log('Index: ' + index + ', Value: ' + number);
});

// Output: Index: 0, Value: 10  Index: 1, Value: 20  Index: 2, Value: 30  Index: 3, Value: 40  Index: 4, Value: 50

```
***10. Flattening Nested Arrays:***
```
let nestedArray = [[1, 2], [3, 4], [5, 6]];
let flatArray = [];
nestedArray.forEach(subArray => flatArray = flatArray.concat(subArray));
console.log(flatArray);

// Output: [1, 2, 3, 4, 5, 6]

```
***11. Removing Duplicates:***
```
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = [];
numbers.forEach(function (number) {
  if (!uniqueNumbers.includes(number)) {
    uniqueNumbers.push(number);
  }
});
console.log(uniqueNumbers);

// Output: [1, 2, 3, 4, 5]

```
***12. Using forEach with Strings:***
```
let greeting = 'Hello';
let chars = [];
greeting.split('').forEach(char => chars.push(char));
console.log(chars);

// Output: ['H', 'e', 'l', 'l', 'o']

```
***13. Filtering Array Elements:***
```
let numbers = [1, 2, 3, 4, 5];
let filteredNumbers = [];
numbers.forEach(function (number) {
  if (number % 2 === 0) {
    filteredNumbers.push(number);
  }
});
console.log(filteredNumbers);

// Output: [2, 4]

```
***13. Transforming Array Elements:***
```
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];
numbers.forEach(function (number) {
  doubledNumbers.push(number * 2);
});
console.log(doubledNumbers);

// Output: [2, 4, 6, 8, 10]

```
***14. Updating Object Properties:***
```
let students = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 25 }
];
students.forEach(function (student) {
  student.age += 1;
});
console.log(students);

// Output: [ { name: 'Alice', age: 23 }, { name: 'Bob', age: 26 } ]

```
***15. Changing Delimiter in CSV String:***
```
let csvString = 'John,Doe,Age:30';
let fields = [];
csvString.split(',').forEach(field => fields.push(field));
console.log(fields);

// Output: ['John', 'Doe', 'Age:30']

```

