## ❓Logical Operators
***Logical operators in JavaScript are used to perform logical operations and combine multiple conditions. They return a Boolean value (true or false). Here’s a detailed overview of each logical operator with examples:***

✅ ***Logical AND (&&)***

*The logical AND operator returns true if both operands are true. If either operand is false, it returns false.*
```
console.log('Logical AND (&&):');
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// Example with expressions
let a = 5;
let b = 10;
console.log(a > 0 && b > 0); // true (both conditions are true)
console.log(a > 0 && b < 0); // false (second condition is false)

```
✅ ***Logical OR (||)***

*The logical OR operator returns true if at least one of the operands is true. It returns false only if both operands are false.*
```
console.log('Logical OR (||):');
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// Example with expressions
let x = 5;
let y = -10;
console.log(x > 0 || y > 0); // true (first condition is true)
console.log(x < 0 || y < 0); // true (second condition is true)
console.log(x < 0 || y > 0); // false (both conditions are false)

```
✅ ***Logical NOT (!)***

*The logical NOT operator returns the opposite Boolean value of its operand. If the operand is true, it returns false, and if the operand is false, it returns true.*
```
console.log('Logical NOT (!):');
console.log(!true); // false
console.log(!false); // true

// Example with expressions
let a = 5;
console.log(!(a > 0)); // false (a > 0 is true, so NOT true is false)
console.log(!(a < 0)); // true (a < 0 is false, so NOT false is true)

```
✅ ***Logical AND Short-Circuit Evaluation***

*The logical AND operator (&&) uses short-circuit evaluation, meaning if the first operand is false, it doesn't evaluate the second operand because the result will be false regardless.*
```
console.log('Logical AND Short-Circuit Evaluation:');
console.log(false && (1 / 0)); // false (second operand is not evaluated)
console.log(true && (1 / 0)); // Infinity (second operand is evaluated)

```
✅ ***Logical OR Short-Circuit Evaluation***

*The logical OR operator (||) also uses short-circuit evaluation. If the first operand is true, it doesn’t evaluate the second operand because the result will be true regardless.*
```
console.log('Logical OR Short-Circuit Evaluation:');
console.log(true || (1 / 0)); // true (second operand is not evaluated)
console.log(false || (1 / 0)); // Infinity (second operand is evaluated)

```


