var fs = require('fs');
var fileName = '../package.json';
var file = require(fileName);

var split = file.version.split('.');
split[split.length -1] = ++split[split.length -1]
file.version = split.join('.')
fs.writeFile(fileName, JSON.stringify(file, null ,4), function (err) {
    if (err) return console.log(err);
    console.log('new version ' + file.version);
});
