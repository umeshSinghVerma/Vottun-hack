import React, { useState } from 'react';
import { useWalletContext } from './WalletContext';

const BuyComponent: React.FC = () => {
    const [amount, setAmount] = useState(0);
    const { connectWallet, isConnected } = useWalletContext();

    // Update the amount based on preset button clicks
    const handleAmountChange = (value: number) => {
        setAmount(value);
    };

    return (
        <div className="bg-[#131722] rounded-lg p-6 w-full max-w-sm mx-auto text-center text-white shadow-lg">
            {/* Title Section */}
            <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400">You&apos;re buying</span>
                <div className="flex items-center space-x-2">
                    <img src="/path/to/flag-icon.png" alt="Flag" className="w-5 h-5 rounded-full" />
                </div>
            </div>

            {/* Amount Display */}
            <div className="text-4xl font-semibold mb-1 text-white">${amount}</div>
            <div className="text-sm text-gray-500">{amount / 2500 || 0} ETH</div>

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
            {
                isConnected ?
                    (
                        <button
                            className="mt-6 w-full bg-purple-700 text-white py-3 rounded-full font-medium hover:bg-purple-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500">
                            Buy
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

export default BuyComponent;
