import React from "react";

interface TabContentComponentProps {
  content: {
    heading: string;
    points: string[];
    image: string;
    alt: string;
  };
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

export default TabContent;
