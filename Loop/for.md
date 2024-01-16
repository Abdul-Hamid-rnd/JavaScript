## ❤️ JavaScript for loop...
***1.Basic Loop:***
```
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Output: 1 2 3 4 5

```
***2.Countdown:***
```
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// Output: 5 4 3 2 1

```
***3.Even Numbers:***
```
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// Output: 2 4 6 8 10

```
***4.Odd Numbers:***
```
for (let i = 1; i <= 9; i += 2) {
  console.log(i);
}

// Output: 1 3 5 7 9

```
***5.Multiplication Table:***
```
const num = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// Output: 7x1=7 7x2=14 7x3=21 ... 7x10=70

```
***6.Print Array Elements:***
```
const colors = ['red', 'green', 'blue'];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Output: red green blue

```
***7.Nested Loop - Multiplication Table:***
```
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// Output: Multiplication table from 1 to 5

```
***8.Backward Loop through an Array:***
```
const numbers = [10, 20, 30, 40, 50];
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

// Output: 50 40 30 20 10

```
***9.Looping Over Object Properties:***
```
const person = { name: 'John', age: 25, city: 'New York' };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Output: name: John age: 25 city: New York

```
***10.Skip Iteration with continue:***
```
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// Output: 1 2 4 5

```
***11.Looping Over Strings:***
```
const word = 'Hello';
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}

// Output: H e l l o

```
***12.Loop with a Step:***
```
for (let i = 0; i <= 10; i += 3) {
  console.log(i);
}

// Output: 0 3 6 9

```
***13.Factorial Calculation:***
```
const num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(`Factorial of ${num} is: ${factorial}`);

// Output: Factorial of 5 is: 120

```
***14.Loop with a Dynamic Range:***
```
const start = 3;
const end = 7;
for (let i = start; i <= end; i++) {
  console.log(i);
}

// Output: 3 4 5 6 7

```
