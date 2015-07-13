var delimiter = require('path').delimiter;
var binpath = require('app-root-path').resolve('node_modules/.bin');
var isSet = false;

module.exports  = {
	check: function dotbin_check() {
		return isSet;
	},
	enable: function dotbin_enable() {
		if (!isSet) {
			isSet = true;
			process.env.PATH = binpath + delimiter + process.env.PATH;
		}
	},
	disable: function dotbin_disable() {
		if (isSet) {
			isSet = false;
			
			var exp = process.env.PATH.split(delimiter);
			var i = exp.indexOf(binpath);
			if (i > -1) {
				exp.splice(i, 1);
				process.env.PATH = exp.join(delimiter);			
			}
		}
	}
};



