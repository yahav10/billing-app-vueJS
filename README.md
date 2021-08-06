## Billing Project

The billing CRUD application was built as an exercise which combines Frontend and 
Backend work using *VueJS* on Frontend side and *NodeJS* on the Backend side.
In this application, you will be able to 'Create' new Customers and Transactions, 'Update' customers details
or transactions details, and 'Delete' existing customers or transactions.

I've decided to use in MongoDB as my Database.
I felt it is more convenient with the supplied data structure to use One collection
of *Customers* and embedded document of *Transactions* - as it is a one-to-many relationship between connected data.
By doing a single read operation I can get the relevant data and reduce the number of read operations.

## How to use the application ?
User have to be registered inside the application, otherwise he won't be able to do transaction.
Therefore, first you should add a new Customer in the application by click on "Add Customer" and fill
inside the blank inputs the relevant data.
Once the user is registered, then you will be able to add new transactions to this user, the customer
'Email' address have to be the same to the one you've registered before.

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Technology Stack
- Node.js 
- Express
- Vue 2.6.11 
- Typescript 3.8.3
- Element UI - UI Library  
- Vue Router 3
- Mongo DB

## TODO
- Input validation
- Adding docker for opening the application using docker-compose
- Adding i18n for localizing and remove the chinese loading message
- Fix the SASS integration

## Links for relevant sources
- See more of [VueJS](https://vuejs.org/v2/guide/).
- See more of [MongoDB](https://www.mongodb.com/).
- See more of [Element UI Library](https://element.eleme.io/#/en-US).
