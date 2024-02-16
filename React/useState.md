## React useState() hook...

***1. Counter Example:***
```
import React, { useState } from 'react';

const CounterExample = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CounterExample;

```
***2. Input Field Example:***
```
import React, { useState } from 'react';

const InputExample = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Input Value: {inputValue}</p>
    </div>
  );
};

export default InputExample;

```
***3. Toggle Example:***
```
import React, { useState } from 'react';

const ToggleExample = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <p>Toggle: {isToggled ? 'On' : 'Off'}</p>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
    </div>
  );
};

export default ToggleExample;

```
***4. Array Example:***
```
import React, { useState } from 'react';

const ArrayExample = () => {
  const [myArray, setMyArray] = useState([1, 2, 3]);

  const addItem = () => {
    setMyArray([...myArray, myArray.length + 1]);
  };

  return (
    <div>
      <p>Array: {JSON.stringify(myArray)}</p>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default ArrayExample;
```
***5. Multiple States Example:***
```
import React, { useState } from 'react';

const MultipleStatesExample = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  return (
    <div>
      <p>{`Name: ${name}, Age: ${age}`}</p>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Age" onChange={(e) => setAge(parseInt(e.target.value))} />
    </div>
  );
};

export default MultipleStatesExample;


```
***6. Object Example:***
```
import React, { useState } from 'react';

const ObjectExample = () => {
  const [person, setPerson] = useState({ name: '', age: 0 });

  return (
    <div>
      <p>{`Name: ${person.name}, Age: ${person.age}`}</p>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Age"
        onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value) })}
      />
    </div>
  );
};

export default ObjectExample;

```
***7.  Previous State Example:***
```
import React, { useState } from 'react';

const PreviousStateExample = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default PreviousStateExample;

```
***8. Reset State Example:***
```
import React, { useState } from 'react';

const ResetStateExample = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const resetCount = () => {
    setCount(initialCount);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default ResetStateExample;

```
***9.  Effect Hook Example:***
```
import React, { useState, useEffect } from 'react';

const EffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default EffectExample;

```
***10. Conditional Rendering Example:***
```
import React, { useState } from 'react';

const ConditionalRenderingExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default ConditionalRenderingExample;

```
***11. Form data example:***
```
import React, { useState } from 'react';

const ComplexFormExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Perform validation
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = '';

    switch (name) {
      case 'username':
        errorMessage = value.length < 3 ? 'Username must be at least 3 characters' : '';
        break;
      case 'email':
        errorMessage = !/\S+@\S+\.\S+/.test(value) ? 'Invalid email address' : '';
        break;
      case 'password':
        errorMessage = value.length < 6 ? 'Password must be at least 6 characters' : '';
        break;
      case 'confirmPassword':
        errorMessage =
          value !== formData.password ? 'Passwords do not match' : '';
        break;
      default:
        break;
    }

    setFormErrors({
      ...formErrors,
      [name]: errorMessage,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform final validation before submission
    if (Object.values(formErrors).every((error) => error === '')) {
      // Submit the form (in this example, just log the form data)
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  return (
    <div>
      <h2>Complex Form Example</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <span>{formErrors.username}</span>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span>{formErrors.email}</span>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <span>{formErrors.password}</span>
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <span>{formErrors.confirmPassword}</span>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ComplexFormExample;

```
***12. Complex example***
```
import React, { useState } from 'react';

const DynamicFormExample = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    hobbies: [''],
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    hobbies: [''],
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (name === 'hobbies') {
      const updatedHobbies = [...formData.hobbies];
      updatedHobbies[index] = value;

      setFormData({
        ...formData,
        hobbies: updatedHobbies,
      });

      // Perform validation for the specific hobby
      validateField(name, updatedHobbies, index);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });

      // Perform validation for other fields
      validateField(name, value);
    }
  };

  const validateField = (name, value, index) => {
    let errorMessage = '';

    switch (name) {
      case 'firstName':
        errorMessage = value.length < 2 ? 'First name must be at least 2 characters' : '';
        break;
      case 'lastName':
        errorMessage = value.length < 2 ? 'Last name must be at least 2 characters' : '';
        break;
      case 'email':
        errorMessage = !/\S+@\S+\.\S+/.test(value) ? 'Invalid email address' : '';
        break;
      case 'hobbies':
        errorMessage = value[index].length < 3 ? 'Hobby must be at least 3 characters' : '';
        break;
      default:
        break;
    }

    if (name === 'hobbies') {
      setFormErrors((prevErrors) => {
        const updatedHobbyErrors = [...prevErrors.hobbies];
        updatedHobbyErrors[index] = errorMessage;

        return {
          ...prevErrors,
          [name]: updatedHobbyErrors,
        };
      });
    } else {
      setFormErrors({
        ...formErrors,
        [name]: errorMessage,
      });
    }
  };

  const addHobbyField = () => {
    setFormData({
      ...formData,
      hobbies: [...formData.hobbies, ''],
    });

    setFormErrors({
      ...formErrors,
      hobbies: [...formErrors.hobbies, ''],
    });
  };

  const removeHobbyField = (index) => {
    const updatedHobbies = [...formData.hobbies];
    updatedHobbies.splice(index, 1);

    setFormData({
      ...formData,
      hobbies: updatedHobbies,
    });

    setFormErrors((prevErrors) => {
      const updatedHobbyErrors = [...prevErrors.hobbies];
      updatedHobbyErrors.splice(index, 1);

      return {
        ...prevErrors,
        hobbies: updatedHobbyErrors,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform final validation before submission
    if (
      Object.values(formErrors).every((error) =>
        Array.isArray(error) ? error.every((hobbyError) => hobbyError === '') : error === ''
      )
    ) {
      // Submit the form (in this example, just log the form data)
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  return (
    <div>
      <h2>Dynamic Form Example</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => handleChange(e)}
          />
          <span>{formErrors.firstName}</span>
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => handleChange(e)}
          />
          <span>{formErrors.lastName}</span>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
          <span>{formErrors.email}</span>
        </div>

        <div>
          <h3>Hobbies:</h3>
          {formData.hobbies.map((hobby, index) => (
            <div key={index}>
              <input
                type="text"
                value={hobby}
                onChange={(e) => handleChange(e, index)}
                placeholder={`Hobby #${index + 1}`}
              />
              <button type="button" onClick={() => removeHobbyField(index)}>
                Remove Hobby
              </button>
              <span>{formErrors.hobbies[index]}</span>
            </div>
          ))}
          <button type="button" onClick={addHobbyField}>
            Add Hobby
          </button>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DynamicFormExample;

