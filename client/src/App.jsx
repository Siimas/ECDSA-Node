import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";
import Register from "./Register";

function App() {
  const [balance, setBalance] = useState(0);
  const [privateKey, setPrivateKey] = useState();
  const [address, setAddress] = useState();

  return (
    <div className="app">
      {privateKey ? 
      <>
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress} />
      <Transfer setBalance={setBalance} 
        address={address} 
        privateKey={privateKey} />
      </> :
      <Register 
        setAddress = {setAddress}
        setBalance={setBalance}
        setPrivateKey={setPrivateKey} />}
    </div>
  );
}

export default App;
