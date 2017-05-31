/**
 * HeiYueController
 *
 * @description :: Server-side logic for managing Heiyues
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getBook:function(req, res) {
		var isbn = req.param('isbn');
		console.log(isbn);
		Book.findOne({
			where: {isbn: isbn}
		}).exec(function(err, model) {
			if(err) {
				console.log(err);
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
		Book.find({}).exec(function(list){
			console.log(list);
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
				console.log(err);
				res.send(err);
			}
			else{
				console.log(b);
				res.send(b);
			}
		});
	}
};

