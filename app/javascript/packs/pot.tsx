import React, { useState } from "react";
import { Button, Form, Tab, Tabs } from "react-bootstrap";
import ReactDOM from "react-dom";
import Web3Modal from "web3modal";

import FrogImage from "images/minus99.png";

const beneficiary = "0xe397dE579AF8332b61Ef7cB0952c85a7c9403Cdf";

const supportedTokens = [
  { symbol: "ETH", address: "0x0" },
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

function SendTokenForm() {
  const [selected, setSelected] = useState("ETH");
  const [tokenAddress, setTokenAddress] = useState("0x");
  const [rawValue, setRawValue] = useState("");
  const [value, setValue] = useState(0);
  const [addressError, setAddressError] = useState("");
  const [valueError, setValueError] = useState("");

  const handleCurrencyChange = (symbol: string) => {
    setSelected(symbol);
    if (symbol === "other") {
      setTokenAddress("");
      return;
    }
    const { address } = supportedTokens.find((t) => t.symbol === symbol);
    setTokenAddress(address);
  };

  const handleTokenAddressChange = (address: string) => {
    setTokenAddress(address);
  };

  const handleValueChange = (rawValue: string) => {
    const value = parseFloat(rawValue);
    setRawValue(rawValue);
    if (isNaN(value)) {
      setValueError(
        rawValue.length === 0 ? "" : "This does not look like a number"
      );
      setValue(0);
    } else {
      setValue(value);
      setValueError("");
    }
  };

  const isFormValid = () => {
    return valueError.length === 0 && addressError.length === 0 && value > 0;
  };

  return (
    <Form>
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
        </Form.Group>
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
          rows={4}
          placeholder="A (preferably) nice messsage"
        />
        <Form.Text className="text-muted">
          This will only be persisted in my very centralized database, not
          on-chain
        </Form.Text>
      </Form.Group>
      <Button disabled={!isFormValid()} variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
}

function EthPot() {
  return (
    <div className="pot">
      <p>Thank you very much for using our Ethereum wedding pot!</p>
      <SendTokenForm />

      <small className="text-muted">
        {/* Please note that we do not accept StakeDAO tokens&nbsp;
        <img src={FrogImage} height="40" />
        <br /> */}
        If you changed your mind on using this dubvious application, our pot
        address is <Beneficiary />
      </small>
    </div>
  );
}

function EthPotApp() {
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
