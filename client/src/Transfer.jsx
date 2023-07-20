import { useState } from "react";
import server from "./server";
import { signTransaction } from "./utils/utils";

function Transfer({ address, setBalance, privateKey }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();

    let signature = signTransaction(sendAmount, recipient, address, privateKey);    
    signature.r = BigInt(signature.r).toString();
    signature.s = BigInt(signature.s).toString();

    try {
      const {
        data: { balance },
      } = await server.post(`send`, {
        data: {
          sender: address,
          recipient,
          amount: parseInt(sendAmount)
        },
        signature
      });
      setBalance(balance);
    } catch (ex) {
      console.log(ex);
      alert(ex.response.data.message);
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
}

export default Transfer;
