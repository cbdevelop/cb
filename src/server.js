//Install express server
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');

const app = express();

app.use(favicon(__dirname + '/dist/favicon.ico'));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);