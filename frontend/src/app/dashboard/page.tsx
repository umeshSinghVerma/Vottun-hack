"use client";
// import Tradingview from "@/components/Tradingview";
import { InfiniteMovingCardsDemo } from "../../components/InfiniteSlider";
export default function page() {
  return (
    // <div className="h-screen w-screen bg-[#131722] text-gray-50 flex overflow-y-auto">
    //   <div className="">
    //     <div className="h-full w-full">
    //       <Tradingview />
    //     </div>
    //   </div>
    // </div>
    <div className="w-full h-full min-h-screen bg-black">
      <InfiniteMovingCardsDemo />
    </div>
  );
}
