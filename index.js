
var platform = process.platform;
var arch     = process.arch;

if      ( platform == "darwin" && arch == "x64" ) module.exports = require("phantomjs-bin-macosx");
else if ( platform == "linux"  && arch == "x64" ) module.exports = require("phantomjs-bin-linux-x86_64");
else throw("not supported platform:" + String(platform) + " / arch:" + String(arch));
