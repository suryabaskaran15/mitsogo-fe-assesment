const Partner = () => {

  const partners = [
    {
      href: "https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/",
      imgSrc: "/src/assets/idc.png",
      imgAlt: "IDC",
      description:
        "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.",
    },
    {
      href: "https://www.hexnode.com/blogs/hexnode-listed-as-a-notable-vendor-in-gartner-midmarket-context-magic-quadranttm-for-unified-endpoint-management-tools/",
      imgSrc: "/src/assets/gartner.png",
      imgAlt: "Gartner",
      description:
        "Hexnode was recognized in the 2023 Gartner® Market Guide for Unified Endpoint Management Tools.",
    },
    {
      href: "https://www.hexnode.com/blogs/hexnode-included-in-the-unified-endpoint-management-landscape-report/",
      imgSrc: "/src/assets/forrester.png",
      imgAlt: "Forrester",
      description:
        "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.",
    },
  ];

  return (
    <div className="bg-[#1A1C2B] md:py-[30px]">
      <div className="w-[88%] max-w-[1300px] mx-auto">
        <div className="flex flex-col max-md:items-center md:flex-row justify-center mx-[0px] md:justify-between md:mx-[-10px] lg:mx-[-25px] xl:mx-[-45px]">
          {partners.map((item, index) => (
            <a
              key={index}
              target="_blank"
              className="group max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px] banner_accolades-wrap__r_Utd relative"
              href={item.href}
            >
              <div className="flex flex-col items-center md:items-baseline banner_accolades-content__tfXj3 group-hover:translate-y-[-10px] transition-transform duration-300">
                <div className="flex mb-[15px]">
                  <div className="flex items-center min-w-[82px] max-w-[156px] max-h-[25px] w-full h-full">
                    <img
                      alt={item.imgAlt}
                      loading="lazy"
                      width="83"
                      height="25"
                      decoding="async"
                      data-nimg="1"
                      className="w-full max-w-full h-[25px] object-cover"
                      style={{ color: "transparent" }}
                      src={item.imgSrc}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[14px] leading-[22px] text-[rgb(255,255,255,60%)] text-center md:text-left">
                    {item.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
          <div className="w-[107px] md:w-[1px] bg-[rgb(255,255,255,20%)] basis-[1px] last:hidden"></div>
        </div>
      </div>
    </div>
  );
}

export default Partner;