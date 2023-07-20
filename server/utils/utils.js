const { keccak256 } = require("ethereum-cryptography/keccak.js");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils.js");
const { secp256k1 } = require("ethereum-cryptography/secp256k1.js");


function getPublicKey(privateKey) { 
    return toHex(secp256k1.getPublicKey(privateKey));
}

function getAddress(publicKey) {
    return toHex(keccak256(utf8ToBytes(publicKey).slice(1)).slice(-20));
}

function hashMessage(message) {
    return toHex(keccak256(utf8ToBytes(message)));
}

function verifyTransaction(amount, recipient, sender, signature, publicKey) {
    const hashedTransaction = hashMessage(amount + recipient + sender);
    return secp256k1.verify(signature, hashedTransaction, publicKey);
}

module.exports = { getPublicKey, getAddress, hashMessage, verifyTransaction };
