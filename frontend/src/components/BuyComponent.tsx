import React, { useState } from "react";
import bitcoin_icon from "./../../public/coin-1.svg";
import etherium_icon from "./../../public/coin-2.svg";
import tether_icon from "./../../public/coin-3.svg";
import Image from "next/image";
import { useWalletContext } from "./WalletContext";
import AddCardModal from "./AddCardModal";

const BuyComponent: React.FC = () => {
  const { isConnected, connectWallet } = useWalletContext();
  const [amount, setAmount] = useState<number>(0);
  const [crypto, setCrypto] = useState<string>("ETH");

  const cryptocurrencies = [
    { symbol: "ETH", name: "Ethereum", icon: etherium_icon, rate: 2500 },
    { symbol: "BTC", name: "Bitcoin", icon: bitcoin_icon, rate: 40000 },
    { symbol: "USDT", name: "Tether", icon: tether_icon, rate: 1 },
  ];

  const selectedCrypto = cryptocurrencies.find((c) => c.symbol === crypto);

  const handleAmountChange = (value: number) => {
    setAmount(value);
  };

  const handleCryptoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCrypto(e.target.value);
    setAmount(0); // Reset amount when changing crypto
  };

  return (
    <div className="bg-[#131722] rounded-lg p-6 w-full max-w-sm mx-auto text-center text-white shadow-lg">
      {/* Title Section */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-400">You&apos;re buying</span>
        <div className="flex items-center space-x-2">
          {selectedCrypto && (
            <Image
              src={selectedCrypto.icon}
              alt={`${selectedCrypto.name} logo`}
              width="20"
              height="20"
            />
          )}
          <select
            value={crypto}
            onChange={handleCryptoChange}
            className="bg-gray-800 text-gray-300 text-sm rounded-lg p-1 focus:outline-none cursor-pointer"
          >
            {cryptocurrencies.map((c) => (
              <option key={c.symbol} value={c.symbol}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Amount Display */}
      <div className="text-4xl font-semibold mb-1 text-white">${amount}</div>
      <div className="text-sm text-gray-500">
        {(amount / (selectedCrypto?.rate || 1)).toFixed(4)} {crypto}
      </div>

      {/* Preset Amount Buttons */}
      <div className="flex justify-center mt-6 space-x-3">
        {[100, 300, 1000].map((value) => (
          <button
            key={value}
            onClick={() => handleAmountChange(value)}
            className="bg-gray-800 py-2 px-5 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition duration-200 ease-in-out focus:outline-none"
          >
            ${value}
          </button>
        ))}
      </div>

      {/* Buy/Connect Button */}
      {isConnected ? (
        <AddCardModal />
      ) : (
        <button
          onClick={connectWallet}
          className="mt-6 w-full bg-purple-700 text-white py-3 rounded-full font-medium hover:bg-purple-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default BuyComponent;
