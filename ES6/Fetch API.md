## fetch API
***1. ***
```
const makeRequest = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const message = `Your response it not ok ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
};

const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/todos")
    .then((data) => {
      const dataList = data.map((item, index) => {
        let list = `<li>${item.title} </li>`;
        return list;
      });
      console.log(data);
      const showData = document.querySelector(".images");
      showData.innerHTML = dataList;
    })
    .catch((err) => console.log(err));
};

getData();
```
***2. ***
```

```
***3. ***
```

```

