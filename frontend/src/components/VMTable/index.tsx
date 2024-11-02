import React from "react";
import chart1 from "../../../public/chart-1.svg";
import chart2 from "../../../public/chart-2.svg";
import bitcoin_icon from "../../../public/coin-1.svg";
import etherium_icon from "../../../public/coin-2.svg";
import tether_icon from "../../../public/coin-3.svg";
import bnb_icon from "../../../public/coin-4.svg";

import Image from "next/image";
const MarketSection = () => {
  return (
    <section
      className="bg-eerie-black-1 text-white py-20 px-20"
      aria-label="market update"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center gap-5 mb-6">
          <h2 className="text-7xl font-bold font-secondary">Market Update</h2>
        </div>

        <div className="overflow-x-auto pb-8">
          <table className="w-full text-left">
            <thead className="border-b-2 border-white">
              <tr>
                <th className="px-3 py-6"></th>
                <th className="px-3 py-6">Name</th>
                <th className="px-3 py-6">Last Price</th>
                <th className="px-3 py-6">24h %</th>
                <th className="px-3 py-6">Market Cap</th>
                <th className="px-3 py-6">Last 7 Days</th>
                <th className="px-3 py-6"></th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  rank: 1,
                  name: "Bitcoin",
                  symbol: "BTC",
                  price: "$56,623.54",
                  change: "+1.45%",
                  cap: "$880,423,640,582",
                  trend: "profit",
                  icon: bitcoin_icon,
                },
                {
                  rank: 2,
                  name: "Ethereum",
                  symbol: "ETH",
                  price: "$56,623.54",
                  change: "-5.12%",
                  cap: "$880,423,640,582",
                  trend: "loss",
                  icon: etherium_icon,
                },
                {
                  rank: 3,
                  name: "Tether",
                  symbol: "USDT",
                  price: "$1.00",
                  change: "+0.02%",
                  cap: "$66,234,567,890",
                  trend: "profit",
                  icon: tether_icon, // replace this with the actual import path of the Tether icon
                },
                {
                  rank: 4,
                  name: "BNB",
                  symbol: "BNB",
                  price: "$350.45",
                  change: "-1.23%",
                  cap: "$53,123,456,789",
                  trend: "loss",
                  icon: bnb_icon, // replace this with the actual import path of the BNB icon
                },
                // Add more rows as needed
              ].map((coin, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-800 transition-all duration-200"
                >
                  <th className="px-3 font-bold py-6">{coin.rank}</th>
                  <td className="px-3 py-6">
                    <div className="flex items-center gap-2">
                      <Image
                        src={coin.icon}
                        alt={`${coin.name} logo`}
                        width="20"
                        height="20"
                      />
                      <h3>
                        <a href="#" className="font-bold font-secondary">
                          {coin.name}{" "}
                          <span className="text-roman-silver">
                            {coin.symbol}
                          </span>
                        </a>
                      </h3>
                    </div>
                  </td>
                  <td className="px-3 py-2 ">{coin.price}</td>
                  <td
                    className={`px-3 py-2 font-bold ${
                      coin.change.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {coin.change}
                  </td>
                  <td className="px-3 py-2 ">{coin.cap}</td>
                  <td className="px-3 py-2">
                    <Image
                      src={coin.trend == "profit" ? chart1 : chart2}
                      alt={`${coin.trend} chart`}
                      width="100"
                      height="40"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <button className="border border-white text-white py-1 px-4 rounded-full hover:bg-blue-crayola transition">
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
