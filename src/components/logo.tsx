import React from "react";

const LogoCarousel = () => {
  return (
    <section className="pb-[60px] pt-[10px] lg:pb-[120px] md:pt-[20px] bg-[#F7F7F7]">
      <div className="w-[88%] mx-auto md:max-w-[1300px] relative">
        <div className="w-[70px] sm:w-[100px] h-[40px] sm:h-[80px] absolute left-0 bg-gradient-to-r from-[#F7F7F7] via-[#F7F7F7] to-transparent z-[1]"></div>
        <div className="w-[70px] sm:w-[100px] h-[40px] sm:h-[80px] absolute right-0 bg-gradient-to-l from-[#F7F7F7] via-[#F7F7F7] to-transparent z-[1]"></div>
        <div className="slick-slider slick-initialized" dir="ltr">
          <div className="slick-list" style={{ padding: "0px" }}>
            <div
              className="slick-track"
              style={{
                width: "4564px",
                opacity: "1",
                transform: "translate3d(-2282px, 0px, 0px)",
              }}
            >
              {[
                {
                  alt: "Costco",
                  src: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/costco.svg",
                },
                {
                  alt: "SAIC",
                  src: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/saic.svg",
                },
                {
                  alt: "Hilton",
                  src: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/hilton.svg",
                },
                {
                  alt: "Group 1 Automotive",
                  src: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/group1-automotive.png",
                },
                {
                  alt: "Lowe's",
                  src: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/lowes.svg",
                },
                {
                  alt: "Polaris",
                  src: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/polaris.svg",
                },
                {
                  alt: "Gorillas",
                  src: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg",
                },
                {
                  alt: "Wolt",
                  src: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/wolt.svg",
                },
                {
                  alt: "Marriott",
                  src: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/marriott-intl.svg",
                },
                {
                  alt: "Merck",
                  src: "https://static.hexnode.com/v2/assets/img/logos/dark-logo/merck.svg",
                },
              ].map((logo, index) => (
                <div
                  key={index}
                  data-index={index}
                  className="slick-slide"
                  tabIndex={-1}
                >
                  <div>
                    <figure
                      className="block max-w-[130px] sm:max-w-[200px] w-full"
                      tabIndex={-1}
                    >
                      <img
                        alt={logo.alt}
                        loading="lazy"
                        width="260"
                        height="95"
                        decoding="async"
                        src={logo.src}
                        className="color:transparent"
                      />
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
