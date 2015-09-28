/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	register: function(req, res) {
		if(req.method == 'POST') {
			var mobile = req.param('mobile');
			var email = req.param('email');
			var password = req.param('password');
			if(mobile == '' || email == '' || password == '') {
				res.redirect('register.html?field=1');
			}
			var crypto = require('crypto');
			var md5 = crypto.createHash('md5');
			md5.update(password);
			var user = {
				mobile: mobile,
				email: email,
				password: md5.digest('hex')
			};
			User.find({
					or: [{ mobile: mobile }, { email: email }]
				}).exec(function(err, results) {
				if(results.length > 0) {
					res.redirect('register.html?fail=1');
				}
				else {
					User.create(user).exec(function(err, u) {
						if(err) {
							res.redirect('register.html?fail=2');
						}
						else {
							res.redirect('regSuccess.html');
						}
					});
				}
			});
		}
	},
	login: function(req, res) {
		if(req.method == 'POST') {
			var account = req.param('account');
			var password = req.param('password');
			var crypto = require('crypto');
			var md5 = crypto.createHash('md5');
			md5.update(password);
			var cryptoPwd = md5.digest('hex');
			User.findOne({ or: [{mobile: account},{email: account}], password: cryptoPwd}).exec(function(err, user){
				if(user) {
					req.session.user = user;
					req.session.authenticated = true;
					res.redirect('Bg/index');
				}
				else {
					res.redirect('login.html?fail=1');
				}
			});
		}
	},
	logout: function(req, res) {
		req.session.user = req.session.authenticated = undefined;
		res.redirect(req.get('Referer'));
	}
};

