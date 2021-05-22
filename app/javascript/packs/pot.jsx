import Web3Modal from "web3modal";

function connectWallet() {
  const providerOptions = {};
  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions, // required
  });
  return web3Modal.connect();
}

function Pot() {
  return (
    <>
      <button class="btn btn-primary">Connect Wallet</button>
    </>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const node = document.getElementById("pot");

  ReactDOM.render(<Pot />, node);
});
