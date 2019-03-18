Back_End repo

## API Endpoints

##### Login/Register
```js
`username` (string),
`password` (string)
```

- POST `http://*deployed site here*/register` = register a new user
- POST `http://*deployed site here*/login` = login an existing user

##### Todo Items
```js
`id` (number),
`text` (text),
`date` (string),
`completed` (boolean),
```

- GET `http://*deployed site here*/todos` = recieve list of all todo's
- POST `http://*deployed site here*/todos` = add a new todo
- PUT `http://*deployed site here*/todos/:id` = update a todo
- DELETE `http://*deployed site here*/todos/:id` = deletes a todo