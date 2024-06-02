***1. Remove falsy values from an array***
```
let arr = [0, 1, false, 2, '', 3, null, undefined, NaN];

// Removing falsy values
let truthyArr = arr.filter(Boolean);

console.log("Array without falsy values:", truthyArr); // Output: [1, 2, 3]

```
***2. Chunk an array into smaller arrays of a specified size***
```
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Chunking the array into smaller arrays of size 3
function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

let chunkedArr = chunkArray(arr, 3);

console.log("Chunked Array:", chunkedArr); // Output: [[1, 2, 3], [4, 5, 6], [7, 8]]

```
***3. Zip two arrays into an array of pairs***
```
let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];

// Zipping the arrays
let zippedArr = arr1.map((value, index) => [value, arr2[index]]);

console.log("Zipped Array:", zippedArr); // Output: [['a', 1], ['b', 2], ['c', 3]]

```
***4. Unzip an array of pairs into two arrays***
```
let zippedArr = [['a', 1], ['b', 2], ['c', 3]];

// Unzipping the array
let [unzippedArr1, unzippedArr2] = zippedArr.reduce((acc, val) => {
    acc[0].push(val[0]);
    acc[1].push(val[1]);
    return acc;
}, [[], []]);

console.log("Unzipped Arrays:", unzippedArr1, unzippedArr2); // Output: ['a', 'b', 'c'] [1, 2, 3]

```
***5. Find the union of two arrays***
```
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

// Finding the union
let union = [...new Set([...arr1, ...arr2])];

console.log("Union:", union); // Output: [1, 2, 3, 4, 5]

```
***6. Check if all elements in an array are unique***
```
let arr = [1, 2, 3, 4, 5, 6];

// Checking for uniqueness
let isUnique = new Set(arr).size === arr.length;

console.log("All elements are unique:", isUnique); // Output: true

```
***7. Find the median of an array***
```
let arr = [5, 3, 1, 4, 2];

// Finding the median
arr.sort((a, b) => a - b);
let median;
let mid = Math.floor(arr.length / 2);

if (arr.length % 2 === 0) {
    median = (arr[mid - 1] + arr[mid]) / 2;
} else {
    median = arr[mid];
}

console.log("Median:", median); // Output: 3

```
***8. Find the longest common prefix among an array of strings***
```
let strs = ["flower", "flow", "flight"];

if (strs.length === 0) {
    console.log("Longest common prefix: ''");
} else {
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") break;
        }
    }
    console.log("Longest common prefix:", prefix); // Output: "fl"
}

```
***9. Move all zeroes to the end of the array***
```
let arr = [0, 1, 0, 3, 12];

// Moving all zeroes to the end
let nonZeroArr = arr.filter(num => num !== 0);
let zeroCount = arr.length - nonZeroArr.length;
let result = [...nonZeroArr, ...Array(zeroCount).fill(0)];

console.log("Array after moving zeroes:", result); // Output: [1, 3, 12, 0, 0]

```
***10. Find the k-th largest element in an array***
```
let arr = [3, 2, 1, 5, 6, 4];
let k = 2;

// Finding the k-th largest element
arr.sort((a, b) => b - a);
let kthLargest = arr[k - 1];

console.log(`${k}-th largest element:`, kthLargest); // Output: 5

```
***11. Remove a specific element from an array***
```
let arr = [1, 2, 3, 4, 3, 5];
let removeElement = 3;

// Removing the specific element
let filteredArr = arr.filter(el => el !== removeElement);

console.log("Array after removing element:", filteredArr); // Output: [1, 2, 4, 5]

```
***12. Find the most frequent element in an array***
```
let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

// Finding the most frequent element
let frequency = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
}, {});

let mostFrequent = Object.keys(frequency).reduce((a, b) => 
    frequency[a] > frequency[b] ? a : b);

console.log("Most frequent element:", mostFrequent); // Output: 4

```
***13. Find the first non-repeating element in an array***
```
let arr = [4, 5, 1, 2, 0, 4];

// Finding the first non-repeating element
let frequency = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
}, {});

let firstNonRepeating = arr.find(el => frequency[el] === 1);

console.log("First non-repeating element:", firstNonRepeating); // Output: 5

```
***14. Compute the running sum of an array***
```
let arr = [1, 2, 3, 4];

// Computing the running sum
let runningSum = arr.reduce((acc, val, index) => {
    acc.push((acc[index - 1] || 0) + val);
    return acc;
}, []);

console.log("Running sum:", runningSum); // Output: [1, 3, 6, 10]

```
***15.  Partition an array into two arrays based on a condition***
```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Partitioning into even and odd numbers
let [evens, odds] = arr.reduce(
    (acc, val) => {
        val % 2 === 0 ? acc[0].push(val) : acc[1].push(val);
        return acc;
    },
    [[], []]
);

console.log("Evens:", evens); // Output: [2, 4, 6, 8, 10]
console.log("Odds:", odds); // Output: [1, 3, 5, 7, 9]

```
***16.  Find the intersection of multiple arrays***
```
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
let arr3 = [3, 4, 5];

// Finding the intersection of multiple arrays
let intersection = arr1.filter(value => arr2.includes(value) && arr3.includes(value));

console.log("Intersection:", intersection); // Output: [3]

```
***17. Remove elements from the array that appear in another array***
```
let arr = [1, 2, 3, 4, 5];
let removeArr = [2, 4];

// Removing elements that appear in removeArr
let resultArr = arr.filter(value => !removeArr.includes(value));

console.log("Array after removal:", resultArr); // Output: [1, 3, 5]

```
***18. Find all pairs in an array that sum up to a specific target***
```
let arr = [1, 2, 3, 4, 5, 6, 7];
let target = 8;

// Finding all pairs that sum up to the target
let pairs = [];
let numSet = new Set(arr);

arr.forEach(num => {
    let complement = target - num;
    if (numSet.has(complement)) {
        pairs.push([num, complement]);
        numSet.delete(num);
        numSet.delete(complement);
    }
});

console.log("Pairs summing up to target:", pairs); // Output: [[1, 7], [2, 6], [3, 5]]

```
***19. Find all unique triplets in the array which gives the sum of zero***
```
let arr = [-1, 0, 1, 2, -1, -4];

// Finding all unique triplets that sum up to zero
function threeSum(arr) {
    arr.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue;
        let left = i + 1;
        let right = arr.length - 1;
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            if (sum === 0) {
                result.push([arr[i], arr[left], arr[right]]);
                while (left < right && arr[left] === arr[left + 1]) left++;
                while (left < right && arr[right] === arr[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

let triplets = threeSum(arr);

console.log("Triplets that sum to zero:", triplets); // Output: [[-1, -1, 2], [-1, 0, 1]]

```
***20. Group array elements by a specific property***
```
let people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 21 },
    { name: 'David', age: 25 },
];

// Grouping people by age
let groupedByAge = people.reduce((acc, person) => {
    let key = person.age;
    if (!acc[key]) {
        acc[key] = [];
    }
    acc[key].push(person);
    return acc;
}, {});

console.log("Grouped by Age:", groupedByAge);
// Output: { '21': [{ name: 'Alice', age: 21 }, { name: 'Charlie', age: 21 }], '25': [{ name: 'Bob', age: 25 }, { name: 'David', age: 25 }] }

```
