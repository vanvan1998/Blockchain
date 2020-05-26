import React from 'react';
import './App.css';
import { Button, Card, Text } from 'react-bootstrap';

class Block extends React.Component {
  // this.previousHash = previousHash;
  //   this.timestamp = timestamp;
  //   this.transactions = transactions;
  //   this.nonce = 0;
  //   this.hash = this.calculateHash();
  render() {
    return (
      <div style={{ height: "20%", width: "60%", borderWidth: 3, borderRadius: 30, borderStyle: "outset", margin:"auto" }}>
        <h4>previousHash</h4>
      </div>
    )
  }
};

function App() {
  return (
      <div className="App">
        <Block></Block>
      </div>
  );
}

export default App;
