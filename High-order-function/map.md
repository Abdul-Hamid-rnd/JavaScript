## JavaScript map method...
***1. Multiply each element by 2***
```
const originalArray = [1, 2, 3, 4, 5];
const doubledArray = originalArray.map(num => num * 2);
console.log(doubledArray);

// [2, 4, 6, 8, 10]

```
***2. Square each element***
```
const originalArray = [1, 2, 3, 4, 5];
const squaredArray = originalArray.map(num => num ** 2);
console.log(squaredArray);

// [1, 4, 9, 16, 25]
```
***3. Convert strings to uppercase***

```
const words = ['apple', 'banana', 'cherry'];
const uppercaseWords = words.map(word => word.toUpperCase());
console.log(uppercaseWords);

// ['APPLE', 'BANANA', 'CHERRY']

```

***4. Extract lengths of strings***
```
const words = ['apple', 'banana', 'cherry'];
const lengths = words.map(word => word.length);
console.log(lengths);

// [5, 6, 6]

```

***5. Convert Fahrenheit temperatures to Celsius***
```
const fahrenheitTemps = [32, 68, 104, 212];
const celsiusTemps = fahrenheitTemps.map(temp => (temp - 32) * (5/9));
console.log(celsiusTemps);

// [0, 20, 40, 100]

```

***6. Filter out odd numbers***
```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbers.map(num => num * 2).filter(num => num % 2 === 0);
console.log(evenNumbers);

// [4, 8, 12, 16]

```

***7. Add index to each element***
```
const originalArray = ['a', 'b', 'c', 'd'];
const arrayWithIndex = originalArray.map((element, index) => `${element}-${index}`);
console.log(arrayWithIndex);

// ['a-0', 'b-1', 'c-2', 'd-3']

```
***8. Convert array of objects to an array of specific property values***
```
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
const userIds = users.map(user => user.id);
console.log(userIds);

// [1, 2, 3]

```

***9. Calculate the total price of items***
```
const items = [
  { name: 'Widget', price: 10 },
  { name: 'Gadget', price: 20 },
  { name: 'Doodad', price: 5 }
];
const totalPrice = items.map(item => item.price).reduce((acc, price) => acc + price, 0);
console.log(totalPrice);

// 35

```

***10. Capitalize the first letter of each word in a sentence:***
```
const sentence = 'hello world from javascript';
const capitalizedWords = sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1));
console.log(capitalizedWords.join(' '));

// 'Hello World From Javascript'

```

***11. Create an array of objects with index and value***
```
const originalArray = ['a', 'b', 'c', 'd'];
const arrayWithIndexAndValue = originalArray.map((element, index) => ({ index, value: element }));
console.log(arrayWithIndexAndValue);

// [{ index: 0, value: 'a' }, { index: 1, value: 'b' }, { index: 2, value: 'c' }, { index: 3, value: 'd' }]

```

***12. Multiply elements of two arrays at corresponding indices***
```
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const multipliedArray = array1.map((num, index) => num * array2[index]);
console.log(multipliedArray);

// [4, 10, 18]

```

***13. Calculate squares of odd numbers and cubes of even numbers***
```
const numbers = [1, 2, 3, 4, 5];
const transformedNumbers = numbers.map(num => (num % 2 === 0) ? num ** 3 : num ** 2);
console.log(transformedNumbers);

// [1, 8, 9, 64, 25]

```

***14. Convert a string to an array of characters***
```
const randomNumbers = Array.from({ length: 5 }, () => Math.random());
console.log(randomNumbers);

```

***15. Reverse the elements of an array***
```
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = originalArray.map((_, index, array) => array[array.length - 1 - index]);
console.log(reversedArray);

// [5, 4, 3, 2, 1]

```
