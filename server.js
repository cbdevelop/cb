//Install express server
const express = require('express');

const path = require('path');

const app = express();
// global.app = express();

const server = require('./server/apiserver');

app.use('/api', server);

// Serve only the static files form the dist directory



// Start the app by listening on the default Heroku port
// app.listen(8000);
app.use(express.static(__dirname + '/../dist/'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

const port = process.env.PORT || 4200;

server.listen(port, () => {
    console.log("App is running on port " + port);
});