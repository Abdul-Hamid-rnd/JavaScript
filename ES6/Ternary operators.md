## ❤️JavaScript Ternary operators...

***1. Basic Example:***
```
condition ? expression_if_true : expression_if_false;

```
***2. Numeric Comparison:***
```
let number = 10;
let isEven = number % 2 === 0 ? "Even" : "Odd";
console.log(isEven);
// Output: Even

```
***3. String Length Check:***
```
let text = "Hello, World!";
let message = text.length > 10 ? "Long text" : "Short text";
console.log(message);
// Output: Long text

```
***4. Checking for Undefined:***
```
let variable;
let result = variable !== undefined ? variable : "Default Value";
console.log(result);
// Output: Default Value

```
***5. Nested Ternary Operators:***
```
let age = 18;
let eligibility = age >= 18 ? "Allowed to vote" : (age >= 16 ? "Almost there" : "Too young");
console.log(eligibility);
// Output: Allowed to vote

```
## ❤️ The Nullish Coalescing Operator (??)...

***6. Basic Usage***
```
let variable1 = null;
let result1 = variable1 ?? 'Default Value';
console.log(result1); // Output: Default Value

```
***7. Non-null Value***
```
let variable2 = 'Hello, World!';
let result2 = variable2 ?? 'Default Value';
console.log(result2); // Output: Hello, World!

```
***8. Undefined Value***
```
let variable3; // undefined by default
let result3 = variable3 ?? 'Default Value';
console.log(result3); // Output: Default Value

```
***9. Falsy Value***
```
let variable4 = 0;
let result4 = variable4 ?? 'Default Value';
console.log(result4); // Output: 0

```
***10. Nested Nullish Coalescing***
```
let variable5 = null;
let defaultValue = 'Fallback';
let result5 = variable5 ?? defaultValue ?? 'Default Value';
console.log(result5); // Output: Fallback

```
## ❤️ The Optional Chaining Operator (?)...

***1. Accessing nested properties:***
```
const user = {
  name: "John",
  address: {
    city: "New York",
    zipCode: 10001
  }
};

const cityName = user?.address?.city;
console.log(cityName);

// Output: "New York"

```
***2. Accessing non-existent property:***
```
const user = {
  name: "John",
  address: {
    city: "New York",
    zipCode: 10001
  }
};

const cityName = user?.address?.city;
console.log(cityName);

// Output: "New York"

```
***3. Calling a function conditionally:***
```
const calculator = {
  add: (a, b) => a + b
};

const result = calculator?.add?.(3, 5);
console.log(result);

// Output: 8

```
***4. Handling null or undefined values:***
```
const user = null;

const zipCode = user?.address?.zipCode;
console.log(zipCode);

// Output: undefined

```
***5. Chaining multiple optional properties:***
```
const car = {
  model: "Tesla",
  details: {
    engine: {
      type: "Electric",
      power: "500 hp"
    }
  }
};

const power = car?.details?.engine?.power;
console.log(power);

// Output: "500 hp"

```

