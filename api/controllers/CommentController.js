/**
 * CommentController
 *
 * @description :: Server-side logic for managing Comments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		var commentObjId = req.param('commentObjId');
		CommentTarget.findOne({ where: { id: commentObjId}}).exec(function(err, model) {
			if(err) {
				console.log(err);
				res.send(err);
			}
			else {
				res.render('Comment/index', { commentObj: model});
			}
		});
	},
	getComments: function(req, res) {
		var currentPage = req.param('currentPage');
		var commentObjId = req.param('commentObjId');
		Comment.find({
			where: {commentObjId: commentObjId},
			sort: 'createdAt DESC',
            limit: 10,
            skip: currentPage * 10
		}).exec(function(err, list) {
			if(err) {
                console.log(err);
                res.send(err);
            }
            else {
                    if(list.length > 0) {
                    var moment = require('moment');
                    for(var i = 0; i < list.length; i++) {
                        var model = list[i];
                        model.createdAt = moment(model.createdAt).format('YYYY-MM-DD HH:mm');
                    }
                }
                res.send(list);
            }
		});
	},
	writeComment: function(req, res) {
		var commentObjId = req.param('commentObjId');
		CommentTarget.findOne({ where: { id: commentObjId}}).exec(function(err, model) {
			if(err) {
				console.log(err);
				res.send(err);
			}
			else {
				res.render('Comment/writeComment', { commentObj: model});
			}
		});
	},
	saveComment: function(req, res) {
		var commentObjId = req.param('commentObjId');
		if(commentObjId == '') {
			res.send('错误：未找到评论对象！');
		}
		var msg = req.param('msg');
		if(msg == '') {
			res.send('错误：内容不能为空！');
		}
		var comment = {
			
		};
	}
};

