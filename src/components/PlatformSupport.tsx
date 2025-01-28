import React from "react";

const PlatformsSupported = () => {
  const platforms = [
    {
      alt: "Android",
      src: "/src/assets/platform/android.png",
    },
    {
      alt: "Windows",
      src: "/src/assets/platform/windows.png",
    },
    {
      alt: "iOS",
      src: "/src/assets/platform/ios.png",
    },
    {
      alt: "Android TV",
      src: "/src/assets/platform/androidTV.png",
    },
    {
      alt: "Apple TV",
      src: "/src/assets/platform/Itv.png",
    },
    {
      alt: "Amazon Fire",
      src: "/src/assets/platform/firetv.png",
    },
  ];

  return (
    <section className="pt-[60px] lg:pt-[120px] pb-[60px] lg:pb-[120px] flex justify-center items-center text-center flex-col">
      <div className="mx-auto max-w-[1300px] w-[88%]">
        <h2 className="text-center mb-[40px] text-[#020a19] text-[32px] leading-[40px] antialiased font-[700] md:mb-[60px] sm:text-[40px] sm:leading-[1.3]">
          Platforms supported
        </h2>
        <div className="flex items-center flex-wrap">
          {platforms.map((platform, index) => (
            <div
              key={platform.alt}
              className={`block shrink-0 basis-1/2 md:basis-1/3 lg:basis-[calc(100%_/_6)] rounded-[10px] mb-[25px] sm:mb-[15px] px-[12px] ${
                index % 2 === 0 ? "max-xs:even:pr-0" : "max-xs:odd:pl-0"
              }`}
            >
              <div className="flex items-center justify-center shrink-0 relative mx-auto max-w-[150px] h-[60px] sm:max-w-[190px] sm:h-[72px] rounded-[10px] platformLogoList_translate-transition-kit__A2GmB hover:transform hover:translate-y-[-5px] hover:transition-all">
                <img
                  alt={platform.alt}
                  loading="lazy"
                  width="190"
                  height="72"
                  decoding="async"
                  className="block w-full object-contain hover:transform hover:translate-y-[-5px] hover:transition-all"
                  style={{ color: "transparent" }}
                  src={platform.src}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSupported;
