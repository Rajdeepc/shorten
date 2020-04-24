const express = require('express');
const router = express.Router();
const { ShrinkUrl } = require("../models/shrinkUrl");


router.get('/:email', async (req,res) => {
    const profileByEmail = await ShrinkUrl.find({ email: req.params.email });
    if(profileByEmail){
        res.status(200).json(profileByEmail)
    }
})

module.exports = router;