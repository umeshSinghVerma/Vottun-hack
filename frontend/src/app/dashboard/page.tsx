import Tradingview from "@/components/Tradingview";

export default function page() {
    return (
        <div className="h-screen w-screen bg-[#131722] text-gray-50 flex overflow-y-auto">
            <div className="">
                <div className="h-[50%] w-[100%] md:h-[60%] md:w-[75%]">
                    <Tradingview />
                </div>
            </div>
            <div className="border-[#363a45] w-full md:w-[25%] h-full">
                hii there
            </div>
        </div>
    )
}
