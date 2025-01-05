import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const settings = {
    infinite: true,
    speed: 5000, // Movimiento continuo
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Sin pausas
    cssEase: "linear", // Movimiento lineal continuo
    arrows: false,
  };

  const images = [
    "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg",
    "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
  ];

  return (
    <div className="bg-white p-5 py-24 sm:py-32">
       <h2 className='text-start text-6xl font-bold'>SKILLS</h2>
      <div className="mt-10">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={image}
                alt={`Logo ${index + 1}`}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
