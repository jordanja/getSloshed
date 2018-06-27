var express = require('express');
var app = express();
var APIKeyMaps = "AIzaSyDg6KgLiP2w227ejGsFCYO1EgVUTNKOzas";
/* GET home page. */
app.get('/', function(req, res, next) {
    res.render('home', {

        title: 'Express',
        test: "blah"
    });
});

module.exports = app;


