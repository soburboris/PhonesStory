const express = require('express')
const path = require('path')
const app = express()

var phones = require('../PhonesStory/src/node_modules/api/mockPhones')
app.get('/', (req,res) => {
    res.status(200)
    // res.sendFile(path.join(__dirname, 'public', 'index.html'))
    res.send(phones);
})

// app.get('/phones', function (req, res) {
//   
// });

// app.get('/about', (req,res) => {
//     res.status(200)
//     res.sendFile(path.join(__dirname, 'views', 'about.html'))
// })

const PORT =process.env.PORT || 3012

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})