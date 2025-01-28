import React from "react";

const Footer = ()=>{
    return (
      <>
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
}

export default Footer;