

// <========= String method ========>
//Searching
search()               // return index number do with regex
indexOf(str,15)       //return index number any words or letter
lastIndexOf(str,15)   //retuirn index number from last position
match()               //return match result with an array
matchAll()            //retruns an iterator then (convert array.from)
includes('word',12)    //return true or false with specified value
startsWith('word', 7)  //returns true if a string begins with a specified value.
endsWith('word', 8)     //returns true if a string ends with a specified value

//Trimming
trim()                  //removes whitespace from both sides of a string:
trimStart()             //removes whitespace from start position of a string:
trimEnd()               //removes whitespace from end position of a string:

//Padding
padStart(index,'word')      //samne padding kore kisu add kore
padEnd()                    //word er sesh e add kore

//Extracting
slice(start,end)     //extracts a part of a string and returns the extracted part in a new string.        
substring(start,end) //same as slice difference that less than 0 are trated as 0

//Concatenating & interpolating
concat()            //joins two or more strings
charAt()        //returns the character at a specified index (position) in a string
charCodeAt()    //returns the unicode of the character at a specified index in a string          

//Replacing
replace('replce','new')  //replaces a specified value with another value in a string
replaceAll('p1','p2')            //replace all match element

//Changing cases
toUpperCase()                    //Convert all text uppercase
toLowerCase()                   //Convert all text lowerercase


// < = = = = = JAVASCRIPT ARAAY = = = = = >
// Adding & removing elements
push('word')          // add one or more elements to the end of an array.
pop()           // remove an element from the end of an array.
shift()          // remove the first element from an array.
unshift('word')       // add one or more elements to the beginning of an array.
splice(start,deleteCount,itm1,item2)       
slice(start,end)         //copy elements of an array.

// Finding elements
at()                //returns an indexed element from an array
indexOf()           //locate an element in an array.
includes()           //check if an element is in an array.
find(v, i, a)              //returns the value of the first array element that passes a test function.
findIndex(v, i, a)         //returns the index of the first array element that passes a test function.

// High-order methods
map(value, index , array)              
forEach(value, index , array)        
filter(value , index, array)         //filtering array element 
reduce(t, v, i, a)          //return sigle value of an array element like total
reduceRight(t,v,i,a)          // it return single value from the right position
every(value , index, array)  //checks if all array values pass a test then return true otherwise false           
some(value , index, array)    // like every but one value pass a test then return true        
sort()              //sorts an array alphabetically
flat()              //creates a new array with sub-array elements concatenated to a specified depth
flatMap(x)          //method maps all array elements and creates a new flat array
Array.from()     //returns an Array object from any object with a length property or any iterable object.
Array.keys()            //returns an Array Iterator object with the keys of an array.
Array.entries()             //Create an Array Iterator, and then iterate over the key/value pairs

// Manipulating Arrays
concat()
join()
reverse()           //reverses the elements in an array
toReversed() 
split()

// < = = = = = JAVASCRIPT OPERATORS = = = = = >
Arithmetic Operators
Assignment Operators
Comparison Operators
Logical Operators
Type Operators
Spread operator
Ternary/conditional Operators
Nullish Coalescing Operators
The Optional Chaining Operator (?.)

// < = = = = = JAVASCRIPT NUMBER METHODS = = = = = >
//global
toString()
toPrecision()
ValueOf()
toExponential()
toFixed()

//Convert variables to numbers
Number()
parseFloat()
parseInt()

//Number Object Methods
Number.isInteger()
Number.isSafeInteger()
Number.parseFloat()
Number.parseInt()

//Numbers Properties
NaN
EPSILON
MAX_VALUE
MIN_VALUE
MAX_SAFE_INTEGER
MIN_SAFE_INTEGER
POSITIVE_INFINITY
NEGATIVE_INFINITY

// < = = = = = JAVASCRIPT MATH METHODS = = = = = >
//Number to integer
Math.round(x)	//Returns x rounded to its nearest integer
Math.ceil(x)	//Returns x rounded up to its nearest integer
Math.floor(x)	//Returns x rounded down to its nearest integer
Math.trunc(x)	//Returns the integer part of x
Math.random()   // show random number every time

// constants
Math.E         // returns Euler's number
Math.PI        // returns PI
Math.SQRT2     // returns the square root of 2
Math.SQRT1_2   // returns the square root of 1/2
Math.LN2       // returns the natural logarithm of 2
Math.LN10      // returns the natural logarithm of 10
Math.LOG2E     // returns base 2 logarithm of E
Math.LOG10E    // returns base 10 logarithm of E

// More...
Math.sign(x)        //returns if x is negative, null or positive
Math.pow(x, y)      //returns the value of x to the power of y
Math.sqrt(x)        //returns the square root of x
Math.abs(x)         //returns the absolute (positive) value of x

