import React, { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

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
      image: "/src/assets/feature/image.png",
    },
    {
      title: "Customized interface for brand visibility",
      content:
        "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
      image: "/src/assets/feature/image copy.png",
    },
    {
      title: "What more can you do with Hexnode kiosk?",
      content:
        "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
      image: "/src/assets/feature/image copy 2.png",
    },
    {
      title: "Secure and update your app ecosystem",
      content:
        "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
      image: "/src/assets/feature/image copy 3.png",
    },
    {
      title: "Provide an easy-to-use interface for end-users",
      content:
        "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
      image: "/src/assets/feature/image copy 4.png",
    },
  ];

  return (
    <section className="pb-16 lg:pb-32">
      <div className="container mx-auto px-4">
        <h2 className="antialiased text-2xl md:text-4xl font-bold text-center text-[#020a19] pb-5 md:pb-8">
          What additional possibilities does the <br /> Kiosk mode offer?
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`transition-opacity duration-300 ease-in-out rounded-lg overflow-hidden w-[400px] h-[400px] md:w-[500px] md:h-[500px] ${
                  activeIndex === index ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
          {/* Accordion Section */}
          <div className="md:w-1/2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border-b border-gray-200 py-5 last:border-0"
              >
                <h3
                  className="text-[#050607] cursor-pointer font-bold text-[24px] leading-[36px] lg:text-[26px] lg:leading-[40px] text-left"
                  onClick={() => toggleContent(index)}
                >
                  {feature.title}
                </h3>
                <div
                  className={`transition-max-height duration-300 ease-out overflow-hidden ${
                    activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <p className="text-[#333333] font-normal text-[18px] leading-[28px] pt-[20px]">
                    {feature.content}
                  </p>
                  <a
                    href="/signup"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center mt-2 text-red-600 font-semibold"
                  >
                    Try for free
                    <MdOutlineNavigateNext />
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
