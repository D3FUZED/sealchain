const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.genKeyPair();

console.log('Public key: ', myKey.getPublic('hex'));
console.log('Private key: ', myKey.getPrivate('hex'));

const { Blockchain, Transaction } = require('savjeecoin');

const SEALChain = new Blockchain();

const tx = new Transaction(myKey.getPublic('hex'), 'toAddress', 100);
tx.signTransaction(myKey);

SEALChain.addTransaction(tx);



SEALChain.minePendingTransactions(myKey.getPublic('hex'));

SEALChain.getAllTransactionsForWallet(myKey.getPublic('hex'));

console.log(getAllTransactionsForWallet);