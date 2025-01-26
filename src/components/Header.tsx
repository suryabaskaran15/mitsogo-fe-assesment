import React, { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`group ${
        !isScrolled ? "bg-[#020A19]" : "bg-white"
      } text-white py-[8px] fixed top-0 left-0 w-full hover:bg-white`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 w-[88%] md:max-w-[1300px] h-[60px]">
        {/* Logo */}
        <nav className="flex items-center justify-between pt-[8px] pb-[8px] min-h-[65px] transition-all duration-[0.3s] ease-linear xl:min-h-[unset] navbar">
          <a
            className="inline-block max-w-[121px]"
            aria-label="Hexnode"
            href="https://www.hexnode.com/"
          >
            <svg
              version="1.1"
              className={`${
                isScrolled ? "fill-black" : "fill-white"
              } group-hover:fill-black w-[121px] nav-fill-svg`}
              x="0px"
              y="0px"
              viewBox="0 0 120.9 25"
            >
              {" "}
              <g id="hex__logo_Layer_1"> </g>{" "}
              <g id="hex__logo_art_2">
                {" "}
                <g id="hex__logo">
                  {" "}
                  <g>
                    {" "}
                    <path
                      className="hex__logo_st0"
                      d="M8.3,8.7C7.9,8.6,6.9,8.5,5.8,8.8c-0.4,0.1-1.2,0.3-2,0.7l0-7.3c0-1.1-0.9-1.9-1.9-1.9S0,1.2,0,2.2L0,23                    c0,1.1,0.9,1.9,1.9,1.9C3,24.9,3.8,24,3.8,23l0-7.5v0c0.2-0.7,0.4-1.2,0.8-1.7c0.2-0.3,0.9-1,2-1.1c1.6-0.2,2.7,0.7,2.9,0.9                    c1.2,1.1,1.2,2.5,1.2,2.7l0,7.1c0,0.9,0.8,1.7,1.8,1.7h0c1,0,1.8-0.8,1.8-1.7l0-7.5c0-1.5-0.5-2.6-0.8-3.1                    C12.6,10.5,10.5,9,8.3,8.7z"
                    ></path>{" "}
                    <path
                      className="hex__logo_st0"
                      d="M78.2,8.5c-0.3,0-0.8-0.1-1.3,0c-2.8,0.2-4.8,2-5.2,2.4c-2.3,2.3-2.4,5.2-2.4,5.7c0,0.9,0.1,3.3,1.9,5.4                    c1.3,1.5,3.3,2.5,5.7,2.7c0.3,0,0.6,0.1,1.1,0.1l0,0c0,0,0,0,0,0v0c3.4-0.1,5.7-2.6,5.8-2.7c0.3-0.3,1.9-2.4,1.9-5.4                    C85.8,12.4,82.5,8.8,78.2,8.5z M81.7,16.8c-0.1,2.3-2.1,4.1-4.4,4c-2.3-0.1-4.2-2-4.1-4.3c0.1-2.3,2.1-4.1,4.4-4                    C80,12.5,81.8,14.5,81.7,16.8z"
                    ></path>{" "}
                    <path
                      className="hex__logo_st0"
                      d="M59.8,8.7c-1.5,0-2.9,0.4-4.1,1.2c-0.3-0.8-1-1.3-1.9-1.3c-1.1,0-2,0.9-2,2l0,12.2c0,1.1,0.9,2,2,2                    c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0.9,0,1.7-0.7,1.7-1.7l0-6.9c0-0.1,0.1-0.3,0.2-0.6c0-0.1,0.2-0.7,0.3-1                    c0.4-0.9,1.1-1.4,1.3-1.5c0.8-0.5,1.5-0.6,1.7-0.6c0.6,0,1,0.1,1.3,0.1c0.2,0.1,1,0.3,1.6,0.9c1,1,1.2,2.3,1.2,2.6                    c0,2.3,0,4.6,0,6.9c0,0.2,0.1,0.7,0.6,1.1c0.6,0.5,1.2,0.5,1.3,0.5h0c0.9,0,1.7-0.7,1.7-1.7l0-7.3c-0.1-0.8-0.3-2.1-1.1-3.4                    C65.8,12,63.7,8.8,59.8,8.7z"
                    ></path>{" "}
                    <path
                      className="hex__logo_st0"
                      d="M118.2,10.3c-1.9-1.5-4.1-1.6-4.4-1.6c-0.3,0-1.4,0-2.8,0.4c-1.7,0.6-2.8,1.5-3.1,1.8                    c-2.4,2.2-2.5,5.2-2.6,5.7c0,0.7-0.1,3.2,1.7,5.5c1.9,2.3,4.4,2.7,5.1,2.8c1.1,0.2,2.2,0.1,2.5,0c0.5-0.1,1.3-0.2,2.4-0.6                    c1.4-0.6,2.3-1.4,2.9-2.1c0.3-0.8,0.3-1.6-0.2-2.1c-0.4-0.4-0.9-0.6-1-0.6c-0.9-0.2-1.7,0.3-1.8,0.4c-0.2,0.2-0.5,0.5-0.9,0.7                    c-0.8,0.5-1.6,0.5-2.1,0.5c-0.4,0-1.8,0.1-3-0.9c-1.1-0.8-1.5-1.8-1.7-2.2l11.7,0C121.3,15,120.3,12,118.2,10.3z M110.8,13.4                    c1.1-0.7,2.1-0.8,2.6-0.8c0.4,0,1.4,0,2.4,0.7c0.6,0.4,0.9,0.9,1.2,1.3l-7.3,0C109.9,14.2,110.3,13.8,110.8,13.4z"
                    ></path>{" "}
                    <path
                      className="hex__logo_st0"
                      d="M38.2,16.1c1-1,1.9-2,2.9-3c-1.2-1.2-2.4-2.4-3.7-3.6c-0.8-0.8-2.1-0.8-2.9,0c-0.8,0.8-0.8,2.1,0,2.9                    C35.7,13.6,36.9,14.8,38.2,16.1z"
                    ></path>{" "}
                    <path
                      className="hex__logo_st0"
                      d="M49.1,9.1c-0.8-0.8-2.1-0.7-2.8,0.1L34.5,21.5c-0.8,0.8-0.7,2.1,0.1,2.8c0.8,0.8,2.1,0.7,2.8-0.1l4.3-4.5                    l4.4,4.4c0.8,0.8,2.1,0.8,2.9,0c0.8-0.8,0.8-2.1,0-2.9l-4.4-4.5l4.6-4.8C50,11.1,49.9,9.9,49.1,9.1z"
                    ></path>{" "}
                    <path
                      className="hex__logo_st0"
                      d="M101.7,0c-1.1,0-2,0.9-2,2l0,8c-1.1-0.8-2.5-1.3-3.9-1.4v0c-0.3,0-0.8-0.1-1.3,0c-2.8,0.2-4.7,2-5.1,2.4                    C87,13.2,87,16.1,87,16.6c0,0.9,0.1,3.3,1.9,5.4c1.3,1.5,3.2,2.5,5.6,2.7c0.3,0,0.6,0.1,1.1,0.1l0,0c0,0,0,0,0,0l0,0                    c1.8-0.1,3.2-0.8,4.2-1.5c0.2,0.8,1,1.4,1.9,1.4c1.1,0,2-0.9,2-2l0-20.8C103.6,0.9,102.7,0,101.7,0z M99.4,16.8                    c-0.1,2.4-2.1,4.3-4.5,4.2c-2.4-0.1-4.2-2.1-4.1-4.5c0.1-2.4,2.1-4.3,4.5-4.2C97.7,12.4,99.5,14.4,99.4,16.8z"
                    ></path>{" "}
                    <path
                      className="hex__logo_st0"
                      d="M29.3,10.4c-1.9-1.5-4.1-1.6-4.4-1.6c-0.3,0-1.4,0-2.8,0.4c-1.7,0.6-2.8,1.5-3.1,1.8                    c-2.4,2.2-2.5,5.2-2.6,5.7c0,0.7-0.1,3.2,1.7,5.5c1.9,2.3,4.4,2.7,5.1,2.8c1.1,0.2,2.2,0.1,2.5,0c0.5-0.1,1.3-0.2,2.4-0.6                    c1.4-0.6,2.3-1.4,2.9-2.1c0.3-0.8,0.3-1.6-0.2-2.1c-0.4-0.4-0.9-0.6-1-0.6c-0.9-0.2-1.7,0.3-1.8,0.4c-0.2,0.2-0.5,0.5-0.9,0.7                    c-0.8,0.5-1.6,0.5-2.1,0.5c-0.4,0-1.8,0.1-3-0.9c-1.1-0.8-1.5-1.8-1.7-2.2l11.7,0C32.4,15,31.4,12.1,29.3,10.4z M21.9,13.5                    c1.1-0.7,2.1-0.8,2.6-0.8c0.4,0,1.4,0,2.4,0.7c0.6,0.4,0.9,0.9,1.2,1.3l-7.3,0C21,14.3,21.4,13.8,21.9,13.5z"
                    ></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </svg>
          </a>
        </nav>

        {/* Menu Icon and Side Menu for Mobile */}
        <div className="xl:flex hidden items-center space-x-4 w-[190px] h-[45px]">
          {/* 14 Day Free Trial Button */}
          <a
            target="_self"
            rel="nofollow"
            role="link"
            aria-label="14 Day Free Trial"
            className="btn bg-[#bb022a] text-white uppercase px-6 py-2 rounded-md text-sm hover:bg-[#9b001f] focus:bg-[#9b001f] transition"
            href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
          >
            14 Day Free Trial
          </a>
        </div>

        {/* Hamburger Menu Icon - Visible only on small screens */}
        <div className="xl:hidden flex items-center space-x-4">
          <button
            className="text-white text-3xl"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Side Menu that appears from the right */}
      <div
        className={`fixed top-0 right-0 w-[450px] h-full bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-black text-3xl"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center mt-20 space-y-4">
          <a
            target="_self"
            rel="nofollow"
            role="link"
            aria-label="14 Day Free Trial"
            className="btn bg-[#bb022a] w-[350px] text-center text-white uppercase px-6 py-2 rounded-md text-sm hover:bg-[#9b001f] focus:bg-[#9b001f] transition"
            href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
          >
            14 Day Free Trial
          </a>
          <a
            target="_self"
            rel="nofollow"
            role="link"
            aria-label="Login"
            className="text-black text-sm hover:text-[#bb022a] transition"
            href="https://www.hexnode.com/mobile-device-management/sign-in/"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;