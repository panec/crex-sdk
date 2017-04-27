var request = require('superagent');

var doGet = function (url, args) {
	return new Promise(function (resolve, reject) {
		request
			.get(url)
			.query(args)
			.end(function (err, res) {
				if (err) reject(err);
				resolve(res.body);
			});
	});
};

var doPost = function(url, args) {
	return new Promise(function (resolve, reject) {
		request
			.post(url)
			.type('form')
			.send(args)
			.end(function (err, res) {
				if (err) reject(err);
				resolve(res.body);
			});
	});
};

var doDelete = function(url, args) {
	return new Promise(function (resolve, reject) {
		request
			.delete(url)
			.query(args)
			.end(function (err, res) {
				if (err) reject(err);
				resolve(res.body);
			});
	});
};

module.exports = {
	doGet: doGet,
	doPost: doPost,
	doDelete: doDelete
};