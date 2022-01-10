import React from "react";
import Slider from "react-slick";

const CarouselItems = ({ rtl }) => {
  const Items = [
    {
      image: "image 14.png",
    },
    {
      image: "image 1.png",
    },
    {
      image: "image 4.png",
    },
    {
      image: "image 5.png",
    },
    {
      image: "image-5.png",
    },
    {
      image: "image 44.png",
    },
    {
      image: "image 19.png",
    },
    {
      image: "image 37.png",
    },
    {
      image: "image 14.png",
    },
    {
      image: "image 1.png",
    },
    {
      image: "image 4.png",
    },
  ];
  var settings = {
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: 'linear',
    rtl: rtl,
  };
  return (
    <div className="CarouselItems">
      {" "}
      <Slider {...settings}>
        {Items.map((item) => (
          <img src={`/images/${item.image}`} alt="" className="p-2" />
        ))}
      </Slider>
    </div>
  );
};

export default CarouselItems;
