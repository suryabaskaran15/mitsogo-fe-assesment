import React, { useState } from "react";

const KioskFeatures = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleContent = (index: number) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  const features = [
    {
      title: "Effortless kiosk deployment & management",
      content:
        "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
      image:
        "https://static.hexnode.com/v2/assets/img/ads-pages/kiosk-mode/2x/effortless-kiosk-deployement-image.jpg",
    },
    {
      title: "Customized interface for brand visibility",
      content:
        "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
      image:
        "https://static.hexnode.com/v2/assets/img/ads-pages/kiosk-mode/2x/customized-interface-image.jpg",
    },
    {
      title: "What more can you do with Hexnode kiosk?",
      content:
        "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
      image:
        "https://static.hexnode.com/v2/assets/img/ads-pages/kiosk-mode/2x/secure-app-ecosystem.jpg",
    },
    {
      title: "Secure and update your app ecosystem",
      content:
        "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
      image:
        "https://static.hexnode.com/v2/assets/img/ads-pages/kiosk-mode/2x/secure-app-ecosystem.jpg",
    },
    {
      title: "Provide an easy-to-use interface for end-users",
      content:
        "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
      image:
        "https://static.hexnode.com/v2/assets/img/ads-pages/kiosk-mode/2x/secure-app-ecosystem.jpg",
    },
  ];

  return (
    <section className="pb-16 lg:pb-32">
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="antialiased text-2xl md:text-4xl font-bold text-center text-[#020a19] pb-5 md:pb-8">
          What additional possibilities does the <br /> Kiosk mode offer?
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left Slider Section */}
          <div className="md:w-1/2 flex flex-col gap-4 m-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 ease-out ${
                  activeIndex === index ? "opacity-100" : "hidden"
                }`}
              >
                <div className="w-[500px] h-[500px] mx-auto">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Accordion Section */}
          <div className="md:w-1/2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border-b border-gray-200 py-1 last:border-0"
              >
                <h3
                  className="text-[#050607] cursor-pointer font-bold text-[24px] leading-[36px] lg:text-[26px] lg:leading-[40px] text-left"
                  onClick={() => toggleContent(index)}
                >
                  {feature.title}
                </h3>
                <div
                  className={`transition-all duration-300 ease-out overflow-hidden ${
                    activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <p className="text-[#333333] font-normal text-[18px] leading-[28px] pt-[20px]">
                    {feature.content}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KioskFeatures;
