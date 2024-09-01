
***1. Create (POST)***
```
const createData = async () => {
  const data = {
    name: 'John Doe',
    age: 30
  };

  try {
    const response = await fetch('https://api.example.com/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to create data: ' + response.status);
    }

    const result = await response.json();
    console.log('Data created:', result);
  } catch (error) {
    console.error('Error creating data:', error);
  }
};

createData();


```
***2. Read (GET)***
```
const readData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');

    if (!response.ok) {
      throw new Error('Failed to fetch data: ' + response.status);
    }

    const data = await response.json();
    console.log('Data fetched:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

readData();

```
***3. Update (PUT)***
```

```
***2. ***
```
const updateData = async () => {
  const data = {
    name: 'Jane Doe',
    age: 28
  };
  const id = 1; // Example ID

  try {
    const response = await fetch(`https://api.example.com/data/${id}`, {
      method: 'PUT', // Use PATCH if you are only updating part of the resource
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to update data: ' + response.status);
    }

    const result = await response.json();
    console.log('Data updated:', result);
  } catch (error) {
    console.error('Error updating data:', error);
  }
};

updateData();

```
***3. Delete (DELETE)***
```
const deleteData = async () => {
  const id = 1; // Example ID

  try {
    const response = await fetch(`https://api.example.com/data/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Failed to delete data: ' + response.status);
    }

    console.log('Data deleted successfully');
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};

deleteData();

```
***2. Update Partially (PATCH)***
```
const patchData = async () => {
  const partialData = {
    age: 31 // Only updating the age field
  };
  const id = 1; // Example ID of the resource to be updated

  try {
    const response = await fetch(`https://api.example.com/data/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(partialData)
    });

    if (!response.ok) {
      throw new Error('Failed to update data partially: ' + response.status);
    }

    const result = await response.json();
    console.log('Data partially updated:', result);
  } catch (error) {
    console.error('Error partially updating data:', error);
  }
};

patchData();

```


