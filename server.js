const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Config = require('./configs/constants/config')
const config = new Config()
const app = express()
const port = config.port
// const routes = require('./routes/user/user')
dotenv.config()
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, result) => {
    if (err) {
        console.log(err)
    } else {
        // console.log(result)
        console.log("connected to mongodb")
    }

})
app.use(express.urlencoded({ extended: false }));
// app.use('/', routes)
app.listen(port, () => {
    console.log(`server listen on port ${port}`);
})