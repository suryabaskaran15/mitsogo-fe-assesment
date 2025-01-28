import React, { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const CustomerReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      name: "Justin Modrak",
      title: "Technology Coordinator",
      company: "East Troy Community School District",
      review: "Hexnode is of great value. Works great with Android and iOS!",
      image:
        "https://static.hexnode.com/v2/assets/img/customer-images/justin-modrak.png",
    },
    {
      name: "Dalibor Kruljac",
      title: "KAMELEYA LTD",
      review:
        "Most complete MDM solution I found, and I tested many of them, including major names",
      image:
        "https://static.hexnode.com/v2/assets/img/customer-images/dalibor-kruljac.png",
    },
    // Add more reviews as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + reviews.length) % reviews.length
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
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {reviews.map((review, index) => (
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
                    "{review.review}"
                  </h4>
                  <p className="text-[16px] font-bold">{review.name}</p>
                  <small className="opacity-70">{review.title}</small>
                  <small className="opacity-70">{review.company}</small>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute top-[50%] left-[-40px] transform -translate-y-[50%] w-[40px] h-[40px] bg-white rounded-full shadow-md flex items-center justify-center"
            onClick={prevSlide}
          >
            <MdNavigateBefore color="black" />
          </button>
          <button
            className="absolute top-[50%] right-[-40px] transform -translate-y-[50%] w-[40px] h-[40px] bg-white rounded-full shadow-md flex items-center justify-center"
            onClick={nextSlide}
          >
            <MdNavigateNext color="black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
