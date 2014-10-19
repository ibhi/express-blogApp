var express = require('express');
var router = express.Router();

appData = require('../data.json')


/* GET users listing. */
router.get('/', function(req, res) {
	var postId = req.params.postId;
	console.log(postId)
	console.log(appData.posts[postId])
	res.send('Post Id' + postId + appData.posts[postId]);
	// res.render('post', {post: appData.posts[postId]});
});

module.exports = router;
