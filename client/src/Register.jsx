import server from "./server";
import { getAddress } from "./utils/utils";



function Register({ setAddress, setBalance }) {

  async function onChange(evt) {
    const publicKey = evt.target.value;

    const address = '0x' + getAddress(publicKey);

    setAddress(address);

    if (address) {
      const { data: { balance } } = await server.post('/register', {
        address
      });
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Register Your Wallet</h1>

      <label>
        Public Key
        <input placeholder="Type your public key" onChange={onChange}></input>
      </label>
    </div>
  );
}

export default Register;
