## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions
For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.

## Project

### Objectives

1. Incorporate Public Key Cryptography so transfers can only be completed with a valid signature
2. The person sending the transaction should have to verify that they own the private key corresponding to the address that is sending funds

#### Pre Generated Data

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

#### Todo

- [ x ] Make the user register their address in the server with the public key

#### Questions

- How to use the private key without giving it to the web app (client). Solution: Pass the signature (replace the wallet address to the signature)