/**
 * generate a number of private keys.  
 * the amount generated is given in parameter.
 */
var bitcore = require('bitcore');

// take input
if (process.argv.length < 3) {
	console.log("usage: node genpk <num_to_gen>")
	process.exit(0);
}

var num = parseInt(process.argv[2]);
for (var i=0; i<num;i++) {
	var pk = new bitcore.PrivateKey(); // PrivateKey
	var wif = pk.toWIF();
	console.log(wif);
}