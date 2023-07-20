import server from "./server";

function Register({ setAddress, setBalance, setPrivateKey }) {

  async function onChange(evt) {
    const privateKey = evt.target.value;

    if (privateKey) {
      setPrivateKey(privateKey);
      const { data: { balance, address } } = await server.post('/register', {
        privateKey
      });
      
      setBalance(balance);
      setAddress(address);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Register Your Wallet</h1>

      <label>
        Private Key
        <input placeholder="Type your Private Key" onChange={onChange}></input>
      </label>
    </div>
  );
}

export default Register;
