var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('/home/george/Dropbox/drop-dot/js/file.in')
});

lineReader.on('line', function (line) {
  console.log('Line from file:', line);
});
