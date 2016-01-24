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

var confirmPathExists = function(path, callback) {
  var confirmPathExistsCallback = function(err, stat) {
        if(err == null) {
            callback(true);
            //console.log('File exists');
        } else if(err.code == 'ENOENT') {
            callback(false);
            //console.log('Some error: ', err.code);
            //fs.writeFile('log.txt', 'Some log\n');
        } else {
            //console.log('Some other error: ', err.code);
        }
  }
  var fs = require("fs");
  fs.stat(path, confirmPathExistsCallback);
}

// (.confirmPathExists res path (fn [res] (go (>! d res))))
//confirmPathExists('file.in', function(res) { console.log(res); });


/*
 *  //Test Data: 
 *
 *  var testPath = '/home/george/Dropbox/drop-dot/js/file.in';
 *  var testCallback = function(error, res) { console.log(res); }
 *  getFileLineCount(testPath, testCallback);
 *  arr = [];
 *  var testCallback1 = function(res) { arr.push(res); }
 *  getLinesFromFile(testPath, testCallback1);
*/


module.exports.getFileLineCount = getFileLineCount;
module.exports.getLinesFromFile = getLinesFromFile;
module.exports.confirmPathExists = confirmPathExists;
