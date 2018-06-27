/**
 * Created by Jordie on 26/6/18.
 */
var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('bar', {

        title: 'Express',
        test: "blah"
    });});

module.exports = router;