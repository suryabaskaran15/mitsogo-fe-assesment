import React, { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

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
    <section className="pb-[30px] pt-[60px] lg:pt-[120px] md:pb-[60px] bg-[#F7F7F7]">
      <div className="w-[88%] mx-auto max-w-[1300px]">
        <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-0 md:pb-[20px]">
          Why should you choose Hexnode?
        </h2>
        <div className="relative mx-auto overflow-hidden max-w-[960px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((review, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col md:flex-row overflow-hidden rounded-[18px] relative"
              >
                <div
                  key={index}
                  className="min-w-full flex flex-col md:flex-row overflow-hidden rounded-[18px] relative"
                >
                  <div className="w-full md:w-[50%] h-[320px]">
                    <img
                      alt={`${review.name} image`}
                      className="object-cover w-full h-full"
                      src={review.image}
                    />
                  </div>
                  <div className="w-full md:w-[50%] bg-white p-6 flex flex-col justify-center">
                    <h4 className="text-[20px] md:text-[24px] font-bold mb-4">
                      "{review.quote}"
                    </h4>
                    <p className="text-[16px] font-bold">{review.name}</p>
                    <small className="opacity-70">{review.company}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            // className="absolute top-[50%] left-[-40px] transform -translate-y-[50%] w-[40px] h-[40px] bg-white rounded-full shadow-md flex items-center justify-center"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
            onClick={handlePrev}
          >
            <MdNavigateBefore />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
            onClick={handleNext}
          >
            <MdNavigateNext />
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
