***1. Find the maximum and minimum elements in an array***
```
let arr = [3, 5, 7, 2, 8, -1, 4, 10, 12];

// Finding the maximum element
let max = Math.max(...arr);

// Finding the minimum element
let min = Math.min(...arr);

console.log("Max:", max); // Output: Max: 12
console.log("Min:", min); // Output: Min: -1

```
***2. Reverse an array***
```
let arr = [1, 2, 3, 4, 5];

// Reversing the array
let reversedArr = arr.reverse();

console.log("Reversed Array:", reversedArr); // Output: [5, 4, 3, 2, 1]

```
***3. Find the sum of all elements in an array***
```
let arr = [1, 2, 3, 4, 5];

// Finding the sum of all elements
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum:", sum); // Output: Sum: 15

```
***4. Remove duplicates from an array***
```
let arr = [1, 2, 3, 4, 5, 3, 2, 1];

// Removing duplicates
let uniqueArr = [...new Set(arr)];

console.log("Unique Array:", uniqueArr); // Output: [1, 2, 3, 4, 5]

```
***5. Find the index of a specific element in an array***
```
let arr = [1, 2, 3, 4, 5];

// Finding the index of element 3
let index = arr.indexOf(3);

console.log("Index of 3:", index); // Output: Index of 3: 2

```
***6. Find the second largest element in an array***
```
let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];

// Finding the second largest element
let sortedArr = arr.sort((a, b) => b - a);
let secondLargest = sortedArr[1];

console.log("Second Largest Element:", secondLargest); // Output: 6

```
***7. Merge two arrays and remove duplicates***
```
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

// Merging and removing duplicates
let mergedArr = [...new Set([...arr1, ...arr2])];

console.log("Merged Array without duplicates:", mergedArr); // Output: [1, 2, 3, 4, 5]

```
***8. Find the intersection of two arrays***
```
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

// Finding the intersection
let intersection = arr1.filter(value => arr2.includes(value));

console.log("Intersection:", intersection); // Output: [4, 5]

```
***9. Find the difference between two arrays***
```
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

// Finding the difference (elements in arr1 but not in arr2)
let difference = arr1.filter(value => !arr2.includes(value));

console.log("Difference:", difference); // Output: [1, 2, 3]

```
***10.  Rotate an array k times***
```
let arr = [1, 2, 3, 4, 5];
let k = 2;

// Rotating the array k times to the right
function rotateArray(arr, k) {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

let rotatedArr = rotateArray(arr, k);

console.log("Rotated Array:", rotatedArr); // Output: [4, 5, 1, 2, 3]

```
***11. Find all subarrays with a given sum***
```
let arr = [1, 2, 3, 4, 5];
let targetSum = 9;

// Finding all subarrays with the given sum
function subarraysWithSum(arr, sum) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0;
        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j];
            if (currentSum === sum) {
                result.push(arr.slice(i, j + 1));
            }
        }
    }
    return result;
}

let subarrays = subarraysWithSum(arr, targetSum);

console.log("Subarrays with sum", targetSum, ":", subarrays); // Output: [[2, 3, 4], [4, 5]]

```




