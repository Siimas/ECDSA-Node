import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";
import Register from "./Register";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState();

  return (
    <div className="app">
      {address ? 
      <>
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress} />
      <Transfer setBalance={setBalance} address={address} />
      </> :
      <Register 
        setAddress = {setAddress}
        setBalance={setBalance} />}
    </div>
  );
}

export default App;
