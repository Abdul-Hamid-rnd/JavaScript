## ❤️ Javascript destructuring...

***1. Array Destructuring:***
```
const numbers = [1, 2, 3, 4, 5];
const [first, second, , fourth] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(fourth); // Output: 4

```
***2. Object Destructuring:***
```
const person = { name: 'John', age: 30, city: 'New York' };
const { name, age } = person;

console.log(name); // Output: John
console.log(age);  // Output: 30

```
***3. Default Values:***
```
const { car = 'Unknown Car', year = 2020 } = {};

console.log(car);  // Output: Unknown Car
console.log(year); // Output: 2020

```
***4. Renaming Variables:***
```
const user = { username: 'john_doe', email: 'john@example.com' };
const { username: alias, email: userEmail } = user;

console.log(alias);      // Output: john_doe
console.log(userEmail);  // Output: john@example.com

```
***5. Function Parameters:***
```
function printPersonInfo({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}

const personInfo = { name: 'Alice', age: 25 };
printPersonInfo(personInfo);

// Output: Alice is 25 years old.

```
***6. Nested Destructuring:***
```
const person = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001'
  }
};

const { name, address: { city } } = person;

console.log(name); // Output: John
console.log(city); // Output: New York

```
***7. Rest in Array Destructuring:***
```
const numbers = [1, 2, 3, 4, 5];
const [first, ...rest] = numbers;

console.log(first); // Output: 1
console.log(rest);  // Output: [2, 3, 4, 5]

```
***8. Function Return Destructuring:***
```
function getCoordinates() {
  return [40.7128, -74.0060];
}

const [latitude, longitude] = getCoordinates();

console.log(latitude);  // Output: 40.7128
console.log(longitude); // Output: -74.0060

```
***9. Object Destructuring with Function Parameter:***
```
function printUserInfo({ name, age = 25, city = 'Unknown' }) {
  console.log(`${name} is ${age} years old and lives in ${city}.`);
}

const user = { name: 'Bob', city: 'Boston' };
printUserInfo(user);

// Output: Bob is 25 years old and lives in Boston.

```
***10. Combining Destructuring with the Spread Operator:***
```
const person = { name: 'Emma', age: 28, country: 'Canada' };
const { name, ...otherInfo } = person;

console.log(name);       // Output: Emma
console.log(otherInfo);  // Output: { age: 28, country: 'Canada' }

```

