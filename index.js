const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Next REsponder API' })
})

app.get('/categories', db.getCategories)
app.get('/categories/:id', db.getCategoryById)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

