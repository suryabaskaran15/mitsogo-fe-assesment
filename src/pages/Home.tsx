import React from "react";
import Header from "../components/Header";
import KioskFeatures from "../components/Features";
import TestimonialSlider from "../components/Testiminial";
import LogoCarousel from "../components/logo";
import PlatformsSupported from "../components/PlatformSupport";
import SignupSection from "../components/SignUp";
import Footer from "../components/Footer";
import Partner from "../components/Partner";
import Landing from "../components/Landing";
import KioskTabs from "../components/KiskoTabs";

const Home = () => {
  return (
    <>
      <Header />
      {/*  */}
      <Landing />
      {/*  */}
      <Partner />
      {/*  */}
      <KioskTabs />
      {/*  */}
      <KioskFeatures />
      {/*  */}
      <TestimonialSlider />
      {/*  */}
      <LogoCarousel />
      {/*  */}
      <PlatformsSupported />
      {/*  */}
      <SignupSection />
      {/*  */}
      <Footer />
    </>
  );
};

export default Home;
