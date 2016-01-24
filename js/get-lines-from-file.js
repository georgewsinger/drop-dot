/* 
 *   _                                _       _   
 *  (_) __ ___   ____ _ ___  ___ _ __(_)_ __ | |_ 
 *  | |/ _` \ \ / / _` / __|/ __| '__| | '_ \| __|
 *  | | (_| |\ V / (_| \__ \ (__| |  | | |_) | |_ 
 * _/ |\__,_| \_/ \__,_|___/\___|_|  |_| .__/ \__|
 *|__/                                 |_|        
 *
 **/

expandHomeDir = require('expand-home-dir')
expandHomeDir('~')

var getLinesFromFile = function (path, callback) {
	var lineReader = require('readline').createInterface({
		input: require('fs').createReadStream(path)
	});

	lineReader.on('line', function (line) {
			callback(line);
	});
}

var getFileLineCount = function(path, callback) {
  var exec = require('child_process').exec;
  exec("wc -l < " + path, callback);
}

var confirmPathExists = function(path, callback) {
  var path = expandHomeDir(path);
  var confirmPathExistsCallback = function(err, stat) {
        if(err == null) {
            callback(true);
        } else if(err.code == 'ENOENT') {
            callback(false);
        } else {
            callback(false);
        }
  }
  var fs = require("fs");
  fs.stat(path, confirmPathExistsCallback);
}

/*
var confirmPathNotSymLinked = function(path) {

  var path = expandHomeDir(path);

  var fs = require("fs");
  fs.lstat(path, function(err, stats) { 
                   console.log("is this file a symlink?: " + stats.isSymbolicLink()); 
  });

  fs.readlink(path, function(err, linkString) { console.log(linkString) });
}
*/

//confirmPathNotSymLinked("~/.vimrc");

module.exports.getFileLineCount = getFileLineCount;
module.exports.getLinesFromFile = getLinesFromFile;
module.exports.confirmPathExists = confirmPathExists;
