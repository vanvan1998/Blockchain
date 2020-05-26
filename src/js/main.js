const { Blockchain, Transaction } = require('./blockchain');
// const { privateKey, publicKey } = require('./keygenerator');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Your private key goes here
const privateKey = ec.keyFromPrivate('7c4c45907dec40c91bab3480c39032e90049f1a44f3e18c3e07c23e3273995cf');

// From that we can calculate your public key (which doubles as your wallet address)
const publicKey = privateKey.getPublic('hex');

// Create new instance of Blockchain class
const savjeeCoin = new Blockchain();


// Create a transaction & sign it with your key
const tx1 = new Transaction(publicKey, 'address2', 100);
tx1.signTransaction(privateKey);
savjeeCoin.addTransaction(tx1);

// Mine block
savjeeCoin.minePendingTransactions(publicKey);
console.log(savjeeCoin);

// Create second transaction
// const tx2 = new Transaction(publicKey, 'address1', 50);
// tx2.signTransaction(privateKey);
// savjeeCoin.addTransaction(tx2);

// Mine block
// savjeeCoin.minePendingTransactions(publicKey);

// console.log();
// console.log(`Balance of xavier is ${savjeeCoin.getBalanceOfAddress(publicKey)}`);

// Uncomment this line if you want to test tampering with the chain
// savjeeCoin.chain[1].transactions[0].amount = 10;

// Check if the chain is valid
// console.log();
// console.log('Blockchain valid?', savjeeCoin.isChainValid() ? 'Yes' : 'No');
