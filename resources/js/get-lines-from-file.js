/* 
 *   _                                _       _   
 *  (_) __ ___   ____ _ ___  ___ _ __(_)_ __ | |_ 
 *  | |/ _` \ \ / / _` / __|/ __| '__| | '_ \| __|
 *  | | (_| |\ V / (_| \__ \ (__| |  | | |_) | |_ 
 * _/ |\__,_| \_/ \__,_|___/\___|_|  |_| .__/ \__|
 *|__/                                 |_|        
 *
 **/

var getLinesFromFile = function (path, callback) {

	var lineReader = require('readline').createInterface({
		input: require('fs').createReadStream(path)
	});

	lineReader.on('line', function (line) {
		//console.log('Line from file:', line);
			callback(line);
	});

}

var getFileLineCount = function(path, callback) {
  var exec = require('child_process').exec;
  exec("wc -l < " + path, callback);
}


/*
 *  //Test Data: 
 *
 *  var testPath = '/home/george/Dropbox/drop-dot/js/file.in';
 *  var testCallback = function(error, res) { console.log(res); }
 *  getFileLineCount(testPath, testCallback);
 *  arr = [];
 *  var testCallback1 = function(res) { arr.push(res); }
*/

getLinesFromFile(testPath, testCallback1);

module.exports.getFileLineCount = getFileLineCount;
module.exports.getLinesFromFile = getLinesFromFile;
