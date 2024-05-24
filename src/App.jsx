import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./section/Header";
import NewHeader from "./section/NewHeader";
import Hero from "./section/Hero";
import Features from "./section/Features";
import Services from "./section/Services";
import FeaturesMobile from "./section/FeaturesMobile";

import Member from "./section/Member";
import Banner from "./section/Banner";

import MovingLogo from "./section/MovingLogo";
import Roadmap from "./section/Roadmap";
import Statistic from "./section/Statistic";
import Footer from "./section/Footer";
import Stats from "./section/Stats";
import Image from "./section/Image";
import Testing from "./section/Testing";
import Advisor from "./section/Advisor";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        {/* <Header /> */}
        <NewHeader />
        <div className="relative z-10">
          <Hero />
          <Stats />
          <div className="hidden lg:block">
            <Features />
          </div>
          <div className="block lg:hidden">
            <FeaturesMobile />
          </div>
        </div>
        <Banner className="z-0" />
        <MovingLogo />
        {/* <Team /> */}
        <Statistic />
        <Roadmap />
        <Member />
        <Advisor />
        <Footer />
        {/* <Testing /> */}
      </div>
      {/* <ButtonGradient /> */}
    </>
  );
};

export default App;
