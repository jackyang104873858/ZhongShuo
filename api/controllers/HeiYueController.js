/**
 * HeiYueController
 *
 * @description :: Server-side logic for managing Heiyues
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getBook:function(req, res) {
		var isbn = req.param('isbn');
		Book.findOne({
			where: {isbn: isbn}
		}).exec(function(err, model) {
			if(err) {
				res.send(err);
			}
			else if(model) {
				res.send(model);
			}
			else {
				res.send({result: 'noBook'});
			}
		});
	},
	getBooks: function(req, res) {
		Book.find({}).exec(function(err, list){
			res.send(list);
		});
	},
	addBook:function(req, res){
		var book = {
			isbn: req.param('isbn'),
			title: req.param('title'),
			author: req.param('author'),
			price : req.param('price'),
			author_intro: req.param('author_intro'),
			image: req.param('image')
		};
		console.log(book);
		Book.create(book).exec(function(err, b){
			if(err) {
				res.send(err);
			}
			else{
				res.send(b);
			}
		});
	},
	getHYUser: function(req, res) {
		var openid = req.param('openid');
		if(!openid) {
			res.send({result: 'error: no openid!'})
		}
		HYUser.findOne({where: {openid: openid}}).exec(function(err, user){
			if(err){
				res.send(err);
			}
			else{
				res.send(user);
			}
		});
	},
	addHYUser: function(req, res) {
		var user = {
			openid: req.param('openid'),
			children: req.param('children')
		};
		HYUser.create(user).exec(function(err, u){
			if(err){
				res.send(err);
			}
			else{
				res.send(u);
			}
		});
	}
};

