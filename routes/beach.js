/**
 * Created by Jordie on 26/6/18.
 */
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
    res.render('beach', {

        title: 'Express',
        name: "blah"
    });
});

module.exports = router;