## JavaScript High order Function 

### map() method
***Example-1***
  ```
  let arr = [3, 4, 5, 6];

  for (let i = 0; i < arr.length; i++){
  arr[i] = arr[i] * 3;
  } 

  console.log(arr);

// [9, 12, 15, 18]

  ```
***Example-2***
```
let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

console.log(modifiedArr);

//  [9, 12, 15, 18]

```
***Example-3***
```
const nestedNumbers = [[1, 2], [3, 4], [5, 6]];
const flattened = nestedNumbers.map(subArray => subArray.reduce((a, b) => a + b));
console.log(flattened);

// Output:
// [3, 7, 11]
```
***Example-3***
```
let users = [
  {firstName : "Susan", lastName: "Steward"},
  {firstName : "Daniel", lastName: "Longbottom"},
  {firstName : "Jacob", lastName: "Black"}
];

let userFullnames = users.map(function(element){
    return `${element.firstName} ${element.lastName}`;
})

console.log(userFullnames);

// ["Susan Steward", "Daniel Longbottom", "Jacob Black"] 
```
***Exmaple-3***
```
// Input array
let arr = [2, 5, 6, 3, 8, 9];

// Using map to transform elements
let newArr = arr.map(function (val, index) {
	return { key: index, value: val * val };
})

// Display output
console.log(newArr)

//
[
  { key: 0, value: 4 },
  { key: 1, value: 25 },
  { key: 2, value: 36 },
  { key: 3, value: 9 },
  { key: 4, value: 64 },
  { key: 5, value: 81 }
]
```
***Example-4***
```
const employees = [
    { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
    { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
    { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
    { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];

// calculate the net amount to be given to the employees
const calcAmt = (obj) => {
    newObj = {};
    newObj.name = obj.name;
    newObj.netEarning = obj.salary + obj.bonus - obj.tax;
    return newObj;
};

let newArr = employees.map(calcAmt);
console.log(newArr);

//OUTPUT

[
  { name: 'Adam', netEarning: 4500 },
  { name: 'Noah', netEarning: 7000 },
  { name: 'Fabiano', netEarning: 1800 },
  { name: 'Alireza', netEarning: 4600 }
]
```


