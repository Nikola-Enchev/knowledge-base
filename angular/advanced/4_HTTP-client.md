<style>
h1 {
    border-bottom: 0;
}
</style>

# HTTPClient and AJAX

## What is the HTTPClient?

> _Angular native service for making HTTP requests. It is a part of the `@angular/common/http` package._

Features include:

- Making GET, POST, PUT, DELETE requests.
- Handling request/response interceptors.
- Adding headers and query parameters.

```typescript
import { HttpClient } from "@angular/common/http";

class DataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http
      .get("https://jsonplaceholder.typicode.com/posts")
      .subscribe((data) => {
        console.log(data);
      });
  }

  sendData() {
    const data = {
      title: "foo",
      body: "bar",
      userId: 1,
    };

    this.http
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
```

## What is AJAX?

> _Asynchronous JavaScript and XML. It is a technique for creating fast and dynamic web pages. _

> _AJAX is used by every modern web application to send and receive data from the server without refreshing the page._

> _For an application not using AJAX, it would only have to have static html pages and the server would have to send the entire page every time a request is made._
