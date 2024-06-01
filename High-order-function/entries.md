***1. Basic Usage***
```
const person = {
  name: 'Alice',
  age: 30,
  occupation: 'Engineer'
};

const entries = Object.entries(person);

console.log(entries);
// Output: [['name', 'Alice'], ['age', 30], ['occupation', 'Engineer']]

```
***2. Iterating Over an Object***
```
const person = {
  name: 'Alice',
  age: 30,
  occupation: 'Engineer'
};

Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: Alice
// age: 30
// occupation: Engineer

```
***3. Converting an Object to a Map***
```
const person = {
  name: 'Alice',
  age: 30,
  occupation: 'Engineer'
};

const personMap = new Map(Object.entries(person));

console.log(personMap);
// Output: Map(3) { 'name' => 'Alice', 'age' => 30, 'occupation' => 'Engineer' }

```
***4. Handling Arrays***
```
const array = ['a', 'b', 'c'];

const entries = Object.entries(array);

console.log(entries);
// Output: [['0', 'a'], ['1', 'b'], ['2', 'c']]

```

