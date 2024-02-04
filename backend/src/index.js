const express = require('express');
const cors = require('cors')
const articleRouter = require('./router/article');
const app = express()
const port = 3000 
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors());

// routing
app.use(articleRouter);

// root route
app.get('/', (req, res) => {
    res.send('index!')
})
// listen at port
app.listen(port, () => {
    console.log(`server ini berjalan pada port ${port}`)
})
