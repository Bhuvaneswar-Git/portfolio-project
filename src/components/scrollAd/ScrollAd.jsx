import React from 'react';
import './scrollAd.css';
import { FaInstagram } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

const ScrollAd = () => {

    const settings = {
        dots: false,        
        infinite: true,    
        speed: 500,       
        slidesToShow: 6,   
        slidesToScroll: 1,
        autoplay: true,    
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive:[
            {
                breakpoint:1200,
                settings:{
                    slidesToShow:4,
                },
            },
            {
                breakpoint:992,
                settings:{
                    slidesToShow:3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1   ,
                },
            },
        ], 
    };

    const images = [
        "/images/jpg/insta-img-8.jpg",
        "/images/jpg/insta-img-2.jpg",
        "/images/jpg/insta-img-7.jpg",
        "/images/jpg/insta-img-4.jpg",
        "/images/jpg/insta-img-5.jpg",
        "/images/jpg/insta-img-6.jpg"
    ]

  return (
    <div className='follow-area'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-center">
                        <h2>Follow Instagram</h2>
                        <p>@bhuvaneswar_10</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="instagram-follow-area">
            <div className="img-slider position-relative">
                <Slider {...settings} >
                    {images.map( (image,index)=>(
                        <div key={index} className='slider-item'>
                            <img src={image} alt={`insta-img-${index+1}`} />
                            <div className='img-hover-item'>
                                <a href="https://www.instagram.com/bhuvaneswar_10">
                                <FaInstagram/>
                                <span>Bhuvaneswar</span>
                                </a>
                            </div>
                        </div>
                    ) )}

                </Slider>
            </div>
        </div>

    </div>
  )
}

export default ScrollAd;
