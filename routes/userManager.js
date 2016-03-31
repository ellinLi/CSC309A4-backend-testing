var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Posting = require('../models/user.js');


//create a user
router.post('/createUser', function(req, res, next) {
  Posting.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//get user by email
router.get('/getUser/:email', function(req, res, next) {
  Posting.findById(req.params.email, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//update user by email
router.put('/updateUser/:email', function(req, res, next) {
  Posting.findByIdAndUpdate(req.params.email, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//delete user by email
router.delete('deleteUser/:email', function(req, res, next) {
  Posting.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;