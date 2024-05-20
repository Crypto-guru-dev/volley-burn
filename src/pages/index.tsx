import FooterComponent from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import HeroBg from "@/components/HeroBg";
import { FunctionComponent } from "react";
import BurnComponent from "@/components/BurnComponent";
import BurnFAQs from "@/components/BurnFAQs";

const HomePage: FunctionComponent = () => {
  return (
    <main className="min-h-screen w-full flex flex-col  font-inter">
      <HeroBg />
      <Navbar />

      <div className="w-full relative  overflow-hidden flex flex-col items-center py-10 justify-start text-left text-white font-inter gap-y-10">
        <BurnComponent />
        <BurnFAQs />
      </div>
      <FooterComponent />
    </main>
  );
};

export default HomePage;
