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
const arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get('/magic/:will%20i%20be%20a%20millionaire', (request, response) => {
    const random = arr[Math.floor(Math.random() * arr.length)]
    response.send(`Will I be a millionaire? ${random}.`)

})

app.listen(PORT, () => {
    console.log(`I am listening on port ${PORT}`)
});