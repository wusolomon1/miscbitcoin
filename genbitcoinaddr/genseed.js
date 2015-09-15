/**
 * generate hd wallet seed.  each time this is called, it will 
 * create a new seed.  
 * put the seed in 
 *   new HDPrivateKey(seed);   
 */
var bitcore = require('bitcore');
var HDPrivateKey = bitcore.HDPrivateKey;

var hdPrivateKey = new HDPrivateKey();
var seed = hdPrivateKey.xprivkey;

console.log(seed);