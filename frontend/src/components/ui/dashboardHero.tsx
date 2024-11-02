import Image from "next/image";
import heroImg from "../../../public/hero-banner.png";
import ShinyButton from "../ShinyButton";
import { InfiniteMovingCardsDemo } from "../InfiniteSlider";
const Hero: React.FC = () => {
  return (
    <section className="bg-black py-16 w-full flex flex-col justify-center items-center gap-20">
      <div className="flex flex-row  gap-32 items-center justify-evenly px-4">
        <div className="text-white max-w-lg flex flex-col items-start justify-center gap-4">
          <h1 className="text-7xl font-bold font-secondary">
            Buy & Sell Digital Assets With Name
          </h1>
          <p className="text-lg my-6">
            the easiest, safest, and fastest way to buy & sell crypto assets.
          </p>

          <ShinyButton>Get started now</ShinyButton>
        </div>
        <div>
          <Image src={heroImg} alt="hero banner" className="w-full max-w-lg" />
        </div>
      </div>
      <InfiniteMovingCardsDemo />
    </section>
  );
};

export default Hero;
