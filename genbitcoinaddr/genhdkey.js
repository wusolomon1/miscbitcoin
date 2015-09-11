/**
 * generate hd wallet private key.  
 */
var bitcore = require('bitcore');
var HDPrivateKey = bitcore.HDPrivateKey;

//var hdPrivateKey = new HDPrivateKey();
//var seed = hdPrivateKey.xprivkey;
var seed = "xprv9s21ZrQH143K2YuHXNmscJpws3crfHYJYMwMUZ3tyWuY8ToRNxq6YiVxhHxWtE8Rboy1xGr7R8MLBUrsh1QKhpxM29X5GrjbQbzQ1Gvz441";
console.log("seed: " + seed);
var retrieved = new HDPrivateKey(seed);
var derived = retrieved.derive("m/1/2/150/1000000000");
console.log(derived);