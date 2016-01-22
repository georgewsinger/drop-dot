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


var testPath = '/home/george/Dropbox/drop-dot/js/file.in';
var testCallback = function(error, res) { console.log(res); }

getFileLineCount(testPath, testCallback);


arr = [];
var testCallback1 = function(res) { arr.push(res); }

getLinesFromFile(testPath, testCallback1);

module.exports.getFileLineCount = getFileLineCount;
module.exports.getLinesFromFile = getLinesFromFile;

(defn chan-config-files []
  (go 
   (let [res         (node/require "../js/get-lines-from-file")
         config-path     "/home/george/Dropbox/drop-dot/js/file.in" 
         wcc             (chan 1)
         wc              (.getFileLineCount config-path #(>! wcc %))
         c               (chan wc)
         channel-jammer  #(>! c %)] ; triaged question: is this redundant?
    (.getLinesFromFile 
     res 
     config-path
     #(>! c %)) 
    c )))
