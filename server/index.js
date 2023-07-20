const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils.js");
const { getPublicKey, getAddress, hashMessage, verifyTransaction } = require('./utils/utils');

const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "0x1": 100,
};

const addresses = {
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/register", (req, res) => {
  const { privateKey } = req.body;
  
  const publicKey = getPublicKey(privateKey);
  const address = '0x' + getAddress(publicKey);

  //console.log("Exists?",addresses.hasOwnProperty(address));

  // Checks if the address is registered
  if (!addresses.hasOwnProperty(address)) {
    addresses[address] = publicKey;
    balances[address] = 50;
  }

  res.send({ balance: balances[address], address:address });
});

app.post("/send", (req, res) => {
  //console.log(req.body);
  const { data: { sender, recipient, amount }, signature} = req.body;

  let parsedSignature = signature;
  parsedSignature.r = BigInt(parsedSignature.r);
  parsedSignature.s = BigInt(parsedSignature.s);
  //console.log(parsedSignature);

  if (sender == recipient) {
    res.status(400).send({ message: "Transaction Failed: You can't transfer funds to your own account" });
    return
  }

  const isValid = verifyTransaction(amount, recipient, sender, parsedSignature, addresses[sender]);
  //console.log('isValid?', isValid);

  if (!isValid) {
    res.status(400).send({ message: "Transaction Failed: You can't transfer funds from other wallet that it's not yours!" });
    return
  }

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
