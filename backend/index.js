const config = require('config');
const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const mongoose = require('mongoose');
// routes
const users = require('./routes/users');
const auth = require('./routes/auth');
const shrinkUrl = require('./routes/shrinkUrl');
const shortUrl = require('./routes/shortUrl');


const cors = require("cors");
const app = express();

if (!config.get('PrivateKey')) {
    console.error('FATAL ERROR: PrivateKey is not defined.');
    process.exit(1);
}





// middlewares
app.use(cors());
app.use(express.json());
app.use('/users', users);
app.use('/auth', auth);
app.use('/shrinkUrl', shrinkUrl);
app.use('/shortUrl', shortUrl);




// MongoDB connection string

mongoose.connect('mongodb://localhost:27017/urlshortener',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() => console.log("New connection established"))
.catch(err => console.log('Something went wrong' + err))


/** starting route */
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

