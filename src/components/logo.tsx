import React, { useState, useRef, useEffect } from "react";

const LogoCarousel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const logos = [
    { alt: "Costco", src: "/src/assets/logo/image.png" },
    { alt: "SAIC", src: "/src/assets/logo/image copy.png" },
    { alt: "Merck", src: "/src/assets/logo/image copy 2.png" },
    { alt: "Marriott", src: "/src/assets/logo/image copy 3.png" },
    { alt: "Marriott", src: "/src/assets/logo/image copy 4.png" },
    { alt: "Marriott", src: "/src/assets/logo/image copy 5.png" },
    { alt: "Marriott", src: "/src/assets/logo/image copy 6.png" },
    { alt: "Marriott", src: "/src/assets/logo/image copy 7.png" },
    { alt: "Marriott", src: "/src/assets/logo/image copy 8.png" },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (carouselRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const scroll = (x - startX) * 2; // Adjust the scrolling speed here
    carouselRef.current.scrollLeft = scrollLeft - scroll;
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault(); // Prevent the default drag behavior
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1; // Adjust this value for scrolling speed
      }
    }, 200); // Adjust the interval timing (20ms) for scroll speed

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="pb-[60px] pt-[10px] lg:pb-[120px] md:pt-[20px] bg-[#F7F7F7]">
      <div className="w-[88%] mx-auto md:max-w-[1300px] relative">
        {/* Left gradient overlay */}
        <div className="w-[70px] sm:w-[100px] h-[40px] sm:h-[80px] absolute left-0 bg-gradient-to-r from-[#F7F7F7] via-[#F7F7F7] to-transparent z-[1]"></div>

        {/* Right gradient overlay */}
        <div className="w-[70px] sm:w-[100px] h-[40px] sm:h-[80px] absolute right-0 bg-gradient-to-l from-[#F7F7F7] via-[#F7F7F7] to-transparent z-[1]"></div>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div
            className="flex space-x-4"
            style={{
              width: "100%",
            }}
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: "163px" }}
              >
                <figure className="block max-w-[130px] sm:max-w-[200px] w-full">
                  <img
                    alt={logo.alt}
                    src={logo.src}
                    className="w-full"
                    draggable={false} // Prevent native dragging
                    onDragStart={handleDragStart} // Prevent drag start event
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
