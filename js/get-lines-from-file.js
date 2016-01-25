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

function pointsWithin(path, dir, cb) {
  var path = expandHomeDir(path);
  var dir = expandHomeDir(dir);
  var fs = require("fs");
  fs.lstat(path, function(err, stats) {
    if (err) return cb("ERROR: " + err);
    if (! stats.isSymbolicLink()) return cb("ERROR: " + path + " not a symlink.");
    fs.readlink(path, function(err, dest) {
      if (err) return cb("ERROR" + err);
      return cb(dest.indexOf(dir) === 0);
    });
  });
};
function pointsWithinDropboxDropDot(path, cb) {
  pointsWithin(path, "~/Dropbox/.drop-dot", cb);
}
//var vimPath = expandHomeDir("~/.test");
//var targetPath = expandHomeDir("~/Dropbox/.drop-dot");
//pointsWithin(vimPath, targetPath, function(msg) { console.log(msg); } );
//pointsWithinDropboxDropDot("~/.test1", function(msg) { console.log(msg); } );


//QWERTY2
var execAndPrint = function(arg, cb) {
	function printConsole(err, stdout, sterr) {
		console.log(arg + "\n" + "    " + stdout);
		/*
		if (err !== undefined) {
			console.log(err);
		}	else if (stdout !== undefined) {
			console.log(stdout);
		} else if (sterr !== undefined) {
			console.log(sterr);
		}
		*/
		if (typeof cb !== "function") {
      return true;
		}
    return cb(true);
	}
	var exec = require('child_process').exec;	
	exec(arg, printConsole);
}



//QWERTY1
//this function assumes that '~/Dropbox` exists
function execDropOnVerifiedDroppee(droppee) {
	//INTENDED LOGIC:
  //mkdir -p ~/Dropbox/.drop-dot
	//mv -v droppee ~/Dropbox/.drop-dot/basename
  //ln -s ~/Dropbox/.drop-dot/base droppee
  var droppee = expandHomeDir(droppee) //we assume droppee is a valid, full path
  var basename = require('path').basename(droppee);
	var link = function(emptyArg) {
		execAndPrint('ln -sv ~/Dropbox/.drop-dot/' + basename + ' ' + droppee);
  }

		execAndPrint('mv -v ' + droppee + ' ~/Dropbox/.drop-dot/' + basename, link);

}

function pathExists(filePath) {
  var filePath = expandHomeDir(filePath);
  var fs = require('fs');
  try {
    return fs.statSync(filePath).isDirectory();
  } catch (err) {
    return false;
  }
}

module.exports.pathExists = pathExists;
module.exports.execAndPrint = execAndPrint;
module.exports.execDropOnVerifiedDroppee = execDropOnVerifiedDroppee;
module.exports.pointsWithinDropboxDropDot = pointsWithinDropboxDropDot;
module.exports.getFileLineCount = getFileLineCount;
module.exports.getLinesFromFile = getLinesFromFile;
module.exports.confirmPathExists = confirmPathExists;
