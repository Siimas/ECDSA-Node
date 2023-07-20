import { keccak256 } from "ethereum-cryptography/keccak.js";
import { toHex, utf8ToBytes } from "ethereum-cryptography/utils.js";
import { secp256k1 } from "ethereum-cryptography/secp256k1.js";

export function signTransaction(amount, recipient, sender, privateKey) {
    const transaction = amount + recipient + sender;
    const hashedTransaction = hashMessage(transaction);
    return secp256k1.sign(hashedTransaction, privateKey);
}

export function hashMessage(message) {
    return keccak256(utf8ToBytes(message));
}