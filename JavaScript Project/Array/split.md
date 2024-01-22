## ❤️JavaScript split method...

 ***Example 1: Splitting a String into an Array***
```
const sentence1 = "Hello world, how are you?";
const words1 = sentence1.split(' ');

console.log(words1); 

// Output: ['Hello', 'world,', 'how', 'are', 'you?']
```

***Example 2: Splitting a String with a Different Separator***
```
const date = "2022-01-22";
const parts = date.split('-');

console.log(parts); 

// Output: ['2022', '01', '22']
```

 ***Example 3: Limiting the Number of Splits***
 ```
const sentence2 = "This is a sample sentence.";
const words2 = sentence2.split(' ', 3);

console.log(words2); 

// Output: ['This', 'is', 'a']
```

***Example 4: Splitting a String with a Regular Expression***
```
const sentence3 = "Apples, bananas, oranges";
const fruits = sentence3.split(/,\s*/)
;
console.log(fruits); // Output: 

['Apples', 'bananas', 'oranges']
```

***Example 5: Handling Empty Strings***
```
const data = "one,,three";
const values = data.split(',');

console.log(values);

// Output: ['one', '', 'three']
```

***Example 6: Splitting and Filtering***
```
const sentence4 = "This is a sample sentence with some words.";
const filteredWords = sentence4.split(' ').filter(word => word.length > 3);

console.log(filteredWords); 

// Output: ['This', 'sample', 'sentence', 'with', 'some', 'words.']
```

***Example 7: Splitting Lines from a Multi-line String***
```
const multilineText = "Line 1\nLine 2\nLine 3";
const lines = multilineText.split('\n');

console.log(lines); 

// Output: ['Line 1', 'Line 2', 'Line 3']
```

***Example 8: Splitting and Mapping***
```
const sentence5 = "Hello,world,how,are,you";
const wordsLengths = sentence5.split(',').map(word => word.length);

console.log(wordsLengths); 

// Output: [5, 5, 3, 3, 3]
```
***Example 9: Splitting URL Components***
```
const url = "https://www.example.com/path/to/page";
const urlParts = url.split(/[:/]/);

console.log(urlParts); 

// Output: ['https', '', 'www.example.com', 'path', 'to', 'page']
```

***Example 10: Splitting and Reversing***
```
const sentence6 = "This is a reversed sentence.";
const reversedWords = sentence6.split(' ').reverse();

console.log(reversedWords.join(' ')); 

// Output: "sentence. reversed a is This"
```

