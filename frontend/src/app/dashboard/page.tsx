"use client";
import Tradingview from "@/components/Tradingview";

export default function page() {
  return (
    <div className="h-screen w-screen bg-[#131722] text-gray-50 flex overflow-y-auto">
      <div className="">
        <div className="h-full w-full">
          <Tradingview />
        </div>
      </div>
    </div>
  );
}
