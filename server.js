//Install express server
const express = require('express');

const path = require('path');

const app = express();

const server = require('./server/routes');

app.use('/api', server);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});


app.use((req, res, next) => {
    const error = new Error('Not Found...');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

// Start the app by listening on the default Heroku port
// app.listen(8000);

const port = process.env.PORT || 4200;

app.listen(port, () => {
    console.log("App is running on port " + port);
});