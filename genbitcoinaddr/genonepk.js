var bitcore = require('bitcore');
var pk = new bitcore.PrivateKey(); // PrivateKey
var wif = pk.toWIF();
console.log(wif);