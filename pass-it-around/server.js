const express = require('express')
const app = express()
const PORT = 3000
app.get('/', (request, response) => {

    response.send(`99 bottles of beer on the wall <a href='/98'>take one down, pass it around   </a>`)
})
app.get('/:number_of_bottles', (request, response) => {
    let bottles = request.params.number_of_bottles

    if (bottles === '0') {
        response.send(`${bottles} bottles of beer on the wall <a href= "/">start over</a> `) 
    } else { 
    response.send(`${bottles} bottles of beer on the wall <a href= "/${bottles - 1}">take one down, pass it around   </a>`)
}
})

app.listen(PORT, () => {
    console.log(`I am listening on port ${PORT}`)
});