import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
    const {t} = useTranslation()
    const settings = {
        infinite: true,
        speed: 6000, // Movimiento continuo
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Sin pausas
        cssEase: "linear", // Movimiento lineal continuo
        arrows: false,
        draggable: false,
        swipe: false,
        responsive: [
            {
                breakpoint: 1024, // Tablets y pantallas más pequeñas
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768, // Móviles en orientación horizontal
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480, // Móviles en orientación vertical
                settings: {
                    slidesToShow: 2,
                    speed: 4000,
                },
            },
        ],
    };

    const items = [
        {
            image: "./assets/icon-html.png",
            text: "HTML5",
        },
        {
            image: "./assets/icon-css.png",
            text: "CSS3",
        },
        {
            image: "./assets/icon-python.png",
            text: "Python",
        },
        {
            image: "./assets/icon-php.png",
            text: "PHP",
        },
        {
            image: "./assets/icon-javascript.png",
            text: "JavaScript",
        },
    ];

    return (
        <div className="bg-white p-5 py-24 sm:py-32">
            <motion.h2 className="text-start text-4xl sm:text-6xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }} 
            >{t("skills.title")}</motion.h2>
            <div className="mt-10">
                <Slider {...settings}>
                    {items.map((item, index) => (
                        <div key={index} className="px-6 text-center"> {/* Separación entre slides */}
                            <div className="gap-5 border p-3 rounded-lg shadow-sm flex flex-row justify-center items-center text-center space-y-2 rounded-r-[50px] rounded-l-[50px]">
                                <img
                                    src={item.image}
                                    alt={item.text}
                                    className="w-[25%] max-h-18 object-contain"
                                />
                                <span className="text-sm font-medium">{item.text}</span>
                            </div>                            
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Skills;
