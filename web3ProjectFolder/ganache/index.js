// setting up the appropriate configuration
const Web3 = require('web3')
const web3 = new Web3('HTTP://127.0.0.1:7545')
const EthereumTransaction = require('@ethereumjs/tx').Transaction

// set the receiving and sending addresses for the transaction
const sendingAddresses = "0x1F0034156E753FDe3E0962745C9c237cD7D16598"
const receivingAddresses = "0xD527db4856D900F423d1A19De88e8be1354EC94e"

// web3.eth.getBalance(sendingAddresses).then(console.log)
// web3.eth.getBalance(receivingAddresses).then(console.log)

// setting up the transaction
const txParams = {
    nonce: 0,
    to: receivingAddresses,
    gasPrice: 20_000_000,
    gasLimit: 30000,
    value: 100,
    data: ""
}
// sign the transaction
const privateKeySender = "02d291d9a084be33a8595d428817fb5808b3d3346ea9b595befa2439e889005b"
const privateKeySenderHex = Buffer.from(privateKeySender,'hex')
const tx = EthereumTransaction.fromTxData(txParams);
signedTx = tx.sign(privateKeySenderHex)

/*
* Sending transaction to the network
* */

// send the serialized signed transaction to the Ethereum network
const serializedTx = signedTx.serialize()
web3.eth.sendSignedTransaction(serializedTx);





