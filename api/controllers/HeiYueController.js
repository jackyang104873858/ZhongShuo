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
				res.send({
					isbn:'9787539189147',
					title:'宫西达也恐龙系列',
					author:'[日]宫西达也',
					price:'96.00',
					image: 'https://img1.doubanio.com/mpic/s28302478.jpg',
					author_intro: '宫西达也，1956年生于日本静冈县，毕业于日本大学艺术学部美术学科，从事人偶剧的舞台美术、平面设计工作后，开始绘本创作。他从保留在自己心底的童年记忆和4个孩子的育儿经验中得到创作灵感，使得作品充满趣味天真，并以温馨诙谐的故事和有力度的画风独树一帜。创作的同时，他还致力于绘本的推广工作，走遍了日本的每一个县为孩子和家长做绘本的演讲。\n作者的其他作品《你看起来好像很好吃》、《我是霸王龙》、《你真好》、《永远永远爱你》和《跟屁虫》、《好饿的小蛇》、《乒乒和乓乓钓大鱼》（二十一世纪出版社），《青蛙小弟睡午觉》、《今天运气怎么这么好》（南海出版公司），《1只小猪和100只狼》、《喵呜》、《好饿的老狼和猪小镇》（新疆青少年出版社）已在国内翻译出版。此外，他所创作的《爸爸是赛文奥特曼》、《你看起来好像很好吃》均获日本剑渊绘本乡绘本奖大奖：《今天运气怎么这么好》获日本讲谈社出版文化奖绘本奖。\n《你看起来好像很好吃》曾由北京儿童艺术剧院改编成儿童剧，作为2008年“六一”儿童节的献礼，在北京国家大剧院演出。\n在日本，恐龙的温馨故事系列现已被改编为动画电影，并已在日本公映，深受读者喜爱。'
				});
			}
		});
	}
};

