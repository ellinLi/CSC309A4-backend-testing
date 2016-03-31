var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Posting = require('../models/posting.js');

//get all postings
router.get('/', function(req, res, next) {
  Posting.find(function (err, postings) {
    if (err) return next(err);
    res.json(postings);
  });
});

//create a posting
router.post('/addpost', function(req, res, next) {
  Posting.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//show posting by id
router.get('/:id', function(req, res, next) {
  Posting.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//update posting
router.put('/:id', function(req, res, next) {
  Posting.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//delete posting by ID
router.delete('/:id', function(req, res, next) {
  Posting.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;