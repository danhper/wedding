import React, { useState } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import ReactDOM from "react-dom";
import Web3Modal from "web3modal";

import FrogImage from "images/minus99.png";

const beneficiary = "0xe397dE579AF8332b61Ef7cB0952c85a7c9403Cdf";

function Beneficiary() {
  return (
    <a
      className="font-monospace"
      href={`https://etherscan.io/address/${beneficiary}`}
    >
      {beneficiary}
    </a>
  );
}

function getWeb3Modal() {
  const providerOptions = {};
  return new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions, // required
  });
}

function EthPot() {
  return (
    <div className="pot">
      <p>Thank you very much for using our Ethereum wedding pot!</p>

      <small className="text-muted">
        Please not that we do not accept StakeDAO tokens&nbsp;
        <img src={FrogImage} height="40" />
        <br />
        If you changed your mind on using this dubvious application, our pot
        address is <Beneficiary />
      </small>
    </div>
  );
}

function PotApp() {
  const web3Modal = getWeb3Modal();
  const [provider, setProvider] = useState();

  const handleConnect = async () => {
    const provider = await web3Modal.connect();

    const resetProvider = () => {
      web3Modal.clearCachedProvider();
      setProvider(undefined);
    };

    provider.on("disconnect", (error: { code: number; message: string }) => {
      resetProvider();
    });

    provider.on("accountsChanged", (accounts: string[]) => {
      if (accounts.length === 0) {
        resetProvider();
      }
    });

    setProvider(provider);
  };

  if (web3Modal.cachedProvider) {
    handleConnect();
  }

  return (
    <>
      {provider ? (
        <EthPot />
      ) : (
        <div className="text-center">
          <p>
            If you would rather send funds directly, please feel free to send
            them to <Beneficiary />
          </p>
          <p>
            Otherwise, go ahead and
            <br />
            <Button onClick={handleConnect}>Connect Wallet</Button>
          </p>
        </div>
      )}
    </>
  );
}

function PotContainer() {
  return (
    <Tabs
      className="justify-content-center"
      defaultActiveKey="eth"
      id="pot-selector"
    >
      <Tab className="py-3" eventKey="eth" title="Eth Pot">
        <PotApp />
      </Tab>
      <Tab className="py-3" eventKey="fiat" title="Fiat Pot">
        Paypal
      </Tab>
    </Tabs>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const node = document.getElementById("pot");

  ReactDOM.render(<PotContainer />, node);
});
