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

router.get('/testPosting', function(req, res, next) {
	Posting.create({
		title: 'RAD dev',
	    description: 'dev a project',
	    tags: ['java','C++'],
	    posting_date: new Date(),
	    start_date: null,
	    end_date: null,
		owner_email: req.user.email,
		developer_email: [null],
		status: 'posted',
		rating: null,
		comments: [null]
	}, function (err, post) {
	    if (err) return next(err);
	    res.json(post);
	  });
	});

//go to the post creation page
router.get('/addpost', function(req, res){
	res.render('addpost',{message: req.flash('message')});
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
router.post('/delete:id', function(req, res, next) {
  Posting.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;