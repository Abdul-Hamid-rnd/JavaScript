## Conditional Rendering in React

***1. Using if Statements:***
```
function WelcomeMessage(props) {
  if (props.isLoggedIn) {
    return <p>Welcome back, {props.username}!</p>;
  } else {
    return <p>Please log in.</p>;
  }
}

```
***2. Ternary Operator:***
```
function ShowButton(props) {
  const showButton = props.show;
  const buttonText = showButton ? 'Hide' : 'Show';
  return <button onClick={props.onToggle}>{buttonText}</button>;
}

```
***3. Logical AND Operator (&&):***
```
function ShowIfLength(props) {
  const items = props.items;
  return items.length > 0 && <p>There are {items.length} items.</p>;
}

```
***4. Short-Circuiting:***
```
function ShowImageIfAvailable(props) {
  return props.image && <img src={props.image} alt={props.altText} />;
}

```
***5. Component Rendering:***
```
function ShowContent(props) {
  const isLoggedIn = props.isLoggedIn;
  const content = isLoggedIn ? <LoggedInContent /> : <PublicContent />;
  return content;
}

```
***6. Hooks for State Management:***
```
function ToggleableContent(props) {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <>
      <button onClick={() => setIsShowing(!isShowing)}>
        {isShowing ? 'Hide' : 'Show'}
      </button>
      {isShowing && <p>This content is now visible.</p>}
    </>
  );
}

```
***7. Toggle class Using State and Ternary Operator:***
```
import React, { useState } from 'react';

function ToggleableElement() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={isActive ? 'active' : ''}>
      This element is {isActive ? 'active' : 'inactive'}.
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

```
***8. Using the classList.toggle() Method:***
```
import React, { useRef } from 'react';

function ToggleableElement() {
  const elementRef = useRef(null);

  const handleClick = () => {
    elementRef.current.classList.toggle('active');
  };

  return (
    <div ref={elementRef} className="element">
      This element is toggled by button.
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

```
***9. ***
```

```
***10. ***
```

```
