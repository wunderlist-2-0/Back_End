Back_End repo

## API Endpoints

##### Login/Register
```js
`username` (string),
`password` (string)
```

- POST `https://wunderlist-buildweek.herokuapp.com/auth/register` = register a new user
- POST `https://wunderlist-buildweek.herokuapp.com/auth/login` = login an existing user

##### Todo Items
```js
`id` (number),
`text` (text),
`date` (string),
`completed` (boolean),
`userId` ()
```

- GET `https://wunderlist-buildweek.herokuapp.com//todos` = recieve list of all todo's
- POST `https://wunderlist-buildweek.herokuapp.com/todos` = add a new todo
- PUT `https://wunderlist-buildweek.herokuapp.com/todos/:id` = update a todo
- DELETE `https://wunderlist-buildweek.herokuapp.com/todos/:id` = deletes a todo