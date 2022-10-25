const express = require('express')
const app = express()
const db = require('./queries')
const port = 3000

const knexConfig = require('./knexfile');
//initialize knex
const knex = require('knex')(knexConfig[process.env.NODE_ENV])

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/user', (req, res) => {
    knex('users')
    .select({
        id: 'id',
        name: 'name',
        email: 'email'
    })
    .then((users) => {
        return res.json(users);
    })
    .catch((err) => {
        console.error(err);
        return res.json({success: false, message: 'An error occurred, please try again later.'});
    })
})
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
app.get('/users', db.getUserByName)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

