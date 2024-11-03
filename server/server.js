const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err))


app.get('/', (req, res) => res.send('Hello World'))
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))