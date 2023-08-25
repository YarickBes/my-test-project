import React, { useState } from 'react';
import './Content.sass';
import Web3 from 'web3';

function Content() {
  const [walletConnected, setWalletConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        setWalletConnected(true);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      console.error("Ethereum provider not available.");
    }
  };

  return (
    <div className="content">
      <h2>Контент</h2>
      <p>Тестовий застосунок React</p>
      {walletConnected ? (
        <p>Wallet connected!</p>
      ) : (
        <button className="connect-button" onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}

export default Content;
