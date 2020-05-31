const { Blockchain, Transaction } = require('./blockchain');
// const { privateKey, publicKey } = require('./keygenerator');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const privateKey = ec.keyFromPrivate('7c4c45907dec40c91bab3480c39032e90049f1a44f3e18c3e07c23e3273995cf');

const publicKey = privateKey.getPublic('hex');
const MyCoin = new Blockchain();


const tx1 = new Transaction(publicKey, 'address2', 100);
tx1.signTransaction(privateKey);
MyCoin.addTransaction(tx1);

// MyCoin.minePendingTransactions(publicKey);
var json = JSON.stringify(MyCoin);
console.log(json);
var fs = require('fs');
fs.writeFile("./data.json", json, 'utf8', function (err) {
    console.log(err);
});
  
// console.log();
// console.log(`Balance of xavier is ${MyCoin.getBalanceOfAddress(publicKey)}`);

// Uncomment this line if you want to test tampering with the chain
// MyCoin.chain[1].transactions[0].amount = 10;

// Check if the chain is valid
// console.log();
// console.log('Blockchain valid?', MyCoin.isChainValid() ? 'Yes' : 'No');
