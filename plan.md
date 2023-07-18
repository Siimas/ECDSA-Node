# Plan

## Objectives

1. Incorporate Public Key Cryptography so transfers can only be completed with a valid signature
2. The person sending the transaction should have to verify that they own the private key corresponding to the address that is sending funds

### Pre Generated Data

_Info_ this data was generated via `scripts/generateKeys.js"`

Person Name: Alice
Private Key: b7bdc90d726ebc661d958aa38d41b3c4744b88fd6ce9115d12dcce63c3902ce0
Public Key: 02332cda94b947488b14189d90a9962ac5c9b97edb37b4880f88e8875b6bdce8a2
  
Person Name: Alex
Private Key: 1962a29b5dff50fef5e322753a267ab4eea1a6995c07b54db82338021965f083
Public Key: 03714a68533245972afe3fb33fc39806f5b5ad23caff1b018bb9ab9976bba4ea44
  
Person Name: Bob
Private Key: cfa52700369af929a4fa7ee064fc8aa989a668eaa43069409e66f8bf6f0a484c
Public Key: 03dc9c0e933e5639c81009638914086734863ab1063a52d0c4124e59a1c1a812dc

### Todo

- [  ] Make the user register their address in the server with the public key

### Questions

- How to use the private key without giving it to the web app (client). Solution: Pass the signature (replace the wallet address for the signature)