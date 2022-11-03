const express = require('express')
const app = express()
const PORT = 3000

app.get('/greeting', (request, response) => {
    response.send('Hello, Stranger.')
});
app.get('/greeting/:name', (request, response) => {
    response.send(`Wow! Hello there, ${request.params.name}`)
});


app.get('/tip/:total/:tipPercentage', (request, response) => {
    let total = parseInt(request.params.total)
let tipPercentage = parseInt(request.params.tipPercentage)
tipAmount = total*tipPercentage/100
    response.send(`You should leave a $${tipAmount} tip.`)
});

app.listen(PORT, () => {
    console.log(`I am listening on port ${PORT}`)
});