const express = require('express')
const app = express()
const PORT = 3000
app.get('/greeting', (request, response) => {
    response.send('Hello, Stranger.')
});
app.get('/greeting/:name', (request, response) => {
    response.send(`Wow! Hello there, ${request.params.name}`)
})

app.listen(PORT, () => {
    console.log(`I am listening on port ${PORT}`)
});