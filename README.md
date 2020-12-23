
## Description

Simple [Nest](https://github.com/nestjs/nest) Application.

### Installing

**Cloning the Repository**

```
$ https://github.com/yusadolat/scalio-backend.git

$ cd scalio-backend
```


## Install Dependencies

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Routes

The base URL is: http://localhost:3000/posts

### Test Route

This is the route that you can use to check if the API is running properly.



- **Get single Post**

| URL | Method | Body | URL Params | Success Response | Error Response
|--|--|--|--|--|--|
| /posts | `GET`  | `{ userId:  1, "id":1, "title": "Test title" , "body": "Lorem ipdum"}` | - |**Code:** 200 - CREATED<br />**Content:** `{ status: "Success!"}`  |   **Content:** `{ data:  "" }`
<br />



