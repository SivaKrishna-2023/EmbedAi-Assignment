import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css";

const TryCardComponent = (props) => {
  const { cardList } = props;

  const settings = {
    dots: false,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    arrows: false,
    infinite: false,
    speed: 500,
    className: "mr-2",
    rows: 2,
  };

  const renderTryThisCards = (cardsDetails) => {
    const { id, title, subTitle, thumbnail } = cardsDetails;

    return (
      <div key={id}>
        <div className="try-this-card-bg">
          <img src={thumbnail} alt={title} className="try-this-card-img" />
          <div className="ml-3">
            <p className="try-this-card-title">{title}</p>
            <p className="try-this-card-subTitle">{subTitle}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cardList.map((each) => renderTryThisCards(each))}
      </Slider>
    </div>
  );
};

export default TryCardComponent;