'use client'
import BuySellSwitcher from "@/components/BuySellSwitcher";
import Tradingview from "@/components/Tradingview";
import Portfolio from "@/components/Portfolio";
import { Suspense } from "react";

// Initial portfolio data to pass as props
const initialPortfolioData = {
    totalBalance: 10000, // e.g., $10,000
    availableBalance: 8000,
    marginUsed: 20, // e.g., 20%
    openPositions: 2,
    recentOrders: [
        { id: 1, pair: "ETH/USD", status: "Executed" },
        { id: 2, pair: "BTC/USD", status: "Pending" },
    ]
};

export default function Page() {
    return (
        <div className="flex md:flex-row w-full h-full flex-col">
            <div className="w-[70%] flex flex-col">
                <div className="h-[70%]">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Tradingview />
                    </Suspense>
                </div>
                <div className="h-[30%] overflow-y-auto border-gray-700 border">
                    <Portfolio initialData={initialPortfolioData} />
                </div>
            </div>
            <div className="w-[30%]">
                <BuySellSwitcher />
            </div>
        </div>
    );
}
