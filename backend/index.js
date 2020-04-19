const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})

/** starting route */
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});