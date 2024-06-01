***1. Basic Usage***
```
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
console.log(keys);
// Output: ['a', 'b', 'c']

```
***2. Empty Object***
```
const obj = {};
const keys = Object.keys(obj);
console.log(keys);
// Output: []

```
***3. Non-Enumerable Properties***
```
const obj = { a: 1 };
Object.defineProperty(obj, 'b', {
  value: 2,
  enumerable: false
});
const keys = Object.keys(obj);
console.log(keys);
// Output: ['a']

```
***4.  Inherited Properties***
```
const parent = { a: 1 };
const child = Object.create(parent);
child.b = 2;
const keys = Object.keys(child);
console.log(keys);
// Output: ['b']

```
***5. Array as an Object***
```
const arr = ['x', 'y', 'z'];
const keys = Object.keys(arr);
console.log(keys);
// Output: ['0', '1', '2']

```
***6. Object with Symbol Properties***
```
const sym = Symbol('symbol');
const obj = { a: 1, [sym]: 2 };
const keys = Object.keys(obj);
console.log(keys);
// Output: ['a']

```
***7. Using forEach with Object.keys()***
```
const obj = { name: 'Alice', age: 25, city: 'Wonderland' };
Object.keys(obj).forEach(key => {
  console.log(key, obj[key]);
});
// Output:
// name Alice
// age 25
// city Wonderland

```
***8. Using map with Object.keys()***
```
const obj = { firstName: 'John', lastName: 'Doe' };
const uppercasedKeys = Object.keys(obj).map(key => key.toUpperCase());
console.log(uppercasedKeys);
// Output: ['FIRSTNAME', 'LASTNAME']

```
***9. Sorting Object Keys***
```
const obj = { b: 1, a: 2, c: 3 };
const sortedKeys = Object.keys(obj).sort();
console.log(sortedKeys);
// Output: ['a', 'b', 'c']

```
***10. Filtering Object Keys***
```
const obj = { a: 1, b: 2, c: 3, d: 4 };
const filteredKeys = Object.keys(obj).filter(key => obj[key] % 2 === 0);
console.log(filteredKeys);
// Output: ['b', 'd']

```
