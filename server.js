//Install express server
const express = require('express');
const path = require('path');

const app = express();
const HTTP_PORT = process.env.PORT || 8080;

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/newApp'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/newApp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(HTTP_PORT, ()=>{console.log("API listening on: " + HTTP_PORT)});