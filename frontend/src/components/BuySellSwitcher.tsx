// components/BuySellSwitcher.tsx
"use client";

import React, { useState } from "react";
import BuyComponent from "@/components/BuyComponent";
import SellComponent from "@/components/SellComponent";
import SwapComponent from "./SwapComponents";

const BuySellSwitcher: React.FC = () => {
    const [activeTab, setActiveTab] = useState("buy");

    return (
        <div className="p-4 h-full w-full bg-[#131722] text-white">
            {/* Tab Switcher */}
            <div className="flex justify-around mb-4 border-b border-gray-700">
                <button
                    className={`py-2 px-4 w-1/3 text-center transition-all duration-200 
                        ${activeTab === "buy" ? "bg-gray-800 text-white border-b-2 border-blue-500" : "text-gray-400 hover:text-white"}
                        rounded-t-lg`}
                    onClick={() => setActiveTab("buy")}
                >
                    Buy
                </button>
                <button
                    className={`py-2 px-4 w-1/3 text-center transition-all duration-200 
                        ${activeTab === "sell" ? "bg-gray-800 text-white border-b-2 border-blue-500" : "text-gray-400 hover:text-white"}
                        rounded-t-lg`}
                    onClick={() => setActiveTab("sell")}
                >
                    Send
                </button>
                <button
                    className={`py-2 px-4 w-1/3 text-center transition-all duration-200 
                        ${activeTab === "swap" ? "bg-gray-800 text-white border-b-2 border-blue-500" : "text-gray-400 hover:text-white"}
                        rounded-t-lg`}
                    onClick={() => setActiveTab("swap")}
                >
                    Swap
                </button>
            </div>

            {/* Active Component Content */}
            <div className="mt-4">
                {activeTab === "buy" && <BuyComponent />}
                {activeTab === "sell" && <SellComponent />}
                {activeTab === "swap" && <SwapComponent />}
            </div>
        </div>
    );
};

export default BuySellSwitcher;
