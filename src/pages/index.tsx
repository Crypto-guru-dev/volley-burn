import { FunctionComponent } from "react";
import Navbar from "@/components/common/Navbar";
import HeroComponent from "@/components/HeroComponent";
import FooterComponent from "@/components/common/Footer";
import ProofOfBurn from "../components/ProofOfBurnComponent";
import FollowInstructionsComponent from "../components/FollowInstructionsComponent";
import PartnershipSection from "../components/PartnershipSection";
import GetInTouchSection from "../components/GetInTouchSection";

const HomePage: FunctionComponent = () => {
  return (
    <div className="min-h-screen min-w-screen bg-[#270E63] w-full relative overflow-hidden flex flex-col items-center justify-start leading-[normal] tracking-[normal] text-left text-white font-oswald">
      <Navbar />
      <HeroComponent />
      <ProofOfBurn />
      <FollowInstructionsComponent />
      <PartnershipSection />
      <GetInTouchSection />
      <FooterComponent />
    </div>
  );
};

export default HomePage;
