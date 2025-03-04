import Web3 from "web3";

let web3;
if (typeof window !== "undefined" && window.web3 !== "undefined") {
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://sepolia.infura.io/v3/931606b0b6a14711addd121e59b6669b"
  );
  web3 = new Web3(provider);
}

export default web3;
