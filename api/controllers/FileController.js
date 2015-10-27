/**
 * FileController
 *
 * @description :: Server-side logic for managing Files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	base64Handler: function(req, res) {
		if(req.method == 'POST') {
			var str = req.param('str', null);
			var type = req.param('type', null);
			var dir = req.param('dir');
			var ext = '';
			switch(type){
				case 'image/png':
	                ext='.png';
	                break;
	            case 'image/jpeg':
	                ext='.jpg';
	                break;
	            case 'image/bmp':
	                ext='.bmp';
	                break;
	            default:
	                ext='.jpg';
	                break;
			} 
			if(str && str != '') {
				var fs = require('fs');
				var content = str.replace('data:' + type + ';base64,', '');
				var bitmap = new Buffer(content, 'base64');
				var moment = require('moment');
				var fileName = moment(new Date()).format('YYYYMMDDHHmmss') + ext;
				if(!fs.existsSync('./assets/images/' + dir)) {
					fs.mkdirSync('./assets/images/' + dir);
				}
				fs.writeFileSync('./assets/images/' + dir + '/' + fileName, bitmap);
				res.json({src:'../images/' + dir + '/'+ fileName});
			}
		}
	}
};

