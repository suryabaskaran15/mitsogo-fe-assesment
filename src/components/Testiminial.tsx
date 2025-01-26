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
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col items-center space-y-6 bg-white p-8 rounded-lg shadow-md"
              >
                <div className="w-24 h-24 overflow-hidden rounded-full border-2 border-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl text-gray-800 font-semibold">
                  "{testimonial.quote}"
                </p>
                <p className="text-gray-700 font-bold">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">
                  {testimonial.role && `${testimonial.role},`}{" "}
                  {testimonial.company}
                </p>
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
