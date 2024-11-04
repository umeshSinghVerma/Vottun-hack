/* eslint-disable */
import React, { useRef, useState } from 'react';
import bitcoin_icon from "./../../public/coin-1.svg";
import etherium_icon from "./../../public/coin-2.svg";
import tether_icon from "./../../public/coin-3.svg";
import Image from 'next/image';
import { useWalletContext } from './WalletContext';
import axios from 'axios';
import Link from 'next/link';


const SellComponent: React.FC = () => {
    const { isConnected, connectWallet } = useWalletContext();
    const [amount, setAmount] = useState<string>("0");
    const [crypto, setCrypto] = useState<string>("ETH");

    const cryptocurrencies = [
        { symbol: "ETH", name: "Ethereum", icon: etherium_icon },
        { symbol: "BTC", name: "Bitcoin", icon: bitcoin_icon },
        { symbol: "USDT", name: "Tether", icon: tether_icon },
    ];


    const selectedCrypto = cryptocurrencies.find((c) => c.symbol === crypto);
    const recipentRef = useRef<HTMLInputElement>(null);
    const amountRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [result, setResult] = useState<String | null>(null);

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (result != null) {
            setResult(null);
        }
        setAmount(e.target.value);
    };

    const handleCryptoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (result != null) {
            setResult(null);
        }
        setCrypto(e.target.value);
        setAmount("0");
    };
    async function sendAmount() {
        if (
            recipentRef.current &&
            amountRef.current &&
            recipentRef.current.value &&
            amountRef.current.value
        ) {
            const recipentAddress = recipentRef.current.value;
            const amountToSend = parseFloat(amountRef.current.value) * 1e18; // Convert to wei
            setLoading(true);
            try {
                const response = await axios.post("/api/transfer", {
                    recipient: recipentAddress,
                    network: 80002,
                    amount: amountToSend,
                    gasLimit: 4000000
                });

                console.log("Response:", response.data);
                setResult(response.data.transactionHash)
            } catch (error) {
                console.error("Error sending amount:", error);
            }
            finally {
                setLoading(false);
            }
        } else {
            console.error("Recipient address or amount is invalid.");
        }
    }

    return (
        <div className="bg-[#131722] rounded-lg p-6 w-full max-w-sm mx-auto text-white shadow-lg">
            <div className="text-left text-gray-400 mb-2">You&apos;re sending</div>
            <div className="text-4xl font-semibold mb-1 text-white">${amount || "0"}</div>
            <div className="text-sm text-gray-500">{amount || "0"} {crypto}</div>

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

            <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                ref={amountRef}
                onChange={handleAmountChange}
                className="w-full bg-gray-900 mt-4 p-3 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
                type="text"
                ref={recipentRef}
                placeholder="Wallet address or ENS name"
                className="w-full bg-gray-900 mt-4 p-3 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {isConnected ? (
                result === null ? (
                    <button
                        onClick={sendAmount}
                        className="mt-6 w-full bg-purple-700 text-white py-3 rounded-full font-medium hover:bg-purple-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <div>Send</div>
                        )}
                    </button>
                ) : (
                    <Link
                        href={`https://amoy.polygonscan.com/tx/${result}`}
                        target='_blank'
                        className="mt-6 w-full flex justify-center bg-purple-700 text-white py-3 rounded-full font-medium hover:bg-purple-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500"
                        onClick={() => {
                            setResult(null);
                            if (amountRef.current) {
                                amountRef.current.value = "0";
                            }
                            if (recipentRef.current) {
                                recipentRef.current.value = "";
                            }
                        }}
                    >
                        Verify
                    </Link>
                )
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

export default SellComponent;
