 # Fetch API

 <details>
   <summary>Core Methods</summary>
   
   ```javascript
    // ✅ GET Request (default method)

fetch('https://api.example.com/items')
  .then(res => res.json())
  .then(data => console.log('GET:', data));

// ✅ POST Request (create new resource)

fetch('https://api.example.com/items', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'New Item' })
})
  .then(res => res.json())
  .then(data => console.log('POST:', data));

// ✅ PUT Request (replace resource)

fetch('https://api.example.com/items/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Updated Item' })
})
  .then(res => res.json())
  .then(data => console.log('PUT:', data));

// ✅ PATCH Request (partial update)

fetch('https://api.example.com/items/1', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Partially Updated' })
})
  .then(res => res.json())
  .then(data => console.log('PATCH:', data));

// ✅ DELETE Request (remove resource)

fetch('https://api.example.com/items/1', {
  method: 'DELETE'
})
  .then(res => {
    if (res.ok) console.log('DELETE: Success');
    else console.log('DELETE: Failed');
  });

// ✅ HEAD Request (retrieve headers only)

fetch('https://api.example.com/items', {
  method: 'HEAD'
})
  .then(res => {
    console.log('HEAD: Content-Type:', res.headers.get('Content-Type'));
  });

// ✅ OPTIONS Request (get supported methods)

fetch('https://api.example.com/items', {
  method: 'OPTIONS'
})
  .then(res => {
    console.log('OPTIONS: Allow methods:', res.headers.get('Allow'));
  });


   ```
 </details>
 
 <details>
   <summary>Fetch API Options</summary>

   ```javascript
fetch(url, {
  method: 'GET',                // HTTP method: GET, POST, PUT, DELETE, PATCH, etc.

  headers: {                    // HTTP headers
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'
  },

  body: JSON.stringify({ key: 'value' }), // Request body (for POST, PUT, PATCH)

  mode: 'cors',                 // 'cors' | 'no-cors' | 'same-origin'
  
  credentials: 'same-origin',   // 'omit' | 'same-origin' | 'include'

  cache: 'default',             // 'default' | 'no-cache' | 'reload' | 'force-cache' | 'only-if-cached'

  redirect: 'follow',           // 'follow' | 'manual' | 'error'

  referrer: 'no-referrer',      // or 'client' | URL string

  referrerPolicy: 'no-referrer', // or 'origin' | 'strict-origin' | 'same-origin' | etc.

  integrity: '',                // Subresource integrity hash (e.g., SHA-256)

  keepalive: false,             // Keep the request alive after page unload (used with POST)

  signal: AbortController.signal, // Allows request cancellation

  duplex: 'half'                // Required for ReadableStream as body (only in some environments)
});
```
 </details>
 
 <details>
   <summary>Response Methods & Response Property</summary>

   ```javascript
fetch('https://api.example.com/data')
  .then(response => {
    // ✅ Properties
    console.log('ok:', response.ok);                       // true if status 200–299
    console.log('status:', response.status);               // HTTP status code
    console.log('statusText:', response.statusText);       // HTTP status text
    console.log('url:', response.url);                     // Final URL after redirects
    console.log('type:', response.type);                   // 'basic', 'cors', 'opaque', etc.
    console.log('redirected:', response.redirected);       // true if redirected
    console.log('headers:', response.headers);             // Headers object

    // ✅ Headers access
    console.log('Content-Type:', response.headers.get('Content-Type'));
    console.log('Has Auth Header:', response.headers.has('Authorization'));

    ✅ Methods (Only ONE of these can be used per response)
     return response.text();           // For plain text response
     return response.json();           // For JSON response
     return response.blob();           // For binary data
     return response.arrayBuffer();    // For raw binary stream
     return response.formData();       // For multipart/form-data

    // Example:
    return response.json();
  })
  .then(data => {
    console.log('Response body data:', data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
```
 </details>
 
 <details>
   <summary>Core Methods</summary>
 </details>
