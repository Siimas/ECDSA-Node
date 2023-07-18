import { keccak256 } from "ethereum-cryptography/keccak.js";
import { toHex, utf8ToBytes } from "ethereum-cryptography/utils.js";


export function getAddress(publicKey) {
    return toHex(keccak256(utf8ToBytes(publicKey).slice(1)).slice(-20));
}