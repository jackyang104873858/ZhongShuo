/**
 * MessageController
 *
 * @description :: Server-side logic for managing Messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index:function(req, res) {
		res.render('Message/index');
	},
	chat:function(req, res) {
		var sender = req.param('sender', null);
		var content = req.param('content', null);
		var avatar = req.param('avatar');
		if(req.method == 'POST' && content != '') {
			var msg = {
				sender: sender,
				content: content,
				avatar: avatar
			};
			Message.create(msg).exec(function(err, model) {
				if(err){
					res.send("Error: Sorry! Something went wrong!");
				}
				else{
					res.send("Successfully sent!");
				}
			});
		}
	},
	get:function(req, res) {
		var lastId = req.param('lastId', null);
		if(req.method == "POST") {
			if(lastId && lastId != '') {
				Message.find({id: { '>': lastId }}).exec(function(err, msgs) {
					formatField(msgs);
					res.send(msgs);
				});
			}
			else {
				Message.find().exec(function(err, msgs) {
					formatField(msgs);
					res.send(msgs);
				});
			}
		}
	}
};

function formatField(collection) {
	var moment = require('moment');
	if(collection.length == 0)
		return;
	for(var i = 0; i < collection.length; i++) {
		var model = collection[i];
		model.createdAt = moment(model.createdAt).format('YYYY-MM-DD HH:mm:ss');
		model.content = model.content.replace('\n', '<br />');
	}
}

