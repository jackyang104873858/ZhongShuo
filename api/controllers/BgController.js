/**
 * BgController
 *
 * @description :: Server-side logic for managing Bgs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    config: {
        /* 上传图片配置项 */
        "imageActionName": "uploadimage", /* 执行上传图片的action名称 */
        "imageFieldName": "upfile", /* 提交的图片表单名称 */
        "imageMaxSize": 2048000, /* 上传大小限制，单位B */
        "imageAllowFiles": [".png", ".jpg", ".jpeg", ".gif", ".bmp"], /* 上传图片格式显示 */
        "imageCompressEnable": true, /* 是否压缩图片,默认是true */
        "imageCompressBorder": 1600, /* 图片压缩最长边限制 */
        "imageInsertAlign": "none", /* 插入的图片浮动方式 */
        "imageUrlPrefix": "/upload/article/", /* 图片访问路径前缀 */
        "imagePathFormat": "upload/image/{yyyy}{mm}{dd}/{time}{rand:6}", /* 上传保存路径,可以自定义保存路径和文件名格式 */
                                    /* {filename} 会替换成原文件名,配置这项需要注意中文乱码问题 */
                                    /* {rand:6} 会替换成随机数,后面的数字是随机数的位数 */
                                    /* {time} 会替换成时间戳 */
                                    /* {yyyy} 会替换成四位年份 */
                                    /* {yy} 会替换成两位年份 */
                                    /* {mm} 会替换成两位月份 */
                                    /* {dd} 会替换成两位日期 */
                                    /* {hh} 会替换成两位小时 */
                                    /* {ii} 会替换成两位分钟 */
                                    /* {ss} 会替换成两位秒 */
                                    /* 非法字符 \ : * ? " < > | */
                                    /* 具请体看线上文档: fex.baidu.com/ueditor/#use-format_upload_filename */

        /* 涂鸦图片上传配置项 */
        "scrawlActionName": "uploadscrawl", /* 执行上传涂鸦的action名称 */
        "scrawlFieldName": "upfile", /* 提交的图片表单名称 */
        "scrawlPathFormat": "upload/image/{yyyy}{mm}{dd}/{time}{rand:6}", /* 上传保存路径,可以自定义保存路径和文件名格式 */
        "scrawlMaxSize": 2048000, /* 上传大小限制，单位B */
        "scrawlUrlPrefix": "/upload/scrawl/", /* 图片访问路径前缀 */
        "scrawlInsertAlign": "none",

        /* 截图工具上传 */
        "snapscreenActionName": "uploadimage", /* 执行上传截图的action名称 */
        "snapscreenPathFormat": "upload/image/{yyyy}{mm}{dd}/{time}{rand:6}", /* 上传保存路径,可以自定义保存路径和文件名格式 */
        "snapscreenUrlPrefix": "/upload/snapscreen/", /* 图片访问路径前缀 */
        "snapscreenInsertAlign": "none", /* 插入的图片浮动方式 */

        /* 抓取远程图片配置 */
        "catcherLocalDomain": ["127.0.0.1", "localhost", "img.baidu.com"],
        "catcherActionName": "catchimage", /* 执行抓取远程图片的action名称 */
        "catcherFieldName": "source", /* 提交的图片列表表单名称 */
        "catcherPathFormat": "upload/image/{yyyy}{mm}{dd}/{time}{rand:6}", /* 上传保存路径,可以自定义保存路径和文件名格式 */
        "catcherUrlPrefix": "/upload/catcher/", /* 图片访问路径前缀 */
        "catcherMaxSize": 2048000, /* 上传大小限制，单位B */
        "catcherAllowFiles": [".png", ".jpg", ".jpeg", ".gif", ".bmp"], /* 抓取图片格式显示 */

        /* 上传视频配置 */
        "videoActionName": "uploadvideo", /* 执行上传视频的action名称 */
        "videoFieldName": "upfile", /* 提交的视频表单名称 */
        "videoPathFormat": "upload/video/{yyyy}{mm}{dd}/{time}{rand:6}", /* 上传保存路径,可以自定义保存路径和文件名格式 */
        "videoUrlPrefix": "/upload/video/", /* 视频访问路径前缀 */
        "videoMaxSize": 102400000, /* 上传大小限制，单位B，默认100MB */
        "videoAllowFiles": [
            ".flv", ".swf", ".mkv", ".avi", ".rm", ".rmvb", ".mpeg", ".mpg",
            ".ogg", ".ogv", ".mov", ".wmv", ".mp4", ".webm", ".mp3", ".wav", ".mid"], /* 上传视频格式显示 */

        /* 上传文件配置 */
        "fileActionName": "uploadfile", /* controller里,执行上传视频的action名称 */
        "fileFieldName": "upfile", /* 提交的文件表单名称 */
        "filePathFormat": "upload/file/{yyyy}{mm}{dd}/{time}{rand:6}", /* 上传保存路径,可以自定义保存路径和文件名格式 */
        "fileUrlPrefix": "/upload/file/", /* 文件访问路径前缀 */
        "fileMaxSize": 51200000, /* 上传大小限制，单位B，默认50MB */
        "fileAllowFiles": [
            ".png", ".jpg", ".jpeg", ".gif", ".bmp",
            ".flv", ".swf", ".mkv", ".avi", ".rm", ".rmvb", ".mpeg", ".mpg",
            ".ogg", ".ogv", ".mov", ".wmv", ".mp4", ".webm", ".mp3", ".wav", ".mid",
            ".rar", ".zip", ".tar", ".gz", ".7z", ".bz2", ".cab", ".iso",
            ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf", ".txt", ".md", ".xml"
            ], /* 上传文件格式显示 */

        /* 列出指定目录下的图片 */
        "imageManagerActionName": "listimage", /* 执行图片管理的action名称 */
        "imageManagerListPath": "upload/image", /* 指定要列出图片的目录 */
        "imageManagerListSize": 20, /* 每次列出文件数量 */
        "imageManagerUrlPrefix": "/upload/imageManager/", /* 图片访问路径前缀 */
        "imageManagerInsertAlign": "none", /* 插入的图片浮动方式 */
        "imageManagerAllowFiles": [".png", ".jpg", ".jpeg", ".gif", ".bmp"], /* 列出的文件类型 */

        /* 列出指定目录下的文件 */
        "fileManagerActionName": "listfile", /* 执行文件管理的action名称 */
        "fileManagerListPath": "upload/file", /* 指定要列出文件的目录 */
        "fileManagerUrlPrefix": "/upload/fileManager/", /* 文件访问路径前缀 */
        "fileManagerListSize": 20, /* 每次列出文件数量 */
        "fileManagerAllowFiles": [
            ".png", ".jpg", ".jpeg", ".gif", ".bmp",
            ".flv", ".swf", ".mkv", ".avi", ".rm", ".rmvb", ".mpeg", ".mpg",
            ".ogg", ".ogv", ".mov", ".wmv", ".mp4", ".webm", ".mp3", ".wav", ".mid",
            ".rar", ".zip", ".tar", ".gz", ".7z", ".bz2", ".cab", ".iso",
            ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf", ".txt", ".md", ".xml"
        ] /* 列出的文件类型 */
    },
	index: function(req, res) {
		res.view('Bg/index',{layout:'bg',title:'我的众说'});
	},
	newArticle: function(req, res) {
		res.view('Bg/newArticle',{layout:'bg',title:'发表新文章',article:null});
	},
	ueditor: function(req, res) {
		var act = req.param('action');
        var path = require('path');
		switch(act) {
			case 'config':
				res.send(this.config);
			break;
            case 'uploadimage': //上传图片
                var that = this;
                req.file(this.config.imageFieldName).upload({
                    maxBytes: that.config.imageMaxSize,
                    dirname: '../../assets/upload/article'
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
                    if(!that.checkFileType(uploadFileName, that.config.imageAllowFiles)) {
                        that.writeResult(res, '不允许的文件格式');
                    }
                    if(!that.checkFileSize(file.size, that.config.imageMaxSize)) {
                        that.writeResult(res, '文件大小超出服务器限制');
                    }
                    that.writeResult(res, 'SUCCESS', path.basename(file.fd), uploadFileName);
                });
            break;
            case "uploadscrawl": //上传涂鸦
                var bf = new Buffer(req.param(this.config.scrawlFieldName,null), 'base64');
                var fs = require('fs');
                var moment = require('moment');
                var fileName = moment(new Date()).format('YYYYMMDDHHmmss') + '.png';
                if(!fs.existsSync('./assets/upload/scrawl')) {
                    fs.mkdirSync('./assets/upload/scrawl');
                }
                fs.writeFileSync('./assets/upload/scrawl/' + fileName, bf);
                this.writeResult(res, 'SUCCESS', fileName, fileName);
            break;
            case "uploadvideo":
                var that = this;
                req.file(this.config.videoFieldName).upload({
                    maxBytes: that.config.videoMaxSize,
                    dirname: '../../assets/upload/video'
                },function(err, uploadFiles){
                    if(err) {
                        console.log(err);
                        that.writeResult(res, '未知错误');
                    }
                    if(uploadFiles.length > 1){
                        that.writeResult(res, '上传的文件不能多于1个');
                    }
                    var file = uploadFiles[0];
                    var uploadFileName = file.filename;
                    if(!that.checkFileType(uploadFileName, that.config.videoAllowFiles)) {
                        that.writeResult(res, '不允许的文件格式');
                    }
                    if(!that.checkFileSize(file.size, that.config.videoMaxSize)) {
                        that.writeResult(res, '文件大小超出服务器限制');
                    }
                    that.writeResult(res, 'SUCCESS', path.basename(file.fd), uploadFileName);
                });
            break;
            case "uploadfile":
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
            break;
			default:
				res.send({});
				break;
		}
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
	saveArticle: function(req, res) {
		var fs = require('fs');
        var articleId = req.param('id');
        if(articleId) {
            Article.findOne({id: articleId}).exec(function(err, article) {
                if(err) {
                    console.log(err);
                }
                else {
                    var filePath = './assets/templates/wx.html';
                    fs.exists(filePath, function(exists) {
                        if(!exists) {
                            console.log("Can't find the static file!");
                            res.send("Can't find the static file!");
                        }
                        else {
                            fs.readFile(filePath, 'utf8', function(err, data) {
                                if(err) {
                                    console.log(err);
                                    res.send('error');
                                }
                                else {
                                    var moment = require('moment');
                                    var isShowCover = req.param('isShowCover');
                                    var content = data.replace(/\{title\}/g, req.param('title'))
                                        .replace(/\{author\}/g, req.param('author'))
                                        .replace(/\{cover\}/g, 'http://www.zhshuo.com' + req.param('cover').replace('..', ''))
                                        .replace(/\{desc\}/g, req.param('desc'))
                                        .replace(/\{content\}/g, isShowCover == 'true' ? ('<img src="' + req.param('cover') + 
                                            '" width="100%" />' + req.param('content')) : req.param('content'))
                                        .replace(/\{date\}/g, moment(article.date).format('YYYY-MM-DD'));
                                    var htmlFile = moment(new Date()).format('YYYYMMDDHHmmss') + '.html';
                                    fs.writeFileSync('./assets/static/' + htmlFile, content);
                                    article.file = htmlFile;
                                    Article.update({id: articleId}, {
                                        title : req.param('title'),
                                        author: req.param('author'),
                                        cover: req.param('cover'),
                                        desc: req.param('desc'),
                                        content: req.param('content')
                                    }).exec(function(err, model) {
                                        if(err) {
                                            console.log(err);
                                            res.send('error');
                                        }
                                        else {
                                            res.send(htmlFile);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
        else {
    		var filePath = './assets/templates/wx.html';
    		fs.exists(filePath,function(exists) {
    			if(!exists) {
      				console.log("Can't find the template file!");
                    res.send("Can't find the template file!");
    			}
    			else {
    				fs.readFile(filePath, "utf8", function(err, data) {
    					if(err)
    						console.log(err);
    					else {
    						var moment = require('moment');
                            var article = {
                                title : req.param('title'),
                                author: req.param('author'),
                                cover: req.param('cover'),
                                desc: req.param('desc'),
                                content: req.param('content'),
                                date: moment(new Date()).format('YYYY-MM-DD'),
                                userId: req.session.user.id
                            };
                            var isShowCover = req.param('isShowCover');
    						var content = data.replace(/\{title\}/g, article.title)
    							.replace(/\{author\}/g, article.author)
                                .replace(/\{cover\}/g, 'http://www.zhshuo.com' + article.cover.replace('..', ''))
    							.replace(/\{desc\}/g, article.desc)
    							.replace(/\{content\}/g, isShowCover == 'true' ? ('<img src="' + article.cover + '" width="100%" />' + article.content) : article.content)
    							.replace(/\{date\}/g, article.date);
                            
    						var htmlFile = moment(new Date()).format('YYYYMMDDHHmmss') + '.html';
    						fs.writeFileSync('./assets/static/' + htmlFile, content);
                            article.file = htmlFile;
                            Article.create(article).exec(function(err, model){
                                if(err){
                                    console.log(err);
                                    res.send('error');
                                }
                                else {
                                    res.send(htmlFile);
                                }
                            });
    					}
    				});
    			}
    		});
        }
	},
    myArticles: function(req, res) {
        res.view('Bg/myArticles',{layout:'bg',title:'我的文章'});
    },
    getArticles:function(req, res) {
        var currentPage = req.param('currentPage');
        Article.find({
            where: {userId: req.session.user.id},
            sort: 'createdAt DESC',
            limit: 10,
            skip: currentPage * 10
        }).exec(function(err, list) {
            if(err) {
                console.log(err);
                res.send('error')
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
    modifyArticle: function(req, res) {
        var articleId = req.param('articleId');
        if(!articleId) {
            res.redirect('myArticles');
        }
        Article.findOne({id: articleId}).exec(function(err, article){
            if(err) {
                console.log(err);
                res.send('error');
            }
            else {
                res.view('Bg/newArticle',{layout:'bg',title:'修改文章', article: article});
            }
        });   
    },
    delArticle: function(req, res) {
        var articleId = req.param('articleId');
        Article.destroy({id: articleId}).exec(function(err, model) {
            if(err) {
                console.log(err);
                res.send('error');
            }
            else {
                res.send({result: 1});
            }
        });
    }
};