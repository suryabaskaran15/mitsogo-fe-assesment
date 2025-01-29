import React, { useEffect, useState } from "react";
import HexLogo from "./svg/HexLogo";
import { MdClose, MdMenu } from "react-icons/md";

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
        isScrolled ? "bg-white text-black" : "bg-[#020A19] text-white"
      } fixed top-0 left-0 w-full py-2 z-50 transition-colors duration-300 hover:bg-white`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 w-[88%] md:max-w-[1300px] h-[60px]">
        {/* Logo */}
        <nav className="flex items-center justify-between pt-[8px] pb-[8px] min-h-[65px] transition-all duration-[0.3s] ease-linear xl:min-h-[unset] navbar">
          <a
            className="inline-block max-w-[121px]"
            aria-label="Hexnode"
            href="/"
          >
            <HexLogo isScrolled={isScrolled} />
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
            href="/signup"
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
            <MdMenu className="group-hover:fill-black" />
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
            <MdClose />
          </button>
        </div>
        <div className="flex flex-col items-center mt-20 space-y-4">
          <a
            target="_self"
            rel="nofollow"
            role="link"
            aria-label="14 Day Free Trial"
            className="btn bg-[#bb022a] w-[350px] text-center text-white uppercase px-6 py-2 rounded-md text-sm hover:bg-[#9b001f] focus:bg-[#9b001f] transition"
            href="/signup"
          >
            14 Day Free Trial
          </a>
          <a
            target="_self"
            rel="nofollow"
            role="link"
            aria-label="Login"
            className="text-black text-sm hover:text-[#bb022a] transition"
            href="/signin"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
