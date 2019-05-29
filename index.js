const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const connectDB = require('./config/db')

//Connect to the DB
connectDB()

// Init Middleware
// Already part of Express now, don't need to install body parser
app.use(express.json({extended: false}))

//Define Routes
app.use('/api/users', require('./routes/api/users'))


app.get('/', (req, res) => {
  res.json({msg: "hello"})
})

app.listen(port, () => {console.log(`Running on ${port}`)})
