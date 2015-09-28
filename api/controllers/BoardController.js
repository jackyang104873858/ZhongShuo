/**
 * BoardController
 *
 * @description :: Server-side logic for managing Boards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		res.render('Board/index');
	}
};

