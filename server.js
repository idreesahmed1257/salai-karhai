const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 2500;

// app.use(express.static(path.join(__dirname,"/public")));

app.get('/', function(req, res){
    res.sendFile("C:/Users/SAEED COMPUTERS/Desktop/Salahi Karhai/Home.html");
});

app.listen(port, (req,res) => {
    console.log(`Listening on port ${port}`);
});