/**
 * generate hd wallet private key.  
 */
var bitcore = require('bitcore');
var HDPrivateKey = bitcore.HDPrivateKey;

// take input
if (process.argv.length < 3) {
	console.log("usage: node genhdpk <startNum> <endNum> [<seed>]" 
		+ "\nstartNum and endNum are inclusively generated."
		+ "\neg. if you do  node genhdpk 1 1000 xprv932423423..."
		+ "\nnext time, you should do  node genhdpk 1001 2000 xprv932423423...");
	process.exit(0);
}

var startNum = parseInt(process.argv[2]);
var endNum = parseInt(process.argv[3]);

//var hdPrivateKey = new HDPrivateKey();
//var seed = hdPrivateKey.xprivkey;
// optionally get a seed.
// test seed
var seed = "xprv9s21ZrQH143K2YuHXNmscJpws3crfHYJYMwMUZ3tyWuY8ToRNxq6YiVxhHxWtE8Rboy1xGr7R8MLBUrsh1QKhpxM29X5GrjbQbzQ1Gvz441";
if (process.argv.length >= 5) {
	seed = process.argv[4];
}
for (var i=startNum; i<=endNum; i++) {
	var retrieved = new HDPrivateKey(seed);
	var derived = retrieved.derive("m/"+i);
	var wif = derived.privateKey.toWIF();
	console.log(wif);
}