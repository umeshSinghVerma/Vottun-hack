// components/SellComponent.tsx
import React, { useState } from 'react';
import bitcoin_icon from "./../../public/coin-1.svg";
import etherium_icon from "./../../public/coin-2.svg";
import tether_icon from "./../../public/coin-3.svg";
import Image from 'next/image';
const SellComponent: React.FC = () => {
    const [amount, setAmount] = useState<string>("0");
    const [crypto, setCrypto] = useState<string>("ETH");

    // List of cryptocurrencies
    const cryptocurrencies = [
        { symbol: "ETH", name: "Ethereum", icon: etherium_icon },
        { symbol: "BTC", name: "Bitcoin", icon: bitcoin_icon },
        { symbol: "USDT", name: "Tether", icon: tether_icon },
    ];

    // Update amount on user input
    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    };

    // Update selected cryptocurrency
    const handleCryptoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCrypto(e.target.value);
        setAmount("0"); // Reset amount when switching currencies
    };

    // Find the selected cryptocurrency data
    const selectedCrypto = cryptocurrencies.find((c) => c.symbol === crypto);

    return (
        <div className="bg-[#131722] rounded-lg p-6 w-full max-w-sm mx-auto text-white shadow-lg">
            {/* Amount Display */}
            <div className="text-left text-gray-400 mb-2">You&apos;re sending</div>
            <div className="text-4xl font-semibold mb-1 text-white">${amount || "0"}</div>
            <div className="text-sm text-gray-500">{amount || "0"} {crypto}</div>

            {/* Crypto Selector */}
            <div className="bg-gray-800 flex items-center justify-between p-3 rounded-lg mt-6">
                <div className="flex items-center space-x-2">
                    {selectedCrypto && (
                        <Image
                            src={selectedCrypto.icon}
                            alt={`${selectedCrypto.name} logo`}
                            width="20"
                            height="20"
                        />
                    )}
                    <span className="text-white font-medium">{crypto}</span>
                </div>
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

            {/* Amount Input */}
            <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={handleAmountChange}
                className="w-full bg-gray-900 mt-4 p-3 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Wallet Address Input */}
            <input
                type="text"
                placeholder="Wallet address or ENS name"
                className="w-full bg-gray-900 mt-4 p-3 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Connect Wallet Button */}
            <button className="mt-6 w-full bg-purple-700 text-white py-3 rounded-full font-medium hover:bg-purple-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500">
                Connect Wallet
            </button>
        </div>
    );
};

export default SellComponent;
