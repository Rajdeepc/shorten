const { ShrinkUrl } = require("../models/shrinkUrl");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {

 
  // check if user already exist or not
let url = await ShrinkUrl.findOne({longUrl: req.body.longUrl});
if(url){
    return res.status(400).send('Long Url already exists');
} else {
    // INSERT into db
    shrinkUrl = new ShrinkUrl ({
        email: req.body.email,
        longUrl: req.body.longUrl,
        shortUrl: req.body.shortUrl,
        createdAt: Date.now(),
        clicks: req.body.clicks
    });
    if(req.body.email){
        await shrinkUrl.save();
    } 
    res.status(200).send({ shrinkUrl: shrinkUrl,success: true});
    
}
});


module.exports = router;
