var cache = require("./lib/cache");

exports.save = function (options) {
	return cache.save(options.c, options.s);
};

exports.clear = function (options) {
	return cache.clear(options.c);
};

exports.display = function (options) {
	return cache.display(options.c);
}