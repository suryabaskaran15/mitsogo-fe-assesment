import React from "react";
import Header from "../components/Header";
import KioskTabs from "../components/TabContent";
import KioskFeatures from "../components/Features";
import TestimonialSlider from "../components/Testiminial";
import LogoCarousel from "../components/logo";
import PlatformsSupported from "../components/PlatformSupport";
import SignupSection from "../components/SignUp";

const Home = () => {
  return (
    <>
      <Header />
      <section className="p-[90px_0_30px] xl:p-[120px_0_0px] bg-[#020A19]">
        <div className="w-[88%] max-w-[1300px] mx-auto">
          <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-between">
            <div className=" flex flex-col max-w-full sm:max-w-[550px] xl:max-w-[498px] order-2 xl:order-1">
              <div className="">
                <div className="mb-[20px] md:mb-[40px]">
                  <h1 className="text-[#FFFFFF] text-[34px] leading-[44px] text-center lg:text-[42px] lg:leading-[53px] xl:text-left font-bold antialiased">
                    Turn your devices into kiosks in a few minutes with Hexnode
                    UEM
                  </h1>
                </div>
              </div>
              <div className="banner-sec-left__footer ">
                <form className="p-0 m-0" data-hs-cf-bound="true">
                  <div className="flex justify-between flex-col items-center sm:flex-row solutions_wrapper__6y5DU">
                    <div className="w-full SignupStripe_input-wrapper__bds9N solutions_input-wrapper__bB8qh">
                      <input
                        placeholder="Your Work Email"
                        type="text"
                        name="email"
                        id="signup-email"
                        className="text-[16px] leading-[20px] w-full shadow-none transition-all duration-300 ease-in-out SignupStripe_input-field__dA1V3 solutions_input-field__0TMdH"
                        value=""
                      />
                    </div>
                    <div className="w-full SignupStripe_btn-wrapper__bYUSe solutions_btn-wrapper__d5LQu">
                      <button
                        role="button"
                        className="text-[16px] leading-[20px] uppercase text-white font-normal bg-[#dd0735] w-full border-0 flex justify-center items-center transition-all ease-in-out cursor-pointer hover:text-white hover:bg-[#bb022a] hover:no-underline focus:text-white focus:bg-[#bb022a] focus:no-underline SignupStripe_btn-label__U_7uu"
                      >
                        GET STARTED NOW!
                        <span className="overflow-hidden animate-spin flex justify-center items-center max-w-0 w-0 h-0">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            version="1.1"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM12.359 8c0 0 0 0 0 0 0-0.906 0.735-1.641 1.641-1.641s1.641 0.735 1.641 1.641c0 0 0 0 0 0 0 0.906-0.735 1.641-1.641 1.641s-1.641-0.735-1.641-1.641zM10.757 12.243c0-0.821 0.665-1.486 1.486-1.486s1.486 0.665 1.486 1.486c0 0.821-0.665 1.486-1.486 1.486s-1.486-0.665-1.486-1.486zM6.654 14c0-0.743 0.603-1.346 1.346-1.346s1.346 0.603 1.346 1.346c0 0.743-0.603 1.346-1.346 1.346s-1.346-0.603-1.346-1.346zM2.538 12.243c0-0.673 0.546-1.219 1.219-1.219s1.219 0.546 1.219 1.219c0 0.673-0.546 1.219-1.219 1.219s-1.219-0.546-1.219-1.219zM0.896 8c0-0.61 0.494-1.104 1.104-1.104s1.104 0.494 1.104 1.104c0 0.61-0.494 1.104-1.104 1.104s-1.104-0.494-1.104-1.104zM2.757 3.757c0 0 0 0 0 0 0-0.552 0.448-1 1-1s1 0.448 1 1c0 0 0 0 0 0 0 0.552-0.448 1-1 1s-1-0.448-1-1zM14.054 3.757c0 1-0.811 1.811-1.812 1.811s-1.812-0.811-1.812-1.811c0-1.001 0.811-1.811 1.812-1.811s1.812 0.811 1.812 1.811z"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="SignupStripe_error-wrapper__rhOln relative solutions_error-wrapper__Rw5Qr">
                  <span className="text-[18px] leading-[24px] text-white font-extralight text-center block relative p-0 m-0 SignupStripe_er-msg__aeULY !absolute w-full top-0 left-1/2 -translate-x-1/2 solutions_er-msg__ezriN "></span>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full md:max-w-[597px] order-1 xl:order-2">
              <div className="w-full max-w-full md:max-w-[597px]  max-[420px]:max-h-[258px] max-[420px]:mb-[40px]">
                <img
                  alt="Mobile Kiosk"
                  loading="lazy"
                  width="597"
                  height="585"
                  decoding="async"
                  data-nimg="1"
                  className="w-full h-full object-cover max-[420px]:h-[258px] "
                  style={{ color: "transparent" }}
                  src="/src/assets/image.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <div className="bg-[#1A1C2B] md:py-[30px]">
        <div className="w-[88%] max-w-[1300px] mx-auto">
          <div className="flex flex-col max-md:items-center md:flex-row justify-center mx-[0px] md:justify-between md:mx-[-10px] lg:mx-[-25px] xl:mx-[-45px]">
            {[
              {
                href: "https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/",
                imgSrc: "/src/assets/idc.png",
                imgAlt: "IDC",
                description:
                  "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.",
              },
              {
                href: "https://www.hexnode.com/blogs/hexnode-listed-as-a-notable-vendor-in-gartner-midmarket-context-magic-quadranttm-for-unified-endpoint-management-tools/",
                imgSrc: "/src/assets/gartner.png",
                imgAlt: "Gartner",
                description:
                  "Hexnode was recognized in the 2023 Gartner® Market Guide for Unified Endpoint Management Tools.",
              },
              {
                href: "https://www.hexnode.com/blogs/hexnode-included-in-the-unified-endpoint-management-landscape-report/",
                imgSrc: "/src/assets/forrester.png",
                imgAlt: "Forrester",
                description:
                  "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.",
              },
            ].map((item, index) => (
              <a
                key={index}
                target="_blank"
                className="group max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px] banner_accolades-wrap__r_Utd relative"
                href={item.href}
              >
                <div className="flex flex-col items-center md:items-baseline banner_accolades-content__tfXj3 group-hover:translate-y-[-10px] transition-transform duration-300">
                  <div className="flex mb-[15px]">
                    <div className="flex items-center min-w-[82px] max-w-[156px] max-h-[25px] w-full h-full">
                      <img
                        alt={item.imgAlt}
                        loading="lazy"
                        width="83"
                        height="25"
                        decoding="async"
                        data-nimg="1"
                        className="w-full max-w-full h-[25px] object-cover"
                        style={{ color: "transparent" }}
                        src={item.imgSrc}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] leading-[22px] text-[rgb(255,255,255,60%)] text-center md:text-left">
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
            <div className="w-[107px] md:w-[1px] bg-[rgb(255,255,255,20%)] basis-[1px] last:hidden"></div>
          </div>
        </div>
      </div>
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
      <footer>
        <nav>
          <div className="bg-[#f2f2f2] py-7 sm:py-5">
            <div className="w-[88%] mx-auto md:max-w-[1300px]">
              <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                {/* <!-- Links Section --> */}
                <div className="flex flex-col sm:flex-row">
                  <ul className="flex flex-row flex-wrap space-x-2">
                    <li className="list-none">
                      <a
                        className="text-[12px] leading-6 font-medium text-gray-700 transition-all hover:text-[#020a19]"
                        href="https://www.hexnode.com/legal/terms-of-use/"
                      >
                        Terms of Use
                      </a>
                    </li>
                    <li className="list-none">
                      <a
                        className="text-[12px] leading-6 font-medium text-gray-700 transition-all hover:text-[#020a19]"
                        href="https://www.hexnode.com/legal/privacy-policy/"
                      >
                        Privacy
                      </a>
                    </li>
                    <li className="list-none">
                      <a
                        className="text-[12px] leading-6 font-medium text-gray-700 transition-all hover:text-[#020a19]"
                        href="https://www.hexnode.com/legal/cookies-policy/"
                      >
                        Cookies
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- Copyright Section --> */}
                <div className="mt-4 sm:mt-0">
                  <p className="text-[12px] leading-6 font-medium text-gray-700 m-0">
                    Copyright © 2024 Mitsogo Inc. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Home;