```
***13. Array related:***
```
import React, { useState } from 'react';

const ArrayComplexExample = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ]);

  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      // Creating a new item with a unique ID
      const newItemObject = {
        id: items.length + 1,
        name: newItem,
      };

      // Updating the state with the new item
      setItems([...items, newItemObject]);

      // Clearing the input field
      setNewItem('');
    }
  };

  const removeItem = (itemId) => {
    // Filtering out the item with the specified ID
    const updatedItems = items.filter((item) => item.id !== itemId);

    // Updating the state without the removed item
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>Array Complex Example</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter a new item"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
};

export default ArrayComplexExample;

```
***14. Dynamic Form with Array of Objects***
```
import React, { useState } from 'react';

const DynamicFormArrayExample = () => {
  const [users, setUsers] = useState([
    { id: 1, name: '', email: '' },
    { id: 2, name: '', email: '' },
  ]);

  const handleChange = (e, userId) => {
    const { name, value } = e.target;
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, [name]: value } : user
    );
    setUsers(updatedUsers);
  };

  const addUser = () => {
    const newUserId = users.length + 1;
    setUsers([...users, { id: newUserId, name: '', email: '' }]);
  };

  const removeUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>Dynamic Form with Array Example</h2>
      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={(e) => handleChange(e, user.id)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={(e) => handleChange(e, user.id)}
          />
          <button onClick={() => removeUser(user.id)}>Remove User</button>
        </div>
      ))}
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default DynamicFormArrayExample;

```
***15. Input range value***
```
import React, { useState } from 'react';

const RangeInputExample = () => {
  const [fontSize, setFontSize] = useState(16);

  const handleFontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <h2>Range Input Example</h2>
      <label htmlFor="fontSizeRange">Adjust Font Size:</label>
      <input
        type="range"
        id="fontSizeRange"
        min="10"
        max="40"
        step="1"
        value={fontSize}
        onChange={handleFontSizeChange}
      />
      <p style={{ fontSize: `${fontSize}px`, marginTop: '20px' }}>
        This is a dynamically sized text.
      </p>
      <p>Current Font Size: {fontSize}px</p>
    </div>
  );
};

export default RangeInputExample;

```
***1. ***
```
const timeoutRef = useRef(null);
useEffect(() => {
  timeoutRef.current = setTimeout(next, 3000);

  return () => {
    // Cleanup: Clear the timeout on unmount or dependency change
    clearTimeout(timeoutRef.current);
  };
}, [slide]); // Only re-run if `slide` changes
<div
  onMouseEnter={() => {
    clearTimeout(timeoutRef.current); // Clear timeout on mouse enter
  }}
  onMouseLeave={() => {
    timeoutRef.current = setTimeout(next, 3000); // Reset timeout on mouse leave
  }}
>
  {/* Div content */}
</div>

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
