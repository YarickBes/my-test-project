import React, { useState, useEffect } from "react";
import Web3 from "web3";

const ConnectWallet = () => {
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const newWeb3 = new Web3(window.ethereum);
      setWeb3(newWeb3);
    }
  }, []);

  const connectWallet = async () => {
    if (web3) {
      try {
        await window.ethereum.enable();
        console.log("Connected to wallet:", web3);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    }
  };

  return (
    <div>
      <h1>Connect Your Wallet</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
};

export default ConnectWallet;
