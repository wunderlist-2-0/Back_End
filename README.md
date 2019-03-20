Back_End repo

## API Endpoints

##### Login/Register
```js
`username` (string),
`password` (string)
```

- POST `https://wunderlist-buildweek.herokuapp.com/register` = register a new user
- POST `https://wunderlist-buildweek.herokuapp.com/login` = login an existing user

##### Todo Items
```js
`id` (number),
`title` (string),
`task` (string),
`notes` (string),
`setDate` (date),
`userId` (integer),
`completed` (boolean),
`created_at` (datetime),
`updated_at` (datetime)
```

- GET `https://wunderlist-buildweek.herokuapp.com/todos/list` = receive list of all todo's
- GET `https://wunderlist-buildweek.herokuapp.com/todos/list/:id` = receive a specific todo
- POST `https://wunderlist-buildweek.herokuapp.com/todos/create` = add a new todo
- PUT `https://wunderlist-buildweek.herokuapp.com/todos/edit/:id` = update a todo
- DELETE `https://wunderlist-buildweek.herokuapp.com/todos/delete/:id` = deletes a todo