// deploy code will go here
const assert = require("assert")
const ganache = require("ganache-cli") // local ETH test network

// Note - This change will be required for all instances shown throughout the course where web3 is imported.
// const Web3 = require("web3") // bridge between JS and Solidity
const { Web3 } = require("web3")

const web3 = new Web3(ganache.provider()) //instance of Web3; attempt to connect to a network;  add provider to connect
