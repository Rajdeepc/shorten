const { User, validate } = require('../models/users');
const express = require('express');
const router = express.Router();


router.post('/', async (req,res) => {

// validating the request
const error = validate(req.body);
console.log("Error" + error)
if(error) {
    return res.status(400).send(error);
} 

// check if user already exist or not
let user = await User.findOne({email: req.body.email});
if(user){
    return res.status(400).send('User already exists');
} else {
    // INSERT into db
    user = new User({
        email: req.body.email,
        username: req.body.username,
        password:req.body.password
    });
    await user.save();
    res.status(200).send(user);
}
});

module.exports = router;