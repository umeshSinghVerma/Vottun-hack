'use client'
import React, { useState } from 'react';

// Define types for portfolio data
interface Order {
    id: number;
    pair: string;
    status: string;
}

interface PortfolioData {
    totalBalance: number;
    availableBalance: number;
    marginUsed: number;
    openPositions: number;
    recentOrders: Order[];
}

interface PortfolioProps {
    initialData: PortfolioData;
}

export default function Portfolio({ initialData }: PortfolioProps) {
    const [portfolioData, setPortfolioData] = useState(initialData);
    const [activeTab, setActiveTab] = useState<'portfolio' | 'orders'>('portfolio');

    // Function to switch tabs
    const switchTab = (tab: 'portfolio' | 'orders') => {
        setActiveTab(tab);
    };

    return (
        <div className="p-4 bg-[#131722] text-white">
            <h2 className="text-lg font-semibold mb-4">Portfolio</h2>

            {/* Tab Switcher */}
            <div className="flex border-b border-gray-700 mb-4">
                <button
                    onClick={() => switchTab('portfolio')}
                    className={`flex-1 py-2 text-center ${activeTab === 'portfolio' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'}`}
                >
                    Portfolio Overview
                </button>
                <button
                    onClick={() => switchTab('orders')}
                    className={`flex-1 py-2 text-center ${activeTab === 'orders' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'}`}
                >
                    Recent Orders
                </button>
            </div>

            {/* Display Content Based on Active Tab */}
            {activeTab === 'portfolio' ? (
                <div>
                    {/* Portfolio Overview Content */}
                    <div className="space-y-4">
                        <div className="flex justify-between border-b border-gray-700 pb-2">
                            <span>Total Balance</span>
                            <span>${portfolioData.totalBalance.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-700 pb-2">
                            <span>Available Balance</span>
                            <span>${portfolioData.availableBalance.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-700 pb-2">
                            <span>Margin Used</span>
                            <span>{portfolioData.marginUsed}%</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-700 pb-2">
                            <span>Open Positions</span>
                            <span>{portfolioData.openPositions}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    {/* Recent Orders Content */}
                    <h3 className="text-md font-medium mb-2">Recent Orders</h3>
                    <ul className="space-y-2">
                        {portfolioData.recentOrders.map(order => (
                            <li key={order.id} className="flex justify-between border-b border-gray-700 pb-1">
                                <span>Order #{order.id}</span>
                                <span>{order.pair}</span>
                                <span className={`capitalize ${order.status === 'Executed' ? 'text-green-400' : 'text-yellow-400'}`}>
                                    {order.status}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
