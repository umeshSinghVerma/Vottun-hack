"use client";

import React, { useState } from "react";
import { useWalletContext } from "./WalletContext";

const SwapComponent: React.FC = () => {
    const { isConnected, connectWallet } = useWalletContext();

    const [fromToken, setFromToken] = useState("ETH");
    const [toToken, setToToken] = useState("USDT");
    const [amount, setAmount] = useState<string>("");
    const [convertedAmount, setConvertedAmount] = useState<string>("");

    // Mock function to calculate converted amount (replace with actual conversion logic)
    const handleAmountChange = (value: string) => {
        setAmount(value);
        // Simple mock conversion for demonstration (1 ETH = 1800 USDT)
        const conversionRate = fromToken === "ETH" && toToken === "USDT" ? 1800 : 1 / 1800;
        setConvertedAmount((parseFloat(value) * conversionRate).toFixed(2));
    };

    const swapTokens = () => {
        const temp = fromToken;
        setFromToken(toToken);
        setToToken(temp);
        handleAmountChange(amount); // Update convertedAmount based on swapped tokens
    };

    return (
        <div className="bg-[#131722] rounded-lg p-6 w-full max-w-sm mx-auto text-white shadow-lg">
            <h2 className="text-center font-semibold text-lg mb-6">Swap Tokens</h2>

            {/* From Section */}
            <div className="mb-5">
                <div className="text-gray-400 mb-2">From</div>
                <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-3">
                    <input
                        type="number"
                        placeholder="0.0"
                        value={amount}
                        onChange={(e) => handleAmountChange(e.target.value)}
                        className="bg-transparent w-full text-white text-2xl placeholder-gray-500 focus:outline-none"
                    />
                    <select
                        value={fromToken}
                        onChange={(e) => setFromToken(e.target.value)}
                        className="bg-gray-700 p-2 rounded-md text-white outline-none cursor-pointer"
                    >
                        <option value="ETH">ETH</option>
                        <option value="USDT">USDT</option>
                        <option value="DAI">DAI</option>
                        {/* Add more tokens here */}
                    </select>
                </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center my-4">
                <button
                    onClick={swapTokens}
                    className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-transform transform hover:scale-110"
                >
                    ⇅
                </button>
            </div>

            {/* To Section */}
            <div className="mb-5">
                <div className="text-gray-400 mb-2">To</div>
                <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-3">
                    <input
                        type="text"
                        placeholder="0.0"
                        value={convertedAmount}
                        readOnly
                        className="bg-transparent w-full text-white text-2xl placeholder-gray-500 focus:outline-none"
                    />
                    <select
                        value={toToken}
                        onChange={(e) => setToToken(e.target.value)}
                        className="bg-gray-700 p-2 rounded-md text-white outline-none cursor-pointer"
                    >
                        <option value="USDT">USDT</option>
                        <option value="ETH">ETH</option>
                        <option value="DAI">DAI</option>
                        {/* Add more tokens here */}
                    </select>
                </div>
            </div>

            {
                isConnected ?
                    (
                        <button
                            className="mt-6 w-full bg-purple-700 text-white py-3 rounded-full font-medium hover:bg-purple-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500">
                            Swap
                        </button>

                    )
                    :
                    (
                        <button
                            onClick={connectWallet}
                            className="mt-6 w-full bg-purple-700 text-white py-3 rounded-full font-medium hover:bg-purple-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500">
                            Connect Wallet
                        </button>
                    )
            }
        </div>
    );
};

export default SwapComponent;
