***1. Generate a random number between 0 and 1:***
```
let randomNum = Math.random();
console.log(randomNum); // Output: A random number between 0 and 1

```
***2. Generate a random integer between two values (inclusive):***
```
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10)); // Output: A random integer between 1 and 10

```
***3. Calculate the factorial of a number:***
```
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

```
***4. Check if a number is prime:***
```
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
console.log(isPrime(29)); // Output: true

```
***5. Solve a quadratic equation (ax^2 + bx + c = 0):***
```
function solveQuadratic(a, b, c) {
  let discriminant = b * b - 4 * a * c;
  if (discriminant < 0) return 'No real roots';
  let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  return [root1, root2];
}
console.log(solveQuadratic(1, -3, 2)); // Output: [2, 1]

```
***6. Find the sum of an arithmetic series (a, a+d, a+2d, ..., a+(n-1)d):***
```
function arithmeticSeriesSum(a, d, n) {
  return (n / 2) * (2 * a + (n - 1) * d);
}
console.log(arithmeticSeriesSum(1, 1, 10)); // Output: 55

```
***7. Convert a decimal number to a binary number:***
```
function decimalToBinary(decimal) {
  return decimal.toString(2);
}
console.log(decimalToBinary(10)); // Output: "1010"

```
***8. Calculate the determinant of a 2x2 matrix:***
```
function determinant2x2(matrix) {
  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}
console.log(determinant2x2([[1, 2], [3, 4]])); // Output: -2

```
***9. Solve a system of linear equations using Cramer's rule:***
```
function determinant3x3(matrix) {
  return matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]) -
         matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]) +
         matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]);
}

function solveLinearEquations(A, B) {
  let D = determinant3x3(A);
  if (D === 0) return 'No unique solution';

  let Dx = determinant3x3([
    [B[0], A[0][1], A[0][2]],
    [B[1], A[1][1], A[1][2]],
    [B[2], A[2][1], A[2][2]]
  ]);

  let Dy = determinant3x3([
    [A[0][0], B[0], A[0][2]],
    [A[1][0], B[1], A[1][2]],
    [A[2][0], B[2], A[2][2]]
  ]);

  let Dz = determinant3x3([
    [A[0][0], A[0][1], B[0]],
    [A[1][0], A[1][1], B[1]],
    [A[2][0], A[2][1], B[2]]
  ]);

  return [Dx / D, Dy / D, Dz / D];
}

let A = [
  [2, -1, 5],
  [3, 2, 2],
  [1, 3, 3]
];

let B = [8, 14, 10];

console.log(solveLinearEquations(A, B)); // Output: Solution to the system
```
***10. Check leap year***
```
function isLeapYear(year) {
  return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

// Test cases
console.log(isLeapYear(2000)); // Output: true
console.log(isLeapYear(1900)); // Output: false
console.log(isLeapYear(2004)); // Output: true
console.log(isLeapYear(2023)); // Output: false
```

