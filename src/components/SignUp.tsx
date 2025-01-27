import React from "react";

const SignupSection = () => {
  return (
    <section className="bg-[#020a19] flex justify-center items-center md:h-[330px] py-[50px] md:py-0 relative">
      <div className="absolute top-[-65px] xl:top-[-74px] opacity-0 w-0 h-0 m-0"></div>
      <div className="w-[88%] mx-auto md:max-w-[1300px]">
        <div className="w-full text-center max-w-[1000px] mx-auto">
          <h3 className="text-[30px] text-[#fff] font-bold leading-[38px] text-center mb-[20px] md:text-[42px] md:leading-[1.3]">
            Sign up and try Hexnode free for 14 days!
          </h3>
        </div>
        <div className="max-w-[580px] mx-auto">
          <div className="max-w-[527px] mx-auto">
            <form className="p-0 m-0">
              <div className="flex justify-between flex-col items-center md:flex-row">
                <div className="w-full max-w-[325px] md:mr-[8px]">
                  <input
                    placeholder="Your Work Email"
                    type="text"
                    name="email"
                    id="email"
                    className="text-[18px] leading-[24px] w-full h-[53px] rounded-[3px] px-[10px] shadow-none transition-all duration-[0.3s] ease-in-out bg-white placeholder:text-[#c6c6c6]"
                  />
                </div>
                <div className="w-full max-w-[325px] mt-[15px] md:max-w-[195px] md:mt-0">
                  <button
                    role="button"
                    className="text-[17px] leading-[24px] uppercase text-[#fff] font-normal bg-[#dd0735] w-full h-[53px] border-0 flex justify-center items-center rounded-[3px] transition-all ease-in-out duration-[0.25s] cursor-pointer hover:text-[#fff] hover:bg-[#bb022a] focus:text-[#fff] focus:bg-[#bb022a]"
                  >
                    <span>Get Started</span>
                    <span className="overflow-hidden animate-spin flex justify-center items-center max-w-0 w-0 h-0">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
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
          </div>
          <div className="pt-[10px] relative">
            <span className="text-[17px] leading-[24px] text-[#fff] font-extralight text-center block absolute top-0 left-0 w-full"></span>
            <p className="text-[17px] leading-[24px] text-center text-[#556575] font-medium m-0 pt-[10px]">
              No credit cards required.
              <a
                className="text-[17px] leading-[24px] text-[#dd0735] font-medium whitespace-nowrap inline-block transition-all duration-[0.3s] ease-in-out pr-[20px] pb-0 pl-[5px] relative after:content-[''] after:w-[6px] after:h-[10px] after:absolute after:right-[5px] after:top-[9px] after:bg-[url('https://static.hexnode.com/img/home_page/images/icons/arrow-right.svg')] after:bg-no-repeat after:transition-all after:duration-[0.3s] after:ease-in-out"
                role="link"
                href="https://www.hexnode.com/mobile-device-management/request-demo/"
              >
                Request a demo
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
