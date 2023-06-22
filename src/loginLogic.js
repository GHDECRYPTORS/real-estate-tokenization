import React, { useState } from "react";

import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider);
const SERVER_URL = "http://localhost:8080/v1";

function App() {
  const [address, setAddress] = useState(null);

  async function authenticateUser() {
    try {
      // Request access to the user's Metamask account
      await window.ethereum.enable();

      // Get the user's account address
      const accounts = await web3.eth.getAccounts();
      const address = accounts[0];

      // Generate a message for authentication
      // const message = `Authentication request from ${address}`;

      // ask backend for auth message
      const nonceResponse = await fetch(`${SERVER_URL}/auth/nonce/${address}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const { message } = await nonceResponse.json();

      // Request the user's signature on the message
      const signature = await web3.eth.personal.sign(message, address, "");

      // Send the address and signature to the server for authentication
      const response = await fetch(`${SERVER_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, signature }),
      });

      if (response.ok) {
        const { address } = await response.json();
        setAddress(address);
      } else {
        console.error(response.statusText);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className='header'>
      <h1>Metamask Connect Demo</h1>
      {!address ? (
        <button onClick={authenticateUser}>Connect Wallet</button>
      ) : (
        <p>Connected with address: {address}</p>
      )}
    </div>
  );
}

export default App;
