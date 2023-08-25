import React from 'react';
import './App.sass';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import ConnectWallet from './web3';

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
