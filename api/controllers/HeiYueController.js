/**
 * HeiYueController
 *
 * @description :: Server-side logic for managing Heiyues
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	config: {
		"fileFieldName": "upfile", 
		"fileMaxSize": 51200000,
		"fileAllowFiles": [
            ".png", ".jpg", ".jpeg", ".gif", ".bmp",
            ".flv", ".swf", ".mkv", ".avi", ".rm", ".rmvb", ".mpeg", ".mpg",
            ".ogg", ".ogv", ".mov", ".wmv", ".mp4", ".webm", ".mp3", ".wav", ".mid",
            ".rar", ".zip", ".tar", ".gz", ".7z", ".bz2", ".cab", ".iso",
            ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf", ".txt", ".md", ".xml"
            ], /* 上传文件格式显示 */
	},
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
		if(!book.isbn) {
			res.send({result: 'no isbn given'});
		}
		else {
			Book.create(book).exec(function(err, b){
				if(err) {
					res.send(err);
				}
				else{
					res.send(b);
				}
			});
		}
	},
	getHYUser: function(req, res) {
		var _ = require('lodash');
		var openid = req.param('openid');
		if(!openid) {
			res.send({result: 'error: no openid!'})
		}
		HYUser.findOne({where: {openid: openid}}).populate('children').then(function(user) {
			var readRecords = ReadRecord.find({childId: _.map(user.children, 'id')}).then(function(readRecords){
				return readRecords;
			});
			return [user, readRecords];
		}).spread(function(user, readRecords){
			readRecords = _.keyBy(readRecords, 'childId');
			console.log(readRecords);
			user.children = _.map(user.children, function(child) {
				child.readRecord = readRecords[child.id];
				return child;
			});
			res.json(user);
		}).catch(function(err){
			return res.serverError(err);
		})
		// HYUser.findOne({where: {openid: openid}}).populate('children').then(function(err, user){
		// 	if(err){
		// 		res.send(err);
		// 	}
		// 	else{
		// 		if(user.children.length > 0) {
		// 			for(var i = 0; i < user.children.length; i++) {
		// 				user.children[i].readRecords = [];
		// 				ReadRecord.find({where: {childId: user.children[i].id}}).exec(function(e, record){
		// 					if(e) {
		// 						console.log(e)
		// 					}
		// 					else {
		// 						for(var j = 0; j < record.length; j++) {
		// 							console.log(record[j]);
		// 							user.children[i].readRecords.push(record[j]);
		// 							console.log(user.children[i].readRecords);
		// 						}
		// 					}
		// 					console.log(user.children[i]);
		// 					if(i == user.children.length - 1) {
		// 						console.log(user);
		// 						res.send(user);
		// 					}
		// 				});
		// 			}
		// 		}
		// 		else
		// 			res.send(user);
		// 	}
		// });
	},
	addHYUser: function(req, res) {
		var user = {
			openid: req.param('openid'),
			name: req.param('name'),
			image: req.param('image'),
			birthdate: req.param('birthdate')
		};
		if(!user.openid) {
			res.send({result: 'error: no openid!'});
		}
		else {
			HYUser.findOne({where: {openid: user.openid}}).populate('children').exec(function(err, u){
				if(err){
					res.send(err);
				}
				else if(u) {
					u.children.push({
						name: user.name,
						image: user.image,
						birthdate: user.birthdate
					});
					HYUser.update({openid: user.opeind}, u).exec(function(error,model){
						if(error) {
							res.send(error);
						}
						else {
							res.send(model);
						}
					});
				}
				else {
					HYUser.create({
						openid: user.openid,
						children: [{
							name: user.name,
							image: user.image,
							birthdate: user.birthdate
						}]
					}).exec(function(error, model){
						if(error) {
							res.send(error);
						}
						else {
							res.send(model);
						}
					});
				}
			});
		}
	},
	uploadImage: function(req, res) {
		var path = require('path');
		var that = this;
        req.file(this.config.fileFieldName).upload({
            maxBytes: that.config.fileMaxSize,
            dirname: '../../assets/upload/file'
        },function(err, uploadFiles){
            if(err) {
                console.log(err);
                that.writeResult(res, '未知错误');
            }
            if(uploadFiles.length > 1) {
                that.writeResult(res, '上传的文件不能多于1个');
            }
            var file = uploadFiles[0];
            var uploadFileName = file.filename;
            if(!that.checkFileType(uploadFileName, that.config.fileAllowFiles)) {
                that.writeResult(res, '不允许的文件格式');
            }
            if(!that.checkFileSize(file.size, that.config.fileMaxSize)) {
                that.writeResult(res, '文件大小超出服务器限制');
            }
            that.writeResult(res, 'SUCCESS', path.basename(file.fd), uploadFileName);
        });
	},
	writeResult: function(res, state, url, fileName) {
        res.send({
            state : state,
            url : url || '',
            title : fileName || '',
            original : fileName || '',
            error : state
        });
    },
    checkFileType: function(filename, allowExtensions) {
        var path = require('path');
        var fileExtension = path.extname(filename).toLowerCase();
        return allowExtensions.indexOf(fileExtension) > -1;
    },
    checkFileSize: function(size, maxSize) {
        return size < maxSize;
    },
    addReadRecord: function(req, res) {
    	var isbn = req.param('isbn');
    	var childId = req.param('childId');
    	var feedback = req.param('feedback');
    	var thoughts = req.param('thoughts');
    	ReadRecord.create({
    		isbn: isbn,
    		childId: childId,
    		feedback: feedback,
    		thoughts: thoughts
    	}).exec(function(err, model) {
    		if(err) {
    			res.send(err);
    		}
    		else {
    			res.send(model);
    		}
    	});
    }
};

