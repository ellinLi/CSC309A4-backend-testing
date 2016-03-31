var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/user.js');


//create a user
router.post('/createUser', function(req, res, next) {
  User.create(req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

//get user by email
router.get('/getUser/:email', function(req, res, next) {
  User.findById(req.params.email, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

//update user by email
router.put('/updateUser/:email', function(req, res, next) {
  User.findByIdAndUpdate(req.params.email, req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

//delete user by email
router.delete('deleteUser/:email', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

module.exports = router;