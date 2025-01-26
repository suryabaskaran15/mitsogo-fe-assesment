import React, { useState } from "react";

// Define the type for the tab content structure
interface TabContentProps {
  heading: string;
  points: string[];
  image: string;
  alt: string;
}

interface Tab {
  id: number;
  title: string;
  content: TabContentProps;
}

// Define the tabs data with types
const tabs: Tab[] = [
  {
    id: 1,
    title: "Single App Kiosk",
    content: {
      heading: "Powerful Single-App Kiosk solutions for enhanced control",
      points: [
        "Provision the devices to run one specialized application, with limited functionalities.",
        "Customize the device settings to cater to a specific use-case each time.",
        "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
        "Empower your administrators with full control over the kiosk devices.",
      ],
      image: "/src/assets/tab-content/single-app-kisko.png",
      alt: "kiosk mode",
    },
  },
  {
    id: 2,
    title: "Multi-App Kiosk",
    content: {
      heading: "Elevate efficiency with Multi-App Kiosk",
      points: [
        "Limit device access to approved apps, ensuring focus and productivity.",
        "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
        "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
        "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
      ],
      image: "/src/assets/tab-content/multi-app-kisko.png",
      alt: "kiosk mode",
    },
  },
  {
    id: 3,
    title: "Web-based Kiosk",
    content: {
      heading: "Explore the new way to manage web apps and websites",
      points: [
        "Let users access essential and approved web apps, website and files only.",
        "Make the best use of website kiosk with Hexnode's advanced settings.",
        "Tailor your experience to match your unique use case.",
        "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.",
      ],
      image: "/src/assets/tab-content/web-kisko.png",
      alt: "kiosk mode",
    },
  },
  {
    id: 4,
    title: "Digital Signages",
    content: {
      heading: "Capture attention with Digital Signage Kiosks",
      points: [
        "Transform your devices into captivating digital signage kiosks that grab attention.",
        "Engage your audience with vibrant images and seamless video streaming.",
        "Customize media files with trimming, muting, and background music.",
        "Advertise and show off your brand aesthetics to attract customers in different ways.",
        "Take control with Hexnode to reestablish your brand's presence.",
      ],
      image: "/src/assets/tab-content/digital-sinages.png",
      alt: "kiosk mode",
    },
  },
  {
    id: 5,
    title: "ASAM Kiosk",
    content: {
      heading: "Unlock the power of Autonomous Single App Mode (ASAM)",
      points: [
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
        "Customize media files with trimming, muting, and background music.",
        "Create focused, efficient and secure digital environments to match your requirements.",
        "Configure ASAM effortlessly and elevate your user experience like never before.",
      ],
      image: "/src/assets/tab-content/asam.png",
      alt: "kiosk mode",
    },
  },
  // Add more tabs here
];

const KioskTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  // Get the active tab content dynamically
  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <section className="py-[60px] flex justify-center items-center text-center flex-col lg:py-[120px]">
      <div className="mx-auto max-w-[1300px] w-[88%]">
        <h2 className="text-center mx-auto text-[#020a19] text-[28px] leading-[1.25] antialiased font-[700] sm:text-[36px] max-w-[900px]">
          Specific kiosk modes for unique use cases
        </h2>

        <div className="pt-[40px] sm:pt-[60px]">
          {/* Tab List */}
          <div className="relative hidden sm:block">
            <div className="flex bg-white justify-center">
              <ul className="flex justify-between items-center cursor-pointer">
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    className={`flex-1 px-[30px] text-center transition-all duration-[400ms] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${
                      activeTab === tab.id
                        ? "bg-black text-white" // Active tab class
                        : "text-[#020a19]/50"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <p className="p-[26px_0] h-[80px] flex justify-center items-center text-[22px] font-[600]">
                      {tab.title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tab Content */}
          {activeTabContent && (
            <div className="p-[40px] bg-[#f7f7f7] overflow-hidden">
              <TabContent content={activeTabContent} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// TabContent component handles rendering the content of the active tab
interface TabContentComponentProps {
  content: TabContentProps;
}

const TabContent: React.FC<TabContentComponentProps> = ({ content }) => {
  const { heading, points, image, alt } = content;

  return (
    <div className="lg:flex-row justify-between flex flex-col-reverse">
      {/* Text Content */}
      <div className="mb-[20px] lg:mb-0 flex-1 text-left max-w-[760px] lg:pr-[40px]">
        <h3 className="text-[#020A19] font-bold text-[20px] leading-[26px] pb-[15px] lg:pb-[40px] sm:text-[28px] sm:leading-[40px]">
          {heading}
        </h3>
        <ul>
          {points.map((point, index) => (
            <li
              key={index}
              className="relative mb-[10px] lg:mb-[25px] pl-[25px] sm:pl-[30px]"
            >
              <span className="absolute left-0 top-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14.393"
                  height="10.111"
                >
                  <path
                    fill="none"
                    stroke="#60c458"
                    strokeWidth="2"
                    d="M.697 4.107 5.45 8.718l8.247-8"
                  ></path>
                </svg>
              </span>
              <p className="text-[16px] sm:text-[18px] text-[#333333]">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Content */}
      <div className="group w-full max-w-[308px] sm:max-w-[460px] flex-1">
        <div className="rounded-[10px] overflow-hidden">
          <figure className="relative max-w-[100%]">
            <img
              loading="lazy"
              src={image}
              alt={alt}
              className="rounded-[10px] w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default KioskTabs;
