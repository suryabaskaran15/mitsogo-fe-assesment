import React from "react";

const KioskMode = () => {
  return (
    <section className="pb-16 lg:pb-32">
      <div className="w-11/12 max-w-5xl mx-auto">
        <h2 className="antialiased text-2xl md:text-4xl font-bold text-center text-[#020a19] pb-5 md:pb-8">
          What additional possibilities does the <br /> Kiosk mode offer?
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/2 flex flex-col gap-4">
            <div className="relative rounded-lg overflow-hidden transition-all duration-300 ease-out opacity-100">
              <img
                src="https://static.hexnode.com/v2/assets/img/ads-pages/kiosk-mode/2x/effortless-kiosk-deployement-image.jpg"
                alt="Effortless kiosk deployment &amp; management"
                className="w-full rounded-lg"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden transition-all duration-300 ease-out opacity-50">
              <img
                src="https://static.hexnode.com/v2/assets/img/ads-pages/kiosk-mode/2x/customized-interface-image.jpg"
                alt="Customized interface for brand visibility"
                className="w-full rounded-lg"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden transition-all duration-300 ease-out opacity-50">
              <img
                src="https://static.hexnode.com/v2/assets/img/ads-pages/kiosk-mode/2x/secure-app-ecosystem.jpg"
                alt="What more can you do with Hexnode kiosk?"
                className="w-full rounded-lg"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="border-b border-gray-200 py-4 last:border-0">
              <h3 className="text-lg lg:text-xl font-bold cursor-pointer">
                Effortless kiosk deployment &amp; management
              </h3>
              <div className="transition-all duration-300 ease-out overflow-hidden max-h-screen">
                <p className="text-gray-700 text-sm mt-2">
                  Deploy kiosk-enabled devices straight out of the box. Flash a
                  custom Android Enterprise, Samsung Knox or ROM with Hexnode
                  App on the devices by collaborating with OEM vendors who
                  provide specially configured ROMs.
                </p>
                <a
                  href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center mt-2 text-red-600 font-semibold"
                >
                  Try for free
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6.575"
                    height="11.737"
                    className="ml-1"
                  >
                    <path
                      fill="none"
                      stroke="#dd0735"
                      strokeLinecap="round"
                      d="m.707.707 5.161 5.161-5.161 5.161"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="border-b border-gray-200 py-4 last:border-0">
              <h3 className="text-lg lg:text-xl font-bold cursor-pointer">
                Customized interface for brand visibility
              </h3>
              <div className="transition-all duration-300 ease-out overflow-hidden max-h-0">
                <p className="text-gray-700 text-sm mt-2">
                  Create a locked-down environment with customized interface.
                  Maximize brand visibility and leave a lasting impression by
                  showcasing products, services and key messages directly to
                  users through the customized interface.
                </p>
                <a
                  href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center mt-2 text-red-600 font-semibold"
                >
                  Try for free
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6.575"
                    height="11.737"
                    className="ml-1"
                  >
                    <path
                      fill="none"
                      stroke="#dd0735"
                      strokeLinecap="round"
                      d="m.707.707 5.161 5.161-5.161 5.161"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="border-b border-gray-200 py-4 last:border-0">
              <h3 className="text-lg lg:text-xl font-bold cursor-pointer">
                What more can you do with Hexnode kiosk?
              </h3>
              <div className="transition-all duration-300 ease-out overflow-hidden max-h-0">
                <p className="text-gray-700 text-sm mt-2">
                  Manage apps, secure data, and ensure seamless functionality
                  with a comprehensive suite of kiosk features tailored to your
                  needs.
                </p>
                <a
                  href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center mt-2 text-red-600 font-semibold"
                >
                  Try for free
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6.575"
                    height="11.737"
                    className="ml-1"
                  >
                    <path
                      fill="none"
                      stroke="#dd0735"
                      strokeLinecap="round"
                      d="m.707.707 5.161 5.161-5.161 5.161"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KioskMode;
