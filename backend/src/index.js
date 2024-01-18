const express = require('express');
const cors = require('cors')
const userRouter = require('./router/users');
const postRouter = require('./router/post');
const app = express()
const port = 3000 
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors());
// routing
app.use(userRouter);
app.use(postRouter);

app.get('/', (req, res) => {
    res.send('index!')
})
app.get('/about', (req, res) => {
    res.send('about!')
})
app.listen(port, () => {
    console.log(`server ini berjalan pada port ${port}`)
})
