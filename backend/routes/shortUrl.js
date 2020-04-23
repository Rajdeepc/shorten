const express = require("express");
const router = express.Router();
const { ShrinkUrl } = require("../models/shrinkUrl");



router.get('/:shortUrl', async (req,res) => {
    console.log("i am inside")
    const shortUrl = await ShrinkUrl.findOne({ shortUrl :req.params.shortUrl });
    console.log(shortUrl)
    if(shortUrl === null) return res.sendStatus(404)
    shortUrl.clicks ++;
    shortUrl.save();
    res.redirect(shortUrl.longUrl)
});

module.exports = router;
