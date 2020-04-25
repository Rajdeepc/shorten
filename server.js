const config = require('config');
const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// routes
const users = require('./routes/users');
const auth = require('./routes/auth');
const shrinkUrl = require('./routes/shrinkUrl');
const shortUrl = require('./routes/shortUrl');
const profile = require('./routes/profile');


const cors = require("cors");
const app = express();

// if (!config.get('PrivateKey')) {
//     console.error('FATAL ERROR: PrivateKey is not defined.');
//     process.exit(1);
// }





// middlewares
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use('/users', users);
app.use('/auth', auth);
app.use('/shrinkUrl', shrinkUrl);
app.use('/shortUrl', shortUrl);
app.use('/getProfile', profile);


// Serve static files assets on heroku
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/dist'))
}

// MongoDB connection string

mongoose.connect(process.env.MONGOLAB_URI || `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@ds341837.mlab.com:41837/urlshortener`)
.then(() => console.log("New connection established"))
.catch(err => console.log('Something went wrong' + err))

console.log("port" + process.env.PORT)
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

