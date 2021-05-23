import React, { useContext, useState } from "react";
import { Button, Form, Spinner, Tab, Tabs } from "react-bootstrap";
import ReactDOM from "react-dom";
import Web3Modal from "web3modal";

import erc20ABI from "./erc20.abi.json";

import Minus99FrogImage from "images/minus99.png";

import { createContext } from "react";

import { ethers } from "ethers";

const beneficiary = "0xe397dE579AF8332b61Ef7cB0952c85a7c9403Cdf";

const lowPriceTokens = ["0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f"];

const supportedTokens = [
  { symbol: "ETH", address: "0x0000000000000000000000000000000000000000" },
  { symbol: "DAI", address: "0x6B175474E89094C44Da98b954EedeAC495271d0F" },
  { symbol: "USDC", address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" },
  { symbol: "UNI", address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984" },
  { symbol: "AAVE", address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9" },
  { symbol: "CRV", address: "0xD533a949740bb3306d119CC777fa900bA034cd52" },
  { symbol: "COMP", address: "0xc00e94Cb662C3520282E6f5717214004A7f26888" },
  { symbol: "BAL", address: "0xba100000625a3754423978a60c9317c58a424e3D" },
];

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

const EthersContext = createContext<ethers.providers.JsonRpcSigner>(null);
function useEthers(): ethers.providers.JsonRpcSigner {
  return useContext(EthersContext);
}

function SendTokenForm() {
  const eth = supportedTokens[0];
  const [selected, setSelected] = useState(eth.symbol);
  const [tokenAddress, setTokenAddress] = useState(eth.address);
  const [message, setMessage] = useState("");
  const [rawValue, setRawValue] = useState("");
  const [addressError, setAddressError] = useState("");
  const [valueError, setValueError] = useState("");
  const [decimals, setDecimals] = useState(18);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const provider = useEthers();

  const fetchDecimals = async (address: string) => {
    const ercContract = new ethers.Contract(address, erc20ABI, provider);
    const result = await ercContract.decimals();
    setDecimals(result);
  };

  const handleCurrencyChange = (symbol: string) => {
    setSelected(symbol);
    if (symbol === "other") {
      setTokenAddress("");
      return;
    }
    const { address } = supportedTokens.find((t) => t.symbol === symbol);
    if (symbol === "ETH") {
      setDecimals(18);
    } else {
      fetchDecimals(address);
    }
    setTokenAddress(address);
  };

  const handleTokenAddressChange = async (address: string) => {
    setTokenAddress(address);

    if (address.length === 0) {
      setAddressError("");
      return;
    }

    if (!ethers.utils.isAddress(address)) {
      setAddressError("This does not look like an Ethereum address");
    } else {
      setAddressError("");
      fetchDecimals(address).catch((e) => {
        setAddressError(
          `Could not get number of decimals for ${address}, is it an ERC?`
        );
      });
    }
  };

  const handleValueChange = (rawValue: string) => {
    const value = parseFloat(rawValue);
    setRawValue(rawValue);
    if (isNaN(value)) {
      setValueError(
        rawValue.length === 0 ? "" : "This does not look like a number"
      );
    } else {
      setValueError("");
    }
  };

  const isFormValid = () => {
    return (
      valueError.length === 0 &&
      addressError.length === 0 &&
      rawValue.length > 0 &&
      ethers.utils.parseUnits(rawValue, decimals).gt(0) &&
      ethers.utils.isAddress(tokenAddress)
    );
  };

  const sendTransaction = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      console.error("form was not complete, aborting");
      return;
    }

    const value = ethers.utils.parseUnits(rawValue, decimals);
    setLoading(true);
    let txp;
    if (tokenAddress === eth.address) {
      txp = provider.sendTransaction({ to: beneficiary, value });
    } else {
      const ercContract = new ethers.Contract(tokenAddress, erc20ABI, provider);
      txp = ercContract.transfer(beneficiary, value);
    }
    try {
      const tx = await txp;
      await tx.wait();
      setRawValue("");
      setMessage("");
      setDone(true);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const isLowPricedToken = lowPriceTokens.includes(
    tokenAddress.toLocaleLowerCase()
  );

  return (
    <Form onSubmit={sendTransaction}>
      <Form.Group className="mb-3" controlId="currencySelect">
        <Form.Label>Currency to send</Form.Label>
        <Form.Control
          as="select"
          onChange={(e) => handleCurrencyChange(e.target.value)}
        >
          {supportedTokens.map((token) => (
            <option key={token.symbol} value={token.symbol}>
              {token.symbol}
            </option>
          ))}
          <option value="other">Something else?</option>
        </Form.Control>
      </Form.Group>
      {selected === "other" ? (
        <Form.Group className="mb-3" controlId="tokenAddress">
          <Form.Label>Token address</Form.Label>
          <Form.Control
            type="text"
            placeholder="0x1234...."
            value={tokenAddress}
            isInvalid={addressError.length > 0}
            onChange={(e) => handleTokenAddressChange(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            {addressError}
          </Form.Control.Feedback>
        </Form.Group>
      ) : null}
      {isLowPricedToken ? (
        <div className="row">
          <img src={Minus99FrogImage} alt="nooooooooo" />
        </div>
      ) : null}
      <Form.Group className="mb-3" controlId="amount">
        <Form.Label>Amount to send</Form.Label>
        <Form.Control
          type="number"
          placeholder="1000000000"
          value={rawValue}
          isInvalid={valueError.length > 0}
          onChange={(e) => handleValueChange(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          {valueError}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Your (preferably nice) messsage"
        />
        <Form.Text className="text-muted">
          This will not be persisted on-chain but in my very centralized
          database on-chain
        </Form.Text>
      </Form.Group>
      <Button
        disabled={!isFormValid() || loading}
        variant="primary"
        type="submit"
      >
        {loading ? <Spinner animation="border" size="sm" /> : "Send"}
      </Button>{" "}
      {done && !loading ? (
        <span className="text-success">Thank you!!</span>
      ) : null}
    </Form>
  );
}

function EthPot() {
  return (
    <div className="pot">
      <p>Thank you very much for using our Ethereum wedding pot!</p>
      <SendTokenForm />

      <small className="text-muted">
        If you changed your mind on using this dubvious application, our pot
        address is <Beneficiary />
      </small>
    </div>
  );
}

function ConnectButton({ handleConnect }: { handleConnect: () => any }) {
  return (
    <div className="text-center">
      <p>
        If you would rather send funds directly, please feel free to send them
        to <Beneficiary />
      </p>
      <p>
        Otherwise, go ahead and
        <br />
        <Button onClick={handleConnect}>Connect Wallet</Button>
      </p>
    </div>
  );
}

function EthPotApp() {
  const web3Modal = getWeb3Modal();
  const [provider, setProvider] = useState(null);
  const [mainNet, setMainNet] = useState(false);

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

    provider.on("chainChanged", (chainId: string | number) => {
      setMainNet(chainId === "0x1" || chainId === 1);
    });

    setProvider(provider);
    setMainNet(provider.chainId === "0x1" || provider.chainId === 1);
  };

  if (web3Modal.cachedProvider) {
    handleConnect();
  }

  return (
    <>
      {!provider ? (
        <ConnectButton handleConnect={handleConnect} />
      ) : mainNet ? (
        <EthersContext.Provider
          value={new ethers.providers.Web3Provider(provider).getSigner()}
        >
          <EthPot />
        </EthersContext.Provider>
      ) : (
        <p>
          Please use mainnet! <br />
          <small className="text-muted" style={{ fontSize: "0.7rem" }}>
            Otherwise I will have to uninvite you...
          </small>
        </p>
      )}
    </>
  );
}

function FiatPot() {
  return (
    <div className="pot text-center">
      <div>Fiat</div>
    </div>
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
        <EthPotApp />
      </Tab>
      <Tab className="py-3" eventKey="fiat" title="Fiat Pot">
        <FiatPot />
      </Tab>
    </Tabs>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const node = document.getElementById("pot");
  if (!node) {
    return;
  }

  if (window.ethereum) {
    ReactDOM.render(<PotContainer />, node);
  } else {
    ReactDOM.render(<FiatPot />, node);
  }
});
