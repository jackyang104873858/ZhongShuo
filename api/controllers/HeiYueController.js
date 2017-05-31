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
				console.log(err);
				res.send(err);
			}
			else if(model) {
				res.send(model);
			}
			else {
				Book.findOne({where: {isbn: isbn}}).exec(function(err, book){
					if(err){
						console.log(err);
						res.send(err)
					}
					else if(book){
						res.send(book);
					}
					else {
						res.send({result: 'noBook'});
					}
				});
			}
		});
	}
};

