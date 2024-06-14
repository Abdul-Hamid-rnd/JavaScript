***1. Reverse a String***
```
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // "olleh"

```
***2. Check if a String is a Palindrome***
```
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

```
***3. Count the Number of Vowels in a String***
```
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("hello world")); // 3

```
***4. Find the First Non-Repeated Character***
```
function firstNonRepeatedChar(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

console.log(firstNonRepeatedChar("swiss")); // "w"

```
***5. Check if a String Contains Only Digits***
```
function isNumeric(str) {
    return /^\d+$/.test(str);
}

console.log(isNumeric("12345")); // true
console.log(isNumeric("123a5")); // false

```
***6. Convert the First Letter of Each Word to Uppercase***
```
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords("hello world")); // "Hello World"

```
***7. Remove Duplicate Characters from a String***
```
function removeDuplicates(str) {
    return [...new Set(str)].join('');
}

console.log(removeDuplicates("aabbcc")); // "abc"

```
***8. Find the Longest Word in a String***
```
function longestWord(str) {
    const words = str.split(' ');
    let maxLength = 0;
    let longest = '';
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord("The quick brown fox jumped over the lazy dog")); // "jumped"

```
***9. Count the Occurrences of Each Character in a String***
```
function countCharOccurrences(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

console.log(countCharOccurrences("hello world")); // {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}

```
***10. Replace All Spaces in a String with Hyphens***
```
function replaceSpacesWithHyphens(str) {
    return str.split(' ').join('-');
}

console.log(replaceSpacesWithHyphens("hello world")); // "hello-world"

```
***11. Convert a String to an Array of Words***
```
function stringToArray(str) {
    return str.trim().split(/\s+/);
}

console.log(stringToArray("  hello   world  ")); // ["hello", "world"]

```
***12.  Repeat a String Multiple Times***
```
function repeatString(str, n) {
    return str.repeat(n);
}

console.log(repeatString("hello", 3)); // "hellohellohello"

```
***13. Find the Most Frequent Character in a String***
```
function mostFrequentChar(str) {
    const charCount = {};
    let maxChar = '';
    let maxCount = 0;

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(mostFrequentChar("hello world")); // "l"

```
***14. Convert Snake Case to Camel Case***
```
function snakeToCamel(str) {
    return str.replace(/(_\w)/g, match => match[1].toUpperCase());
}

console.log(snakeToCamel("hello_world")); // "helloWorld"

```
***15.  Convert Camel Case to Snake Case***
```
function camelToSnake(str) {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}

console.log(camelToSnake("helloWorld")); // "hello_world"
```
***16. Find All Permutations of a String***
```
function permutations(str) {
    if (str.length <= 1) return [str];

    const result = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remaining = str.slice(0, i) + str.slice(i + 1);
        for (let perm of permutations(remaining)) {
            result.push(char + perm);
        }
    }
    return result;
}

console.log(permutations("abc")); // ["abc", "acb", "bac", "bca", "cab", "cba"]


```
***17. Count the Number of Words in a String***
```
function countWords(str) {
    return str.trim().split(/\s+/).length;
}

console.log(countWords("hello world")); // 2
console.log(countWords("   one two   three  ")); // 3

```
***18. Convert a String to Title Case***
```
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(toTitleCase("hello world")); // "Hello World"

```
***19. Check if a String is a Valid Email***
```
function isValidEmail(str) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(str);
}

console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid-email")); // false

```
***20. Extract the Domain Name from a URL***
```
function extractDomain(url) {
    return url.replace(/(^\w+:|^)\/\//, '').split('/')[0];
}

console.log(extractDomain("https://www.example.com/path")); // "www.example.com"

```
