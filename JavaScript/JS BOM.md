## JS BOM ❓

***The Browser Object Model (BOM) is a concept in JavaScript that refers to all the objects provided by the browser to interact with the browser window and its components. Unlike the Document Object Model (DOM), which focuses on manipulating and interacting with HTML documents, the BOM deals with the browser itself and allows JavaScript to communicate with and control the browser environment.***

### ⬇️ Key Features of the BOM

✅ **Timers :**
*The BOM provides methods for setting and clearing timers, such as setTimeout(), setInterval(), clearTimeout(), and clearInterval(). These are used to execute code after a specified delay or repeatedly at a specified interval.*

```
1. setTimeout
2. clearTimeout()
3. setInterval
4. clearInterval()
```

✅ **Window Object :**
*The window object is the main object of the BOM and represents the browser window or frame containing a web page. All global JavaScript objects, functions, and variables automatically become members of the window object.*

```
1. window.innerHeight
2. window.innerWidth
3. window.open()
4. window.close()
5. window.moveTo()
6. window.resizeTo()
```

✅ **Navigator Object :**
*The navigator object contains information about the browser, such as its name, version, and the operating system on which it is running. It can be used to detect the user's browser and make decisions based on that.*

```
1. window.navigator
2. navigator.cookieEnabled
3. navigator.language
4. navigator.userAgent
5. navigator.onLine
6. javaEnabled()
```

✅ **Location Object :**
*The location object contains information about the current URL of the browser window. It allows you to get or set the URL, reload the page, or redirect the browser to a new page.*

```
1. window.location
2. window.location.href
3. window.location.hostname
4. window.location.pathname
5. window.location.protocol
6. window.location.assign()
```

✅ **History Object :**
*The history object provides access to the browser's session history. This allows navigation through the history using methods like back(), forward(), and go().*

```
1. window.history
2. history.back()
3. history.forward()
4. history.go()
5. history.length
```

✅ **Screen Object :**
*The screen object contains information about the user's screen, such as its width, height, color depth, and more. This can be useful for optimizing content for different screen sizes.*

```
1. window.screen
2. screen.width
3. screen.height
4. screen.availWidth
5. screen.availHeight
6. screen.colorDepth
7. screen.pixelDepth
```

✅ **Popup Alerts and Prompts :**
 *The BOM provides methods for setting and clearing timers, such as setTimeout(), setInterval(), clearTimeout(), and clearInterval(). These are used to execute code after a specified delay or repeatedly at a specified interval.*

 ```
1. window.alert()
2. window.prompt()
3. window.confirm()
```
