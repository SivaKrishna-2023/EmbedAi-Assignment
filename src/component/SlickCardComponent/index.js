import React from "react";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BiMessageRounded } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickCardComponent = (props) => {
  const { cardList } = props;

  const settings = {
    dots: false,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    arrows: false,
    infinite: false,
    speed: 500,
    className: "mr-2",
  };

  const renderSliderCard = (cardDetails) => {
    const { id, name, title, description, followers, imageUrl } = cardDetails;

    return (
      <div key={id}>
        <div className="for-you-card-bg ">
          <img src={imageUrl} alt={name} className="for-you-card-img" />
          <div className="d-flex flex-column justify-content-between ml-3">
            <div className="ml-3">
              <p className="for-you-card-name">{name}</p>
              <p className="for-you-card-title">{title}</p>
              <p className="for-you-card-description">{description}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="for-you-card-follower">
                <BiMessageRounded className="mr-1" />
                {followers}
              </p>
              <button type="button" className="three-dot-btn">
                <BsThreeDots />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cardList.map((each) => renderSliderCard(each))}
      </Slider>
    </div>
  );
};

export default SlickCardComponent;