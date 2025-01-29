import React from "react";
import HexLogo from "../components/svg/HexLogo";

const SignInPage: React.FC = () => {

  const loginPartner = [
    {
      src: "/src/assets/loginPartner/image.png",
      alt: "Marriott",
    },
    {
      src: "/src/assets/loginPartner/image copy.png",
      alt: "Merck",
    },
    {
      src: "/src/assets/loginPartner/image copy 2.png",
      alt: "Costco",
    },
    {
      src: "/src/assets/loginPartner/image copy 3.png",
      alt: "Lowe's",
    },
    {
      src: "/src/assets/loginPartner/image copy 4.png",
      alt: "Hilton",
    },
    {
      src: "/src/assets/loginPartner/image copy 5.png",
      alt: "Group 1 Automotive",
    },
  ];

  return (
    <div className="w-full mx-auto flex flex-row">
      {/* Left Content (Add your content here) */}
      <div className="flex-1 p-6">
        <div className="absolute top-6 mx-10 z-10">
          <a
            className="inline-block max-w-[121px]"
            aria-label="Hexnode"
            href="/"
          >
            <HexLogo isScrolled={true} />
          </a>
        </div>

        <div className="left-content">
          <h2>Log in to your Hexnode account</h2>
          <p>
            Enter your Hexnode portal name below. Once connected, you can log in
            with the same credentials that you used while setting up your
            Hexnode account.
          </p>
          <div className="input_wrapper">
            <input type="text" placeholder="Enter your portal name" />
            <div className="domain_name">.hexnodemdm.com</div>
            <button className="hex__sign_in_btn">Connect</button>
          </div>

          <h2>Can’t remember your portal name?</h2>
          <p>Enter your email address below and we’ll send you a reminder.</p>
          <div className="input_wrapper">
            <input type="text" placeholder="Your work email" />
            <button className="bg-red-600 text-white px-6 py-2 rounded-md ml-2 whitespace-nowrap">
              Get Portal Info
            </button>{" "}
          </div>
        </div>
      </div>

      {/* Right Side - Sign In Section */}
      <div
        className="w-[515px] h-screen min-h-[600px] bg-white float-right sticky top-0 right-0 flex flex-col justify-end bg-cover bg-no-repeat relative"
        style={{
          backgroundImage:
            "url(/src/assets/login-side-bar.png)",
        }}>
        <div className="text-center relative top-[100px]">
          <h4 className="text-2xl font-normal text-white mb-6">
            Don't have an account?
          </h4>
          <a
            className="inline-block text-lg font-normal text-secondary bg-white uppercase py-3 px-8 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-200"
            href="/signup">
            Get Started for free
          </a>
        </div>

        {/* Logo Section */}
        <div className="w-[90%] mx-auto mt-28">
          <h2 className="text-lg text-white text-center">
            Enterprises of all sizes trust Hexnode UEM
          </h2>
          <div className="flex flex-wrap justify-center items-center max-w-[450px] mx-auto mt-6">
            {loginPartner.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-1/3 h-20">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
