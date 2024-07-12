import React from "react";
import Slider from "react-slick";
import list from '../../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";

function FreeBook() {
    // Filter free categories
    const freeBooks = list.filter((data) => data.category === "free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-lg mt-12 mb-6 container mx-3 md:mx-16 space-y-4'>
                <div>
                    <h1 className='font-semibold text-xl'>Below are the free ones</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum neque error quod placeat iure, exercitationem sapiente qui! Nesciunt, doloribus?</p>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        {freeBooks.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>

        </>

    );
}

export default FreeBook;
