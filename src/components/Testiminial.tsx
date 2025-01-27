import React, { useState } from "react";

const testimonials = [
  {
    quote: "Hexnode is of great value. Works great with Android and iOS!",
    name: "Justin Modrak",
    role: "Technology Coordinator",
    company: "East Troy Community School District",
    image:
      "https://static.hexnode.com/v2/assets/img/customer-images/justin-modrak.png",
  },
  {
    quote:
      "Most complete MDM solution I found, and I tested many of them, including major names.",
    name: "Dalibor Kruljac",
    role: "",
    company: "KAMELEYA LTD",
    image:
      "https://static.hexnode.com/v2/assets/img/customer-images/dalibor-kruljac.png",
  },
  {
    quote: "It seemed to be in-line with everything we were looking at.",
    name: "Chris Robinson",
    role: "Executive Account Manager",
    company: "NCS",
    image:
      "https://static.hexnode.com/v2/assets/img/customer-images/chris-robinson.png",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Why should you choose Hexnode?
        </h2>
        <div className="relative overflow-hidden">
          {/* Slider */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((review, index) => (
              <div
                key={index}
                className={`slick-slide ${
                  index === currentIndex ? "slick-active slick-current" : ""
                }`}
                style={{ width: "960px" }}
              >
                <div className="flex flex-col md:flex-row overflow-hidden rounded-[18px] relative group">
                  <div className="max-h-[400px] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[unset] md:h-[unset] lg:w-[320px] lg:h-[320px] relative md:basis-[47%] md:max-w-[320px] leading-[0px] overflow-hidden">
                    <img
                      alt={`${review.name} image`}
                      loading="lazy"
                      className="object-cover align-middle"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                      }}
                      src={review.image}
                    />
                  </div>
                  <div className="max-w-[640px] bg-[#ffffff] flex justify-center flex-col grow md:min-h-[310px]">
                    <div className="md:max-h-[125px] md:overflow-scroll px-[20px] md:pl-[60px] md:pr-[55px] pt-[20px] pb-[25px] md:py-0 md:mt-[40px] md:mb-[20px] cusreviewslider_hide-scrollbar__lQqUC">
                      <h4 className="text-[16px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[32px] text-[#020a19] font-bold text-center md:text-left antialiased">
                        "{review.quote}"
                      </h4>
                    </div>
                    <div className="px-[20px] py-[20px] md:pl-[60px] md:pr-[55px] md:py-0 flex flex-col justify-center items-center md:min-h-[120px]">
                      <span className="h-[2px] w-full bg-[#F7F7F7] relative top-[-20px] rounded-[5px]"></span>
                      <p className="text-center md:text-left w-full mx-auto text-[14px] leading-[11px] sm:text-[20px] sm:leading-[33px] pb-[5px] sm:pb-0 text-[#020a19] font-bold">
                        {review.name}
                      </p>
                      <small className="text-center md:text-left w-full mx-auto text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70">
                        {review.role}
                      </small>
                      <small className="text-center mx-auto text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70">
                        {review.company}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