// < = = = = = JAVASCRIPT DATE METHODS = = = = = >
//Get Date Method
getTime()
Date.now()
getFullYear()
getMonth()
getDate()
getDay()
getHours()
getMinutes()
getSeconds()
getMilliseconds()

//Set Date Method
setTime()
setDate()
setFullYear()
setHours()
setMilliseconds()
setMinutes()
setMonth()
setSeconds()

// < = = = = = JAVASCRIPT SET METHODS = = = = = >
size
new Set()
add()
delete()
has()
values()

// < = = = = = JAVASCRIPT MAP METHODS = = = = = >
size
new map()
set()
get()
delete()
has()
entries()

// < = = = = = JAVASCRIPT LOOPING = = = = = >
if()
if else
if else if
for()
for in 
fo of 
while()
do...while 
switch case

 // < = = = = = JAVASCRIPT BOM = = = = = >        
//Window
window.innerHeight
window.innerWidth 
window.open()
window.close()
window.moveTo()
window.resizeTo()
//Screen
window.screen
screen.width
screen.height
screen.availWidth
screen.availHeight
screen.colorDepth
screen.pixelDepth
//Location
window.location
window.location.href
window.location.hostname
window.location.pathname
window.location.protocol
window.location.assign()
//History
window.history
history.back()
history.forward()
history.go()
history.length
//Navigator
window.navigator
navigator.cookieEnabled
navigator.language
navigator.userAgent
navigator.onLine
javaEnabled()
//PopUp Alert
window.alert()
window.prompt
//Timing
setTimeout
clearTimeout()
setInterval
clearInterval()
//Cookies
document.cookie

// < = = = = = JAVASCRIPT DOM = = = = = >
// Selecting elements
getElementById()            // select an element by id.
getElementsByName()         // select elements by name.
getElementsByTagName()      // select elements by a tag name.
getElementsByClassName()   // select elements by one or more class names.
querySelector()             // select elements by CSS selectors.
querySelectorAll()
//Text Property
textConent
innerText
innerHTML
outerHTML
outerText
createTextNode

//Traversing Element
parentNode
childNodes
firstElementChild
lastElementChild
nextElementSibling
previousElementSibling
childElementCount
nodeName
nodeType
nodeValue
//Manipulating Elements
createElement()
appendChild()
append()
prepend()
after()
DocumentFragment()
insertAdjacentHTML()
insertAdjacentText()
insertAdjacentElement()
insertBefore()
insertAfter()
replaceChild()
removeChild()
cloneNode()
style
getComputedStyle()
className
classList
toggle()
offsetWidth
offsetHeight
clientWidth
clientHeight
//Work with Attributes
setAttribute
getAttribute
removeAttribute
hasAttribute
     
// <========= JS EVENTS ========>
//Form events
onblur
onchange
oncontextmenu
onfocus
oninput
oninvalid
onselect
onsearch
onsubmit
onreset
// Keyborad Events
onkeydown
onkeydown
onkeyup
//Mouse Events
onclick
ondblclick
onmouseup
onmousedown
onmouseout
onmouseover
onmousemove
onwheel
//Drag Events
ondrag
ondragstart
ondragend
ondragenter
ondragleave
ondrop
ondragover
onscroll
//Clipboard Events
oncopy
oncut
onpaste
//Load Events
onload
onerror
onunload
onresize
//hashchange Event
//Custom Event
//Mutation Observer

// < = = = = = JS OBJECTS = = = = = >
 Properties
 Display
 Accessors
 Constructors
 Prototypes
 Iterables

 // < = = = = = JS FUNCTION = = = = = >
 arrow function
 Parameters
 Invocation
 Call
 Apply
 Bind
 Closures

 // < = = = = = JS ASYNC = = = = = >
 Callbacks
 Asynchronous
 Promises
 Await

 // < = = = = = JS WEB API = = = = = >
 Forms
 History
 Storage 
 Worker 
 Fetch
 Geolocation

// < = = = = = JS AJAX = = = = = >
XMLHttpRequest
Request
Response
XML File
Database
Applications

// < = = = = = JS JSON = = = = = >
Data Types
Parse
Stringify
Objects
Arrays
Server


// < = = = = = JS MORE... = = = = = >
RegExp
scope
hoisting
strict mode
modules
deafault Parameters
Symbol
classes
Rest Parameters
Error handel
Rest Operator
destructuring

// <========= JS PROJECTS ========>
search functions
Accordion
Tabs menu
Responsive Navbar
Mega Menu
Time Line
Progress Bar
Skill bar
Pagination
Range Sliders
Tooltips
Loaders
Todo List
badges
User rating












