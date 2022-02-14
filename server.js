const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 2500;



app.listen(port, (req,res) => {
    console.log(`Listening on port ${port}`);
});