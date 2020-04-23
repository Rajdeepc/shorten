const express = require('express');
const router = express.Router();
const { ShrinkUrl } = require("../models/shrinkUrl");


router.get('/:email', async (req,res) => {
    const profileByEmail = await ShrinkUrl.findOne({ email: req.params.email });
    if(profileByEmail){
        res.status(200).send({profileData: profileByEmail})
    }
})

module.exports = router;