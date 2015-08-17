var fs = require('fs');
var osenv = require('osenv');
var path = require('path');

const annotations_path = path.join(osenv.home(), '.bash-cache-annotations.json');

fs.appendFileSync(annotations_path, "");
const annotationsBuffer = fs.readFileSync(annotations_path);

var annotations = {};
if (annotationsBuffer+'' != "") annotations = JSON.parse(annotationsBuffer+'');

module.exports.display = function(command) {
	if (annotations[command] !== undefined && annotations[command].length !== 0) {
		console.log("usages cached:")
		console.log(annotations[command]);
	} else {
		console.log('command not found in cache!');
	}
};

module.exports.clear = function(command) {
	if (annotations[command] === undefined || annotations[command].length === 0) {
		console.log("command not found in cache!");
	} else {
		delete annotations[command];
		fs.writeFileSync(annotations_path, JSON.stringify(annotations));
	}
};

module.exports.save = function(command, text) {
	if (annotations[command] && annotations[command].indexOf(text) >= 0) {
		console.log('annotation already saved.')
		return;
	}
	if (!annotations[command]) {
		annotations[command] = [];
	}
	annotations[command].push(text);
	fs.writeFileSync(annotations_path, JSON.stringify(annotations));
};