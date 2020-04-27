const config = require('config');
const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const cors = require("cors");
const app = express();

const { ShrinkUrl } = require('./models/shrinkUrl');

dotenv.config();

// routes
const users = require('./routes/users');
const auth = require('./routes/auth');
const shrinkUrl = require('./routes/shrinkUrl');
const shortUrl = require('./routes/shortUrl');
const profile = require('./routes/profile');




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
app.use('/getProfile', profile);

// Serve static files assets on heroku
if(process.env.NODE_ENV === 'production'){
    app.use((path.join(__dirname, "client", "dist")))
}

// MongoDB connection string
const MONGO_LOCAL_URI = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@ds341837.mlab.com:41837/urlshortener`;
mongoose.connect(process.env.MONGOLAB_URI || MONGO_LOCAL_URI)
.then(() => console.log("New connection established"))
.catch(err => console.log('Something went wrong' + err))

console.log("port" + process.env.PORT)
const port = process.env.PORT || 4000;
// Right before your app.listen(), add this:
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}...`));

