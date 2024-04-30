## Promise JavaScript......

***1.Creating a promise***
```// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber); // Resolve with a value
    } else {
      reject(new Error('Random number is too low')); // Reject with an error
    }
  }, 1000); // Simulating a delay of 1 second
});

// Using the promise
myPromise
  .then((result) => {
    console.log('Promise resolved with value:', result);
  })
  .catch((error) => {
    console.error('Promise rejected with error:', error);
  });

```
***2. ***
```

```
***3. ***
```

```
***4. ***
```

```
***5. ***
```

```
***6. ***
```

```
***7. ***
```

```
***8. ***
```

```
***9. ***
```

```
***10. ***
```

```
