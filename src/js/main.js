const { Blockchain, Transaction } = require('./blockchain');
// const { privateKey, publicKey } = require('./keygenerator');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const privateKey = ec.keyFromPrivate('6bf44059835b185e8a0b4e630aa110f2b627755562ae0d26923c41415b180b22');

const publicKey = privateKey.getPublic('hex');
console.log(publicKey);
const MyCoin = new Blockchain();


const tx1 = new Transaction(publicKey, 'address2', 100);
tx1.signTransaction(privateKey);
MyCoin.addTransaction(tx1);

// MyCoin.minePendingTransactions(publicKey);
// console.log();
// console.log(`Balance of xavier is ${MyCoin.getBalanceOfAddress(publicKey)}`);

// Uncomment this line if you want to test tampering with the chain
// MyCoin.chain[1].transactions[0].amount = 10;

// Check if the chain is valid
// console.log();
// console.log('Blockchain valid?', MyCoin.isChainValid() ? 'Yes' : 'No');
