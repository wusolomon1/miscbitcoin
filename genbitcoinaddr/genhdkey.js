/**
 * generate hd wallet private key.  
 */
var bitcore = require('bitcore');
var HDPrivateKey = bitcore.HDPrivateKey;

// take input
if (process.argv.length < 3) {
	console.log("usage: node genhdpk <num_to_gen>")
	process.exit(0);
}

var numKey = parseInt(process.argv[2]);

//var hdPrivateKey = new HDPrivateKey();
//var seed = hdPrivateKey.xprivkey;
// test seed
var seed = "xprv9s21ZrQH143K2YuHXNmscJpws3crfHYJYMwMUZ3tyWuY8ToRNxq6YiVxhHxWtE8Rboy1xGr7R8MLBUrsh1QKhpxM29X5GrjbQbzQ1Gvz441";
//var seed = "077961a06851ad8d4ad9315c601346bc";
//console.log("seed: " + seed);
for (var i=0; i<numKey; i++) {
	var retrieved = new HDPrivateKey(seed);
	var derived = retrieved.derive("m/"+i);
	var wif = derived.privateKey.toWIF();
	console.log(wif);
}