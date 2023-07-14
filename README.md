# CALCULATOR API built with NodeJS, MongoDB and Mongoose

## Description
This is NodeJS application that serves endpoints to perform calculator operations, such addition, sustraction, multiplication, square root, and also an endpoint to generate random strings.

Every registered user gets a credit of *500 units*. This units are spent with every request to perform calculations. You can configure the initial amount of credits and also the cost per operations with the environment variables.

A Bearer token will be needed to excecute all endpoints.

The app provides two endpoints to register a new user and to login with an existing user.

NOTE: all endpoints should have the base url prefix `api/v1` in order to handle the api versioning. For expample: the url for a login post request should look like this `<host>/api/v1/auth/login`

Here is a list of the endponts:
| endpoint | method | description| response OK|
| --- | --- | --- | --- |
| /calc/adition | POST | Perform an addition operation | ``` { result: operationResult } ```
/calc/substraction | POST | Perform a substraction operation |  ``` { result: operationResult } ``` |
/calc/multiplication | POST | Perform a multiplication operation |  ``` { result: operationResult } ``` |
/calc/division | POST | Perform a division operation |  ``` { result: operationResult } ``` |
/calc/square-root | POST | Perform a square root operation |  ``` { result: operationResult } ``` |
/calc/random-string | GET | Retrieves a random string |  ``` { result: someRandomString } ``` |
| --- | --- | --- | --- |
/operations/list | GET | Retrieves a paginated list of operations requested by the user |  ``` { data: Array<Operations>, totalPages: Total pages, currentPage: Current page } ``` |
/operations/:id | DELETE | Soft deletes an operation register |  ```{ message: 'Operation deleted' }``` |
| --- | --- | --- | --- |
/auth/login | POST | Login with one of the creted users (Body requires email and password) | ```{token: "SomeValidToken"}``` |
/auth/register | POST | Create a new user (Body requires email and password) | ```{ message: 'User created succesfully' }```



## Environment Variables

It is important to configure required environment variables in order to run the project,
here is an example with all the required env variables

| **.env** |
| --- | 
```
RANDOM_ORG_API_KEY='apiKeyOfRandom.org'
RANDOM_ORG_URL='https://api.random.org/json-rpc/4/invoke'
STRINGS_TO_GENERATE='abcdefghijklmnopqrstuvwxyz123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

ADDITION_COST=20
SUBSTRACTION_COST=20
MULTIPLICATION_COST=40
DIVISION_COST=40
SQRT_COST=50
STRING_GENERATOR_COST=60
INITIAL_BALANCE=500

JWT_SECRET=YourJWTSecret
SALT_ROUNDS=25

MONGO_URL="yourMongoURLDatabase"
DB_NAME='databaseName'

```

| variable | description |
| --- | --- | 
| RANDOM_ORG_API_KEY | Api key from [random.org](https://api.random.org/dashboard) to generate the random strings|
| RANDOM_ORG_URL | Api URL from [random.org](https://api.random.org/dashboard) |
| STRINGS_TO_GENERATE | Available strings to generate a random combination |
| ADDITION_COST | Cost per addition operation |
| SUBSTRACTION_COST | Cost per substraction operation |
| MULTIPLICATION_COST | Cost per multiplication operation |
| DIVISION_COST | Cost per division operation |
| SQRT_COST | Cost per square root operation |
| STRING_GENERATOR_COST | Cost per random string generator operation |
| INITIAL_BALANCE | Initial amount of credit a user gets to perform operations |
| JWT_SECRET | Secret to configure hash of login tokens |
| SALT_ROUNDS | Numeric value to configure the encrypt for password when creating and saving a new user |
| MONGO_URL | Url of a provisioned mongo database |
| DB_NAME | database name |



## Running the app


```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

Unit tests are built with jest

```bash
# unit tests
$ npm test
```