import React from 'react'
import Slider from "react-slick";
import {IoIosArrowDroprightCircle} from 'react-icons/io';
const Slide = () => {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false
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
             <div className="slide">
        <Slider {...settings}>
          <div className="slide1">
          <div className="underdiv">
            <h3>Lorem Ipsum</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
            <p>Know More<IoIosArrowDroprightCircle className="righticon"/></p>
        </div>
          </div>
          <div className="slide1">
          <div className="underdiv">
            <h3>Lorem Ipsum</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
            <p>Know More<IoIosArrowDroprightCircle className="righticon"/></p>
        </div>
          </div>
          <div className="slide1">
          <div className="underdiv">
            <h3>Lorem Ipsum</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
            <p>Know More<IoIosArrowDroprightCircle className="righticon"/></p>
        </div>
          </div>
          <div className="slide1">
          <div className="underdiv">
            <h3>Lorem Ipsum</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
            <p>Know More<IoIosArrowDroprightCircle className="righticon"/></p>
        </div>
          </div>
        </Slider>
      </div>
        </>
    )
}

export default Slide;
