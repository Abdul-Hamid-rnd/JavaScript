## ❤️ JavaScript switch method
***1. Basic Switch***
```
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}

// Output: Wednesday

```
***2. Multiple Cases***
```
let number = 5;

switch (number) {
  case 1:
  case 3:
  case 5:
    console.log("Odd number");
    break;
  case 2:
  case 4:
  case 6:
    console.log("Even number");
    break;
  default:
    console.log("Other number");
}

// Output: Odd number

```
***3. Range Check***
```
let score = 75;

switch (true) {
  case score >= 90:
    console.log("A");
    break;
  case score >= 80:
    console.log("B");
    break;
  case score >= 70:
    console.log("C");
    break;
  default:
    console.log("Fail");
}

// Output: C

```
***4.  Using break with Labels***
```
let outer = 1;

switch (outer) {
  case 1:
    console.log("Outer case");
    switch (outer + 1) {
      case 2:
        console.log("Inner case");
        break;
      default:
        console.log("Inner default");
    }
    break;
  default:
    console.log("Outer default");
}

// Output: Outer case, Inner case

```
***5.Classify grades into A, B, C, D, or F using a switch statement:***
```

let grade = 'B';

// Solution:
let gradeClass;

switch (grade) {
  case 'A':
    gradeClass = "Excellent";
    break;
  case 'B':
    gradeClass = "Good";
    break;
  case 'C':
    gradeClass = "Average";
    break;
  case 'D':
    gradeClass = "Below Average";
    break;
  case 'F':
    gradeClass = "Fail";
    break;
  default:
    gradeClass = "Invalid Grade";
}

console.log(gradeClass);

```
