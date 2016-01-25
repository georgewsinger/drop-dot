//var expandHomeDir = function(arg1) {};
//fs.statSync = function(filePath) {};
//node.process.platform = "";

var fs = {};
fs.readFileSync = function(file, utf8str) {};

var node = {};
node.process = {};
node.process.argv = {};
node.process.env = {};
node.process.env.HOME = {};
node.process.exit = function() {};

var minimist = {};

/*
var pathExists = function(arg1) {};
var execAndPrint = function (arg, cb) {};
var execDropOnVerifiedDroppee = function (arg, cb) {};
*/

var pathExists = function() {};
var execAndPrint = function() {};
var execDropOnVerifiedDroppee = function() {};
var pointsWithinDropboxDropDot = function() {};
var getFileLineCount = function() {};
var getLinesFromFile = function() {};
var confirmPathExists = function() {};
