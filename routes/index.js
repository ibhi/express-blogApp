var express = require('express');
var router = express.Router();

appData = require('../data.json')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/post/:postId', function(req, res) {
	var postId = req.params.postId;
	// console.log(appData.posts[postId]);
	var post = appData.posts[postId];
  	res.render('post', {post: post});
});

router.get('/about', function(req, res) {
  res.render('about');
});

module.exports = router;
